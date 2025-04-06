"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function MobileHeader() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 sm:hidden"
    >
      <div className="bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-md py-4 px-4">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="relative w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden shadow-sm">
              <Image
                src="/placeholder-logo.svg"
                alt="Enmaison Designs"
                width={32}
                height={32}
                unoptimized
              />
            </div>
            <span className="font-semibold text-lg text-black dark:text-white">Enmaison</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
