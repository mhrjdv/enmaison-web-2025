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
        <section className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left">
                    <h2 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</h2>
                </div>
                <div>
                    <h3 className="pb-6 text-xl font-bold tracking-wider">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</h3>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                We create distinctive and unique designs that are inspired by the latest trends in interior design and fashion.
                            </p>
                            <Link href="/gallery" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">
                                View Gallery <TbArrowUpRight className="size-5 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

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
                className="mt-8"
            >
                {swiperImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={520}
                            height={220}
                            className="w-full rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}