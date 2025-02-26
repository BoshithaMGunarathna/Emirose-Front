import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: number
  imageUrl: string
  description?: string
  size?: "small" | "large"
}

export function ProductCard({ name, price, imageUrl, description, size = "small" }: ProductCardProps) {
  return (
    <div className="group relative bg-[#FFF5FF] min-w-[310px] min-h-[400px] flex flex-col items-center justify-between p-4">
      <div className="relative mb-4 w-full">
        <div className="relative mx-auto" style={{ width: "200px", height: "200px" }}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
        <div className="pr-4 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1 h-8 w-8 rounded-[5px] border-[#491247] bg-inherit"
          >
            <Heart className="h-4 w-4 text-[#491247]" />
          </Button>
        </div>
      </div>

      {/* Conditional rendering based on card size */}
      {size === "large" ? (
        <div className="w-full p-8">
          <h3 className="font-semibold text-[#491247] text-lg text-center mb-2">{name}</h3>
          <div className="flex justify-between items-center w-full">
            {description && <p className="text-[20px] text-[#231F20] text-left flex-grow">{description}</p>}

          </div>
          <div className="flex justify-between items-center w-full">
            <p className="font-medium text-black ml-4">Rs {price.toFixed(2)}</p>
            <Button
              variant="outline"
              size="sm"
              className="bg-inherit border-[#491247] w-[230px] text-[#491247] hover:bg-purple-50 hover:text-purple-900"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2 text-center">
          <h3 className="font-semibold text-black text-lg">{name}</h3>
          {description && <p className="text-sm text-gray-600">{description}</p>}
          <p className="font-medium text-black">Rs {price.toFixed(2)}</p>
          <Button
            variant="outline"
            size="sm"
            className="bg-inherit border-[#491247] w-[230px] text-[#491247] hover:bg-purple-50 hover:text-purple-900"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      )}
    </div>
  )
}