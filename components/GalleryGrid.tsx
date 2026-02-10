"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// @ts-ignore - moduleResolution workaround
import { Carousel } from "@ark-ui/react/carousel";
import { TbX, TbChevronLeft, TbChevronRight, TbArrowUpRight } from "react-icons/tb";

interface GalleryImage {
    src: string;
    project: string;
    slug: string;
}

function AnimatedGalleryImage({
    img,
    ratio,
    onClick,
}: {
    img: GalleryImage;
    ratio: number;
    onClick: () => void;
}) {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [isLoading, setIsLoading] = useState(true);

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            className="bg-neutral-100 relative size-full rounded-xl overflow-hidden border border-neutral-200/60 cursor-pointer group"
        >
            <Image
                src={img.src}
                alt={img.project}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(
                    "size-full rounded-xl object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105",
                    {
                        "opacity-100": isInView && !isLoading,
                    }
                )}
                onLoad={() => setIsLoading(false)}
                onClick={onClick}
            />
            {/* Hover overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-5"
                onClick={onClick}
            >
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/70 mb-1">
                    Project
                </p>
                <p className="text-white font-semibold text-sm leading-snug">
                    {img.project}
                </p>
            </div>
        </AspectRatio>
    );
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (selectedIdx === null) return;
            if (e.key === "Escape") setSelectedIdx(null);
        },
        [selectedIdx]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedIdx !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIdx]);

    // Aspect ratios for masonry variety
    const ratios = [3 / 4, 4 / 5, 1, 4 / 3, 3 / 4, 5 / 4];

    return (
        <>
            {/* Masonry Grid - Pinterest style */}
            <div className="relative flex w-full flex-col items-center justify-center px-4">
                <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, col) => (
                        <div key={col} className="grid gap-4">
                            {images
                                .filter((_, idx) => idx % 3 === col)
                                .map((img, index) => {
                                    const globalIdx = col + index * 3;
                                    const ratio = ratios[index % ratios.length];
                                    return (
                                        <AnimatedGalleryImage
                                            key={`${col}-${index}`}
                                            img={img}
                                            ratio={ratio}
                                            onClick={() => setSelectedIdx(globalIdx)}
                                        />
                                    );
                                })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox with Ark UI Carousel */}
            {selectedIdx !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
                    {/* Close button */}
                    <button
                        onClick={() => setSelectedIdx(null)}
                        className="absolute top-5 right-5 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Close gallery"
                    >
                        <TbX size={24} />
                    </button>

                    {/* Carousel */}
                    <div className="w-full max-w-4xl mx-auto px-4">
                        <Carousel.Root
                            defaultPage={selectedIdx}
                            slideCount={images.length}
                            className="w-full"
                        >
                            {/* Main image */}
                            <Carousel.ItemGroup className="overflow-hidden rounded-xl mb-4">
                                {images.map((image, index) => (
                                    <Carousel.Item key={index} index={index}>
                                        <div className="relative w-full h-[50vh] md:h-[65vh]">
                                            <Image
                                                src={image.src}
                                                alt={image.project}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 896px"
                                                className="object-contain"
                                                priority={Math.abs(index - selectedIdx) < 2}
                                            />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel.ItemGroup>

                            {/* Project info + link */}
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div>
                                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                                        Project
                                    </p>
                                    <p className="text-white font-semibold text-lg">
                                        {images[selectedIdx]?.project}
                                    </p>
                                </div>
                                <Link
                                    href={`/projects/${images[selectedIdx]?.slug}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors"
                                >
                                    View Project <TbArrowUpRight size={16} />
                                </Link>
                            </div>

                            {/* Thumbnails row with navigation */}
                            <div className="flex items-center gap-3">
                                <Carousel.PrevTrigger className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors shrink-0 text-white">
                                    <TbChevronLeft size={18} />
                                </Carousel.PrevTrigger>

                                <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-1 py-1">
                                    {images.map((image, index) => (
                                        <Carousel.Indicator
                                            key={index}
                                            index={index}
                                            className="shrink-0 border-2 border-transparent data-[current]:border-white rounded-md overflow-hidden cursor-pointer transition-all hover:border-white/50 opacity-50 data-[current]:opacity-100"
                                        >
                                            <div className="relative w-16 h-12">
                                                <Image
                                                    src={image.src}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </Carousel.Indicator>
                                    ))}
                                </div>

                                <Carousel.NextTrigger className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors shrink-0 text-white">
                                    <TbChevronRight size={18} />
                                </Carousel.NextTrigger>
                            </div>
                        </Carousel.Root>
                    </div>
                </div>
            )}
        </>
    );
}
