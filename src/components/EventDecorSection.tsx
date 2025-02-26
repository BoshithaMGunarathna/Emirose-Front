import Image from "next/image";
import Link from "next/link";


const EventDecorSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side with description */}
      <div className="w-full md:w-1/3 flex flex-col justify-center p-4 md:p-8">
        <h2 className="text-3xl font-bold text-[#491247] mb-4">
          Explore Our Event Décor Services
        </h2>
        <p className="text-[#1E1E1E] text-[20px] mb-6">
          At EmilRose Floral Creations, we specialize in transforming your events with stunning floral arrangements tailored to your unique vision. Whether  a wedding, anniversary, or corporate gathering, our expert team will create the perfect floral ambiance for your special day.
        </p>
        <Link href="/services">
          <div className="border border-purple-900 text-purple-900 py-2 px-4 rounded inline-flex items-center w-fit cursor-pointer hover:bg-purple-100 transition-colors">
            <span className="mr-2">View More</span>
            <span>→</span>
          </div>
        </Link>
      </div>

      {/* Right side with images */}
      <div className="w-full md:w-2/3 flex">
        <div className="w-1/2 p-1">
          <div className="relative h-[500px] W-[370PX]">
            <Image 
              src="/images/servicesImg.png" 
              alt="Elegant table setting with hanging floral arrangements"
              fill
              className="object-cover "
            />
          </div>
        </div>
        <div className="w-1/2 p-1">
          <div className="relative h-[500px] W-[370PX]">
            <Image 
              src="/images/servicesImg.png" 
              alt="Stunning table decoration with pink floral centerpieces"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDecorSection;
