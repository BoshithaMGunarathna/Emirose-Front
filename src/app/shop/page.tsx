import { SiteFooter } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { SiteHeader } from "@/components/site-header"
import { products } from "@/data/products" 
import Link from "next/link"

export default function ShopPage() {
    

    return (
        <div className="min-h-screen min-w-full ">
            <SiteHeader />

            <div className=" py-12">
                <h1 className="text-[50px] font-semibold text-[#491247] mb-6 pl-10 pt-16 pb-16 bg-[#FFF5FF] ">Shop</h1>

                <div className="flex justify-between items-center mb-8">
                    <p className="text-[#1E1E1E] pl-20">Showing 1-10 of 20 Results</p>
                    <button className="px-4 py-2 pr-20 border rounded-md text-[#491247] hover:border#491247-[]">
                        Sort by Catagary
                    </button>
                </div>


                <div className="grid grid-cols-1 pl-20 pr-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                {products.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`}>
                        <ProductCard {...product} />
                    </Link>
                ))}
                </div>

                {/* Testimonials Section */}
                <section className="py-16">
                    <h2 className="text-[50px] font-semibold text-[#491247] text-center mb-6">What Our Clients Say</h2>
                    <p className="text-[#1E1E1E] text-[20px] text-center max-w-3xl mx-auto mb-12">
                        Hear from our delighted customers who have experienced the beauty and elegance of EmiRose. Let us bring the
                        same charm to your special moments with our exquisite floral creations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-20 pr-20">
                        <div className="bg-[#FFF5FF] p-6 rounded-lg">
                            <p className="text-[#1E1E1E] mb-4">
                                &quot;From ordering to delivery, everything was seamless. The flowers were fresh, vibrant, and smelled
                                amazing!&quot;
                            </p>
                            <p className="text-[#491247] font-medium">- Amanda & Jake</p>
                        </div>
                        <div className="bg-[#FFF5FF] p-6 rounded-lg">
                            <p className="text-[#1E1E1E] mb-4">
                                &quot;The bridal bouquet was beyond perfect! Fresh, beautifully arranged, and exactly what I envisioned.&quot;
                            </p>
                            <p className="text-[#491247] font-medium">- Sophia R.</p>
                        </div>
                        <div className="bg-[#FFF5FF] p-6 rounded-lg">
                            <p className="text-[#1E1E1E] mb-4">
                                &quot;EmiRose exceeded our expectations! Their attention to detail and quality of flowers made our event
                                unforgettable!&quot;
                            </p>
                            <p className="text-[#491247] font-medium">- Michael D.</p>
                        </div>
                    </div>
                </section>
            </div>
            <SiteFooter />
        </div>
    )
}

