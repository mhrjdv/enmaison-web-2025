"use client";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CatalogSwiperSection() {
    const swiperImages = [
        { src: "/image/swiper1.jpg", alt: "Interior design showcase 1" },
        { src: "/image/swiper2.jpg", alt: "Interior design showcase 2" },
        { src: "/image/swiper3.jpg", alt: "Interior design showcase 3" },
        { src: "/image/swiper4.jpg", alt: "Interior design showcase 4" },
        { src: "/image/swiper5.jpg", alt: "Interior design showcase 5" },
    ];

    return (
        <section className="py-8 lg:py-28 bg-gradient-to-br from-white to-enmaison-cream">
            <div className="container grid pb-8 lg:grid-cols-2 gap-8">
                <div className="text-left">
                    <h2 className="py-4 text-4xl font-bold lg:text-6xl lg:py-0 text-enmaison-dark-green">
                        <span className="text-enmaison-gold">Modern</span> Classic
                    </h2>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-enmaison-gold/20 shadow-lg">
                    <h3 className="pb-6 text-xl font-bold tracking-wider text-enmaison-teal">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 text-enmaison-dark-green/80 gap-x-8 gap-y-4">
                        <div>
                            <p>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                We create distinctive and unique designs that are inspired by the latest trends in interior design and fashion.
                            </p>
                            <Link href="/gallery" className="inline-flex items-center pt-4 text-lg font-bold text-enmaison-gold hover:text-enmaison-green transition-colors duration-300 group">
                                View Gallery <TbArrowUpRight className="size-5 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-enmaison-gold/10 via-transparent to-enmaison-teal/10 pointer-events-none"></div>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="mt-8 relative z-10"
                >
                    {swiperImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-enmaison-dark-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10"></div>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={520}
                                    height={220}
                                    className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-2 border-enmaison-gold/20"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}