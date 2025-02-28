"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getProduct, getRelatedProducts } from "@/data/products"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/footer"

export default function ProductPage({ params }: { params: { id: string } }) {
    const [quantity, setQuantity] = useState(1)
    interface Product {
        id: string;
        name: string;
        description: string;
        price: number;
        category: string;
        imageUrl: string;
    }

    const [product, setProduct] = useState<Product | null>(null)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setQuantity(1)
        const selectedProduct = getProduct(params.id)
        setProduct(selectedProduct)

        if (selectedProduct) {
            const related = getRelatedProducts(selectedProduct.id)
            setRelatedProducts(related)
        }

        setLoading(false)
    }, [params.id])

    if (loading) {
        return <div className="container py-20 text-center">Loading...</div>
    }

    if (!product) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Product Not Found</h2>
                <Link href="/shop" className="text-purple-900 underline">
                    Return to Shop
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen ">
            <SiteHeader />
            {/* Header */}
            <div className="">
                <div className=" py-12">
                    <h1 className="text-[50px] font-semibold text-[#491247] mb-6 pl-10 pt-16 pb-16 bg-[#FFF5FF]">Item Details</h1>
                </div>
            </div>

            {/* Product Details */}
            <div className=" py-8">
                <Link href="/shop" className=" pl-20 inline-flex items-center text-gray-600 hover:text-purple-900 mb-8">
                    <ArrowLeft className=" mr-2 h-4 w-4" />
                    Back to Store
                </Link>

                <div className="pl-20 pr-20 grid md:grid-cols-2 gap-12">
                    <div className="relative w-full flex justify-center items-center">  
                        <Image
                            src={product.imageUrl || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <h2 className="text-[30px] font-semibold text-[#491247]">{product.name}</h2>
                            <Button variant="outline" size="icon" className="rounded-lg">
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>

                        <p className="text-[#1E1E1E] text-[20px] font-regular">{product.description}</p>

                        <div className="text-[30px] font-bold text-[#491247]">Rs {product.price.toFixed(2)}</div>

                        <div className="space-y-2">
                            <div className="text-[#000000] text-[20px] font-medium ">
                                Product Category: <span >{product.category}</span>
                            </div>
                            <div className="flex items-center text-[[#491247]] text-[20px] font-medium">
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Free Delivery
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <Minus className="h-4 w-4 text-[#491247]" />
                            </Button>
                            <span className="text-xl font-medium w-12 text-center text-[#491247]">{quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                                <Plus className="h-4 w-4 text-[#491247]" />
                            </Button>
                            <Button  className="ml-4" onClick={() => { }}>
                                <Heart className="mr-2 h-4 w-4" />
                                Add to Wishlist
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            <Button className="flex-1 border border-[#491247] text-[#491247] text-[18px] " >
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                            </Button>
                            <Button className="flex-1 bg-[#491247] text-white hover:bg-[#491247] text-[18px]">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <section className="pl-20 pr-20 py-16">
                <h3 className="text-center text-sm text-[#491247] mb-2">You Might Also Like</h3>
                <h2 className="text-3xl font-bold text-[#491247] text-center mb-12">New Arrivals</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {relatedProducts.map((product) => (
                        <Link key={product.id} href={`/shop/${product.id}`}>
                            <ProductCard {...product} />
                        </Link>
                    ))}
                </div>

                {/* Pagination  */}
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-900"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
            </section>
            <SiteFooter />
        </div>
    )
}