"use client";

import { useState, useEffect } from "react";
import { BlogCard } from "@/components/ui/blog-card";
import { BlogCategoryDock } from "@/components/magicui/blog-category-dock";

export const BlogPosts = ({ blogs }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === activeCategory));
    }
  }, [activeCategory, blogs]);

  return (
    <>
      <BlogCategoryDock 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              authorImage={blog.authorImage}
              date={blog.date}
              readTime={blog.readTime}
              image={blog.image}
              category={blog.category}
              slug={blog.slug}
            />
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
    </>
  );
};
