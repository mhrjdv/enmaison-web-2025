"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BlogCard = ({
  title,
  excerpt,
  author,
  authorImage,
  date,
  readTime,
  image,
  category,
  slug,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black dark:bg-black/90 dark:text-white">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={authorImage}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-900 dark:text-white">
                {author}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {date}
              </p>
            </div>
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {readTime}
          </span>
        </div>
      </div>
      <Link href={`/blogs/${slug}`} className="absolute inset-0">
        <span className="sr-only">View article</span>
      </Link>
    </motion.div>
  );
};
