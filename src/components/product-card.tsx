import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: number
  imageUrl: string
}

export function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-square mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="rounded-lg object-cover" />
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-2 bg-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-purple-900">{name}</h3>
      <div className="flex items-center justify-between">
        <p className="font-medium">Rs {price.toFixed(2)}</p>
        <Button variant="outline" className="text-purple-800 hover:text-purple-900">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

