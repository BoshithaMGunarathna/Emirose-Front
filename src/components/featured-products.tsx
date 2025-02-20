import { ProductCard } from "./product-card"

export function FeaturedProducts() {
    const products = [
      {
        name: "Product nAME",
        price: 99.0,
        imageUrl: "/placeholder.svg?height=400&width=400",
        description:
          "A touch of elegance with our Cream Magnolia Fake Flower Branch, featuring realistic blooms for any occasion.",
      },
      {
        name: "Product nAME",
        price: 99.0,
        imageUrl: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Product nAME",
        price: 99.0,
        imageUrl: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Product nAME",
        price: 99.0,
        imageUrl: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Product nAME",
        price: 99.0,
        imageUrl: "/placeholder.svg?height=400&width=400",
      },
    ]
  
    return (
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-purple-900">Featured Floral Creations</h2>
            <p className="text-gray-600">
              Explore our carefully curated selection of signature floral designs, perfect for weddings, events, and
              gifts. Each piece is crafted with the finest blooms to ensure your occasion is filled with elegance and
              beauty.
            </p>
          </div>
          <div className="grid gap-6 bg-pink-50/50 p-6 sm:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  