"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileHeader() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 sm:hidden"
    >
      <div className="bg-white/95 dark:bg-enmaison-dark-green/95 border-b border-enmaison-gold/20 dark:border-enmaison-gold/30 shadow-lg backdrop-blur-md py-3 px-4 mt-1">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center rounded-full bg-enmaison-gold/10 p-2">
              <div className="w-8 h-8 bg-gradient-to-br from-enmaison-green to-enmaison-teal rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
            </div>
            <span className="font-bold text-lg text-enmaison-dark-green dark:text-enmaison-gold">Enmaison</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
