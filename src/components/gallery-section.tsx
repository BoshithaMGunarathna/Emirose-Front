import Image from "next/image"

export function GallerySection() {
  return (
    <section className="w-full  py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-900 mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our beautifully crafted floral designs for every occasion. From weddings to corporate events, we bring
          elegance and creativity to every floral arrangement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left side */}
        <div className="relative h-full md:h-128 col-span-1">
          <Image
            src="/images/gallery1.png"
            alt="Pink and purple flower arrangement with lilies"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side */}
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-auto">
           
            <div className="relative h-64">
              <Image
                src="/images/gallery2.png"
                alt="Purple and white tulip bouquet"
                fill
                className="object-cover "
              />
            </div>


            <div className="relative h-40">
              <Image
                src="/images/gallery3.png"
                alt="Pink lily arrangement"
                fill
                className="object-cover "
              />
            </div>


            <div className="relative h-100 col-span-1">
              <Image
                src="/images/gallery4.png"
                alt="Pink and purple flower bouquet"
                fill
                className="object-cover "
              />
            </div>

      
            <div className="relative h-100 -mt-24">
              <Image
                src="/images/gallery5.png"
                alt="Purple and white rose bouquet"
                fill
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}