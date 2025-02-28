"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/footer";

const dummyUpdates = [
    {
        id: 1,
        image: "/images/aboutusImg4.png",
        title: "New Floral Collection Launch",
        description: "We are excited to introduce our latest floral collection for the season...",
        date: "2025-03-17",
        link: "/blog",
    },
];



export default function AboutUs() {

    interface Update {
        id: number;
        image: string;
        title: string;
        description: string;
        date: string;
        link: string;
    }

    const [updates, setUpdates] = useState<Update[]>([]);

    useEffect(() => {
        // Simulate fetching from backend
        setUpdates(dummyUpdates);
    }, []);

    return (
        <div className="min-h-screen min-w-full ">
            <SiteHeader />

            <div className="">
                <div className=" py-12">
                    <h1 className="text-[50px] font-semibold text-[#491247] mb-6 pl-10 pt-16 pb-16 bg-[#FFF5FF] ">About Us</h1>
                    <p className="text-[#1E1E1E] text-[20px] pt-5 pb-5 pl-10 max-w-4xl ">
                        Welcome to EmiRose Floral Creations, where elegance and nature unite to create unforgettable moments. We are
                        a dedicated floral design business, specializing in wedding and event décor, as well as offering stunning
                        flower arrangements for every occasion. Whether you need flowers for your wedding, corporate event, or a
                        heartfelt gift, we are here to help bring your floral vision to life.
                    </p>
                </div>
                <div className="relative h-[600px] w-full">
                    <Image
                        src="/images/aboutusimg.png?height=300&width=1400"
                        alt="Purple flowers banner"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Our Story Section */}
            <section className="w-full">
                <div className="grid md:grid-cols-[3fr,2fr] gap-8 items-stretch">
                    <div className="flex flex-col justify-between pt-20 pb-10">
                        <div className="space-y-4">
                            <h2 className="text-[50px] font-bold text-[#491247] pl-20 mb-4">Our Story</h2>
                            <p className="text-[#1E1E1E] pl-20 text-[20px]">
                                At EmiRose, we understand the language of flowers and their ability to elevate any occasion. Founded by a passionate
                                team of floral designers, our mission is to provide bespoke floral designs for weddings, events, and special moments.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 mt-10">
                            <div className="relative w-full h-64 sm:h-[400px]">
                                <Image
                                    src="/images/aboutusImg2.png"
                                    alt="Pink and purple flower bouquet"
                                    layout="fill"
                                    objectFit="cover"
                                    className=""
                                />
                            </div>

                            <div className="space-y-6 pt-10">
                                {[
                                    { number: "300+", text: "Satisfied clients" },
                                    { number: "5 years+", text: "In the floral industry" },
                                    { number: "150+", text: "Events successfully decorated" }
                                ].map((stat) => (
                                    <div key={stat.number} className="flex flex-col items-center justify-center text-center">
                                        <h3 className="text-3xl font-bold text-[#491247]">{stat.number}</h3>
                                        <p className="text-[#1E1E1E]">{stat.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="relative w-full h-full flex">
                        <Image
                            src="/images/aboutusmg3.png"
                            alt="Large flower arrangement"
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
            </section>



            {/* What We Do Section */}
            <section className="b py-16">
                <div className="container">
            
                    <h2 className="text-[50px] font-semibold text-[#491247] pl-20 mb-8 text-center md:text-left">What We Do</h2>

                    <div className="grid md:grid-cols-2 pt-10 pl-20 pr-20 gap-12 items-center">
                
                        <div className="relative aspect-[4/4] w-full max-w-[500px]">
                            <Image
                                src="/images/aboutusImg2.png?height=450&width=450"
                                alt="Flower arrangement"
                                fill
                                className="object-cover "
                            />
                        </div>

                
                        <div>
                            <p className="text-[#1E1E1E] text-[20px] mb-6">
                                We offer a wide range of floral services, from elegant wedding décor to personalized flower arrangements
                                for any event or gift. Whether you are planning a grand celebration, an intimate gathering, or just
                                looking for the perfect bouquet, we curate each design with attention to detail and a touch of nature&apos;s beauty:
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    <li className="text-[#1E1E1E]">• Floral Gifts & Bouquets</li>
                                    <li className="text-[#1E1E1E]">• Wedding Décor</li>
                                    <li className="text-[#1E1E1E]">• Corporate Floral Design</li>
                                    <li className="text-[#1E1E1E]">• Festive & Holiday Floral Décor</li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="text-[#1E1E1E]">• Event Setup & Delivery</li>
                                    <li className="text-[#1E1E1E]">• Event & Party Décor</li>
                                    <li className="text-[#1E1E1E]">• Baby Shower & Gender Reveal Décor</li>
                                    <li className="text-[#1E1E1E]">• Grand Openings & Store Launches</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Latest Updates Section */}
            <section className="py-16 px-20">
                <h2 className="text-[50px] font-semibold text-[#491247] mb-12">Our Latest Updates</h2>

                {updates.map((update) => {
 
                    const dateObj = new Date(update.date);
                    const day = dateObj.getDate();
                    const month = dateObj.toLocaleString("en-US", { month: "short" }); 
                    const year = dateObj.getFullYear();

                    return (
                        <div key={update.id} className="grid md:grid-cols-[400px,1fr] gap-8 items-start pl-5">
               
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src={`${update.image}?height=300&width=400`}
                                    alt={update.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>


                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-lg font-bold text-[#491247]">{day}</span>
                                    <span className="bg-[#491247] text-white text-sm px-2 py-1 rounded-md">{month}</span>
                                    <span className="text-lg font-bold text-[#491247]">{year}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#491247] mb-4">{update.title}</h3>
                                <p className="text-[#1E1E1E] mb-4">{update.description}</p>
                                <Link href={update.link} className="inline-flex items-center text-[#491247] font-medium hover:text-[#491247cc]">
                                    Read blog
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </section>
               <SiteFooter  />
        </div>
    )
}

