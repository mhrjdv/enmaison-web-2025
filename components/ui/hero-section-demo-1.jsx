"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { TbArrowUpRight } from "react-icons/tb";
// We're not importing Header as it's already in the layout

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto pt-24 sm:pt-24 md:pt-28 flex max-w-7xl flex-col items-center justify-center bg-gradient-to-br from-enmaison-cream to-white dark:from-enmaison-dark-green dark:to-gray-900">
      {/* EnMaison branded decorative lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-enmaison-teal/20 dark:bg-enmaison-gold/30">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-enmaison-green to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-enmaison-teal/20 dark:bg-enmaison-gold/30">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-enmaison-green to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-enmaison-teal/20 dark:bg-enmaison-gold/30">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-enmaison-gold to-transparent" />
      </div>
      <div className="px-4 py-10 sm:pt-10 pt-14 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-enmaison-dark-green md:text-4xl lg:text-7xl dark:text-enmaison-cream">
          {"Transform your space with premium interior design"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-enmaison-teal dark:text-enmaison-gold"
        >
          We create beautiful, functional spaces that reflect your unique style and personality.
          Our expert designers bring your vision to life with attention to every detail.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/projects" className="w-60">
            <button className="w-full font-medium text-base py-3 px-6 bg-gradient-to-r from-enmaison-green to-enmaison-teal text-white rounded-full hover:from-enmaison-teal hover:to-enmaison-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Our Projects <TbArrowUpRight className="inline-block ml-2 size-5" />
            </button>
          </Link>
          <Link href="/contact" className="w-60">
            <button className="w-full bg-white hover:bg-enmaison-cream border-2 border-enmaison-gold text-enmaison-dark-green hover:text-enmaison-green py-3 px-6 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us <TbArrowUpRight className="inline-block ml-2 size-5" />
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border-2 border-enmaison-gold/30 bg-gradient-to-br from-white to-enmaison-cream p-4 shadow-2xl dark:border-enmaison-teal/30 dark:from-enmaison-dark-green dark:to-gray-800"
        >
          <div className="w-full overflow-hidden rounded-xl border-2 border-enmaison-green/20 dark:border-enmaison-gold/20">
            <Image
              src="/image/gallery1.jpg"
              alt="Interior design showcase"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
