import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import EventDecorSection from "@/components/EventDecorSection"
import {GallerySection} from "@/components/gallery-section"
import { SiteFooter } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen min-w-full">
      <SiteHeader />
      <main className="flex-grow  ">
        <HeroSection  />
        <FeaturedProducts  />
        <EventDecorSection  />
        <GallerySection  />
        <SiteFooter  />
      </main>
    </div>
  )
}
