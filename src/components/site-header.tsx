import Link from "next/link"
import { Phone, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="w-full ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div>
            <Phone className="h-4 w-4 text-[#491247]" />
          </div>
          <div className="flex flex-col"> {/* Use flex-col to stack items vertically */}
            <span className="text-sm text-[#491247]">Call Us</span>
            <span className="text-sm">02445545555</span>
          </div>
        </div>


        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="EmiRose"
            width={120}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex items-center gap-2">
            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center"> {/* Increase the height and width for the background */}
              <ShoppingCart className="h-5 w-5 text-[#772B75]" /> {/* Keep the icon size the same */}
            </div>
            <span className="text-sm">Cart</span>
          </Link>
          <Link href="/wishlist" className="flex items-center gap-2">
            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center"> {/* Increase the height and width for the background */}
              <Heart className="h-5 w-5 text-[#772B75]" /> {/* Keep the icon size the same */}
            </div>

            <span className="text-sm">Wishlist</span>
          </Link>
        </div>
      </div>
      <nav className=" border-t border-[#0000002B]">
        <div className="container flex h-12 pt-3 items-center justify-center gap-6">
          {["Home", "About Us", "Shop", "Blogs", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors ${item === "Home"
                ? "text-white bg-[#772B75] px-4 py-1 rounded" // Add padding and rounded corners for the selected item
                : "text-black"
                }`}
            >
              {item}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  )
}

