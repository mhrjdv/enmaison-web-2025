"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "02",
            catagory: "KITCHING SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
    ]

    return (
        <div className="grid gap-8 divide-enmaison-gold/30 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2 bg-gradient-to-br from-enmaison-cream to-white">
            {items.map((item, index) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div className="relative">
                        <Image src={item.image} width={380} height={100} alt="" className="w-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-enmaison-dark-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-gradient-to-br from-white/90 to-enmaison-cream/90 backdrop-blur-md rounded-2xl border border-enmaison-gold/20 shadow-xl">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm font-medium text-enmaison-dark-green/70">{item.catagory}</p>
                            <span className="text-sm font-bold text-enmaison-gold bg-enmaison-green/10 px-2 py-1 rounded-full">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold text-enmaison-dark-green hover:text-enmaison-green transition-colors duration-300" href="">{item.title}</a>
                        <p className="py-4 text-enmaison-dark-green/60">{item.description}</p>
                        <a className="inline-flex items-center font-medium text-enmaison-gold hover:text-enmaison-green transition-colors duration-300 group/link" href="">
                            See Details 
                            <TbArrowNarrowRight className="ml-2 text-xl transition-transform duration-300 group-hover/link:translate-x-1" />
                        </a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-500 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-gradient-to-br from-enmaison-green to-enmaison-teal text-white">
                        <p className="tracking-wider -rotate-90 font-semibold">{item.catagory} </p>
                        <span className="text-3xl font-bold text-enmaison-gold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            {item.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}