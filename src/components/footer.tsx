import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, PhoneIcon as WhatsApp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="container px-8 py-8 md:py-12"> {/* Reduced padding */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image src="/images/logo.png" alt="EmiRose" width={200} height={80} className="mb-4" /> {/* Reduced margin */}
            <p className="text-gray-600 pr-4">
              Committed to guiding students toward their dreams of studying in Japan, we offer expert support, from visa
              assistance to cultural preparation. Let us help you take the first step toward a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Quick Links</h3> {/* Reduced margin */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"> {/* Reduced spacing */}
                <Link href="/" className="block text-gray-600 hover:text-purple-800">
                  Home
                </Link>
                <Link href="/about-us" className="block text-gray-600 hover:text-purple-800">
                  About Us
                </Link>
                <Link href="/shop" className="block text-gray-600 hover:text-purple-800">
                  Shop
                </Link>
                <Link href="/blogs" className="block text-gray-600 hover:text-purple-800">
                  Blogs
                </Link>
              </div>
              <div className="space-y-2"> {/* Reduced spacing */}
                <Link href="/contact-us" className="block text-gray-600 hover:text-purple-800">
                  Contact Us
                </Link>
                <Link href="/gallery" className="block text-gray-600 hover:text-purple-800">
                  Gallery
                </Link>
                <Link href="/events" className="block text-gray-600 hover:text-purple-800">
                  Events
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Contact Us</h3> {/* Reduced margin */}
            <div className="space-y-2"> {/* Reduced spacing */}
              <div className="flex items-center gap-2"> {/* Reduced gap */}
                <Mail className="h-5 w-5 text-purple-800" />
                <span className="text-gray-600">info@emirose.com</span>
              </div>
              <div className="flex items-center gap-2"> {/* Reduced gap */}
                <Phone className="h-5 w-5 text-purple-800" />
                <span className="text-gray-600">+94 71 734 159</span>
              </div>
              <div className="flex items-start gap-2"> {/* Reduced gap */}
                <MapPin className="h-5 w-5 text-purple-800" />
                <span className="text-gray-600">Galle Rd, Kalutara</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Follow Us</h3> {/* Reduced margin */}
            <div className="flex gap-3"> {/* Reduced gap */}
              <Link
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200"
              >
                <Facebook className="h-4 w-4" /> {/* Reduced size */}
              </Link>
              <Link
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200" 
              >
                <Instagram className="h-4 w-4" /> {/* Reduced size */}
              </Link>
              <Link
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200"
              >
                <WhatsApp className="h-4 w-4" /> {/* Reduced size */}
              </Link>
              <Link
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200" 
              >
                <Linkedin className="h-4 w-4" /> {/* Reduced size */}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#491247] text-white py-2 px-4"> {/* Reduced padding */}
        <div className="container flex justify-end gap-4 text-sm">
          <span>058888888888888</span>
          <span>058888888888888</span>
        </div>
      </div>
    </footer>
  );
}
