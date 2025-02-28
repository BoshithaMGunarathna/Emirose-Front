import { Button } from "@/components/ui/button"
import Image from "next/image";

import { longArrow, heart } from "../../public/icons/index"



export function HeroSection() {
  return (
    <section className=" pl-20   sm:px-6 lg:px-8 grid grid-cols-1 gap-6  md:grid-cols-3 md:py-16">

      {/* 1st column */}
      <div className="flex flex-col justify-start space-y-4 pl-20 pr-10 pb-20 gap-5">
        <h1 className="text-[60px] leading-10 font-semibold  text-[#491247] md:text-5xl">
          Crafting Elegance in Every Bloom for Your Special Moments
        </h1>
        <p className="text-[#1E1E1E] pr-10">
          Creating timeless wedding memories with exquisite floral designs and heartfelt arrangements.
        </p>
      </div>

      {/* 2nd column */}
      <div className="md:col-span-1 flex flex-col items-center">
        <div className="relative h-[580px] w-[480px]"> {/* Set a specific height for the image container */}
          <Image
            src="/images/heroImg.png"
            alt="Elegant Flowers"
            fill
            className="object-contain" 
            priority
          />
        </div>

        {/* 3rd column */}
        <Button className="mt-4 w-[330px] align-middle border-2 border-[#491247] text-[#491247] rounded-[10px] hover:bg-purple-900 hover:text-white" size="lg">
          Shop Now
        </Button>
      </div>

      {/* 3rd column for New Arrivals */}

      <div>

      <div className="bg-[#FFF5FF] p-6 flex flex-col justify-between h-[480px] relative">
        <div className="mb-4 text-center">
          <h2 className="text-[30px] font-bold text-[#491247]">New Arrivals</h2>
          <p className="mb-2 text-[20px] text-[#491247] font-semibold">Fresh & Exquisite Blooms!</p>
        </div>


        <div className="flex mb-4 w-full items-center justify-evenly"> {/* Use flex to align items side by side */}
          <div className="relative aspect-square w-2/5"> {/* Adjust width for the image */}
            <Image
              src="/images/Purple Lover 1.png"
              alt="New Arrival Bouquet"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-[18px] text-[#1E1E1E] font-normal w-1/2 leading-[1.5]">
            A delicate blend of elegance and charm, these roses symbolize love, admiration, and gratitude, making them
            perfect for any special moment.
          </p>
        </div>

        <div className="flex items-center justify-evenly gap-4">
          <Button className="bg-[#772B75] w-[180px] text-white hover:bg-[#b83fb4]">Buy Now</Button>
          <Button className="border-2 border-[#491247]" size="icon">
            {heart()}
          </Button>
          <Button size="icon">
            {longArrow()}
          </Button>
        </div>

        <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[5%]">
          <Image
            src="/images/flower.png"
            alt=""
            width={100}
            height={100} 
            className="opacity-80"
          />
        </div>


      
      </div>
      <div className=" max-w-full p-6 mx-auto mt-4 rounded-lg">
          <div className="flex items-center gap-1 mb-3">
            <div className="flex -space-x-4">
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Ellipse 24.png"
                  alt="Customer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Ellipse 25.png"
                  alt="Customer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/images/Ellipse 26.png"
                  alt="Customer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="ml-2 font-semibold text-[#491247] text-[18px]">
              Chosen by 30+ Delighted Customers
            </span>
          </div>
          <p className="text-[#1E1E1E] text-[16px]">
            EmiiRose is known
            for elegant floral designs and
            impeccable
            wedding
            décor.Let
            us
            add
            beauty
            to
            your
            special
            moments.
          </p>
        </div>

      </div>
   

    </section>

  )
}

