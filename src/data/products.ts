
export const products = Array(12)
  .fill(null)
  .map((_, index) => ({
    id: `product-${index + 1}`,
    name: `Product ${index + 1}`,
    price: 99.0,
    imageUrl: "/images/1.png?height=400&width=400",
    description: `Description for Product ${index + 1}. Lorem ipsum dolor sit amet consectetur. Tristique eu nam sollicitudin tristique. Pharetra lorem pellentesque amet sagittis molestie diam quis. Quam non egestas.`,
    category: "Plant",
  }))


export function getProduct(id: string) {
  return products.find(p => p.id === id) || null
}

export function getRelatedProducts(currentProductId: string, limit = 3) {
  return products
    .filter(p => p.id !== currentProductId)
    .slice(0, limit)
}