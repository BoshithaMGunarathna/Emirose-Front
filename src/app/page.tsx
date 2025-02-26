import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import EventDecorSection from "@/components/EventDecorSection"
import {GallerySection} from "@/components/gallery-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection  />
        <FeaturedProducts  />
        <EventDecorSection  />
        <GallerySection  />
      </main>
    </div>
  )
}
