import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection  />
        <FeaturedProducts  />
      </main>
    </div>
  )
}
