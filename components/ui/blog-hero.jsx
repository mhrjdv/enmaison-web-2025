"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BlogHero = ({ title, description, className }) => {
  return (
    <div className={cn("relative overflow-hidden bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover", className)}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 py-32 md:py-48 lg:py-64">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-widest text-white mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
};
