import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const products = [
    {
      name: "Product nAME",
      price: 99.0,
      imageUrl: "/images/1.png?height=200&width=200",
      description:
        "A touch of elegance with our Cream Magnolia Fake Flower Branch, featuring realistic blooms for any occasion.",
    },
    {
      name: "Product nAME",
      price: 99.0,
      imageUrl: "/images/1.png?height=200&width=200",
    },
    {
      name: "Product nAME",
      price: 99.0,
      imageUrl: "/images/1.png?height=200&width=200",
    },
    {
      name: "Product nAME",
      price: 99.0,
      imageUrl: "/images/1.png?height=200&width=200",
    },
    {
      name: "Product nAME",
      price: 99.0,
      imageUrl: "/images/1.png?height=200&width=200",
    },
  ]

  // Get first product for featured display
  const featuredProduct = products[0]
  // Get next 4 products for grid display
  const gridProducts = products.slice(1, 5)

  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-[1.2fr,2fr]">
        <div className="pl-16 pr-12 pt-12 bg-[#FFF5FF] min-w-[650px]">
          <div className="mb-8">
            <h2 className="mb-4 text-4xl font-bold text-[#491247] relative inline-block">
              Featured Floral
              <br />
              Creations
             
            </h2>
            <p className="text-[#1E1E1E] text-[20px]">
              Explore our carefully curated selection of signature floral designs, perfect for weddings, events, and
              gifts. Each piece is crafted with the finest blooms to ensure your occasion is filled with elegance and
              beauty.
            </p>
          </div>
          <div className="mt-8">
            <ProductCard {...featuredProduct} size="large" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          {gridProducts.map((product, index) => (
            <ProductCard key={index} {...product} size="small" />
          ))}
        </div>
      </div>

      
    </section>
  )
}