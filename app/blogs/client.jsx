"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBook, TbBulb, TbColorSwatch, TbHome, TbLeaf, TbSun, TbBulbOff } from "react-icons/tb";

const categories = [
  { name: "All", icon: TbBook },
  { name: "Trends", icon: TbColorSwatch },
  { name: "Tips & Tricks", icon: TbBulb },
  { name: "Psychology", icon: TbSun },
  { name: "Sustainability", icon: TbLeaf },
  { name: "Style", icon: TbHome },
  { name: "Lighting", icon: TbBulbOff },
];

export function BlogFilter({ blogs }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  // We'll use the categories array for filtering

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-neutral-100 text-black hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            <category.icon className="size-4" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id} className="group">
              <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black dark:bg-black/90 dark:text-white">
                    {blog.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {blog.title}
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={blog.authorImage}
                          alt={blog.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-neutral-900 dark:text-white">
                          {blog.author}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium mb-2">No blogs found</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            No blogs found in the {activeCategory} category. Try selecting a different category.
          </p>
        </div>
      )}
    </div>
  );
}
