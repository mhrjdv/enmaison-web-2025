"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSectionOne({ data }) {
    const title = data?.title || "Designing Spaces That Tell Your Story";
    const description = data?.description || "Creating beautiful, functional spaces that reflect your unique style.";

    return (
        <div className="relative mx-auto pt-28 md:pt-32 flex max-w-7xl flex-col items-center justify-center bg-white overflow-hidden">
            <div className="px-4 py-10 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                >
                    <span className="text-enmaison-gold text-xs font-medium tracking-[0.3em] uppercase">
                        EnMaison Designs
                    </span>
                </motion.div>

                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-neutral-900 md:text-5xl lg:text-7xl tracking-tight">
                    {title.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                            className="mr-2.5 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative z-10 mx-auto max-w-xl py-6 text-center text-lg text-neutral-500 leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4"
                >
                    <Link href="/projects" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-enmaison-dark-green text-white rounded-full font-medium hover:bg-enmaison-teal transition-colors">
                            View Our Work <TbArrowUpRight className="inline-block ml-1.5 size-4" />
                        </button>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-3.5 border border-enmaison-gold/30 text-neutral-700 rounded-full font-medium hover:border-enmaison-gold hover:bg-enmaison-cream/30 transition-colors">
                            Get in Touch <TbArrowUpRight className="inline-block ml-1.5 size-4" />
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="relative z-10 mt-16 rounded-2xl border border-neutral-100 p-2 shadow-sm"
                >
                    <div className="w-full overflow-hidden rounded-xl">
                        <Image
                            src="/projects/kedia-villa/kedia-villa-3.jpg"
                            alt="Premium Interior Design"
                            className="aspect-[21/9] h-auto w-full object-cover hover:scale-[1.02] transition-transform duration-700"
                            height={800}
                            width={1800}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
