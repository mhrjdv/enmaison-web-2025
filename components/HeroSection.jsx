"use client";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import { FlipWords } from "@/components/ui/flip-words";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
    // Hero carousel images
    const heroImages = [
        { src: "/image/kitchen.png", alt: "Modern kitchen interior design", caption: "Modern Kitchen Design" },
        { src: "/image/living.jpg", alt: "Elegant living room design", caption: "Elegant Living Space" },
        { src: "/image/badroom.jpg", alt: "Contemporary bedroom design", caption: "Contemporary Bedroom" },
        { src: "/image/gallery12.jpg", alt: "Luxury interior design", caption: "Luxury Interior" },
        { src: "/image/kitchen1.jpg", alt: "Contemporary kitchen design", caption: "Contemporary Kitchen" },
    ];
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 pt-16 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-gray-200"></div>
                <div className="absolute top-1/2 left-1/4 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-gray-200"></div>
            </div>

            {/* Extended background for header overlap */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-50 to-zinc-50/0 z-10"></div>

            <div className="container relative z-10 px-4 sm:px-6 md:px-8">
                <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left content */}
                    <div className="pt-16 sm:pt-8 md:pt-4 lg:pt-0 space-y-6 sm:space-y-8 text-center lg:text-left">
                        <div className="space-y-4 sm:space-y-5">
                            <p className="inline-block px-3 py-1 text-xs sm:text-sm font-medium tracking-widest text-gray-900 bg-gray-100 rounded-full">PREMIUM INTERIOR DESIGN</p>

                            <div className="lg:text-left space-y-1 sm:space-y-2">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-800 lg:text-5xl xl:text-6xl">
                                    An aesthetic room is
                                </h1>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight lg:text-5xl xl:text-6xl text-center lg:text-left">
                                    <FlipWords
                                        words={[
                                            "given",
                                            "beautifully ",
                                            "perfectly ",
                                            "thoughtfully",
                                        ]}
                                        className="text-gray-900 inline-block"
                                        duration={3000}
                                    />
                                </div>
                            </div>

                            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 px-1 sm:px-0">
                                Transform your space with our expert interior design services. We create beautiful, functional spaces that reflect your unique style and personality.
                            </p>
                        </div>

                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-gray-900 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full xs:w-auto"
                            >
                                View Our Work <TbArrowUpRight className="size-5 ml-2" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 w-full xs:w-auto"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="pt-5 sm:pt-6 border-t border-gray-200">
                            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Trusted by homeowners and businesses alike</p>
                            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
                                <span className="text-gray-800 font-semibold text-sm sm:text-base">★★★★★</span>
                                <span className="text-gray-600 text-sm sm:text-base">500+ Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Right image carousel - Desktop version */}
                    <div className="relative hidden lg:block">
                        <div className="absolute -top-6 -left-6 w-full h-full bg-gray-200 rounded-2xl transform rotate-3"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Swiper
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Autoplay, Navigation]}
                                loop={true}
                                slidesPerView={1}
                                speed={800}
                                direction="horizontal"
                                className="w-full h-full"
                            >
                                {heroImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative transition-transform duration-500">
                                            <Image
                                                src={image.src}
                                                width={800}
                                                height={600}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover aspect-[4/3]"
                                                priority={index === 0}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                                <p className="text-white font-medium">{image.caption}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Mobile image carousel - Only visible on mobile */}
                    <div className="relative block lg:hidden mt-6">
                        <div className="absolute -top-3 -left-3 w-full h-full bg-gray-200 rounded-xl transform rotate-2"></div>
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <Swiper
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Autoplay, Navigation]}
                                loop={true}
                                slidesPerView={1}
                                speed={800}
                                direction="horizontal"
                                className="w-full h-full"
                            >
                                {heroImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative">
                                            <Image
                                                src={image.src}
                                                width={600}
                                                height={400}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover aspect-[4/3]"
                                                priority={index === 0}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                                <p className="text-white text-sm font-medium">{image.caption}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}