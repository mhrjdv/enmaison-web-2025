"use client";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CatalogSwiperSection({ data: projects }) {
    if (!projects) return null;

    const swiperImages = projects.flatMap(project =>
        project.images.map(img => ({ src: img, alt: project.name, slug: project.slug }))
    ).slice(0, 15);

    return (
        <section className="py-24 bg-enmaison-cream/30 border-t border-neutral-100">
            <div className="container mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-enmaison-gold mb-3">Portfolio</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                            All Work
                        </h2>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-enmaison-teal hover:text-neutral-900 transition-colors">
                        View All Projects <TbArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            <div className="relative">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5 },
                        1280: { slidesPerView: 4.2 },
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="!px-4 lg:!px-12"
                >
                    {swiperImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`/projects/${image.slug}`} className="group block">
                                <div className="relative overflow-hidden rounded-xl h-[320px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                        <p className="text-white text-sm font-medium">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
