"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBook, TbBulb, TbColorSwatch, TbHome, TbLeaf, TbSun, TbBulbOff, TbCalendar, TbClock, TbArrowUpRight } from "react-icons/tb";

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

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 shadow-sm border ${activeCategory === category.name
              ? "bg-enmaison-dark-green text-white border-enmaison-dark-green shadow-xl scale-110"
              : "bg-white text-enmaison-dark-green border-enmaison-gold/20 hover:border-enmaison-gold hover:bg-enmaison-cream/30"
              }`}
            onClick={() => setActiveCategory(category.name)}
          >
            <category.icon className={`size-5 ${activeCategory === category.name ? "text-enmaison-gold" : "text-enmaison-teal"}`} />
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog, idx) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id} className="group relative flex flex-col h-full">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-enmaison-gold/10 shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col h-full">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-enmaison-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-enmaison-dark-green uppercase tracking-widest shadow-xl">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-enmaison-gold">
                      <Image src={blog.authorImage} alt={blog.author} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-enmaison-teal">{blog.author}</p>
                      <p className="text-[10px] font-bold text-enmaison-gold uppercase">{blog.date}</p>
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-black text-enmaison-dark-green tracking-tight group-hover:text-enmaison-gold transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="mb-8 text-enmaison-teal/80 text-sm font-medium leading-relaxed italic line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-enmaison-gold/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-enmaison-gold">
                      <TbClock size={16} /> {blog.readTime}
                    </div>
                    <div className="flex items-center gap-1 font-black text-[10px] uppercase tracking-widest text-enmaison-dark-green group-hover:text-enmaison-gold transition-colors">
                      Read More <TbArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-enmaison-gold/20">
          <div className="bg-enmaison-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <TbBook size={40} className="text-enmaison-gold" />
          </div>
          <h3 className="text-3xl font-black text-enmaison-dark-green mb-4 uppercase tracking-tighter">No Knowledge Items Found</h3>
          <p className="text-enmaison-teal max-w-md mx-auto font-medium italic">
            Currently, our journal has no entries in the &quot;{activeCategory}&quot; category. Please explore other sections of our design blog.
          </p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-8 bg-enmaison-gold text-enmaison-dark-green px-8 py-3 rounded-full font-black uppercase tracking-widest hover:bg-enmaison-dark-green hover:text-white transition-all shadow-lg"
          >
            Explore All
          </button>
        </div>
      )}
    </div>
  );
}
