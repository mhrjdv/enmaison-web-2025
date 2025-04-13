import Image from "next/image";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import { BlogFilter } from "./client";

export default function Blogs() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
                <div className="absolute inset-0 bg-black/50" />
                <div className="container relative z-10 py-32 md:py-48 lg:py-64">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-widest text-white mb-6">
                        OUR BLOGS
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        Explore our collection of blogs about interior design trends, tips, and inspiration.
                    </p>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="container py-16">
                <BlogFilter blogs={blogsData} />
            </div>

            {/* Featured Posts Section */}
            <div className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Editor&apos;s Picks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogsData
                            .filter((_, index) => index % 2 === 0) // Just a simple way to select some posts
                            .slice(0, 4)
                            .map((blog) => (
                                <Link href={`/blogs/${blog.slug}`} key={blog.id} className="group">
                                    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white line-clamp-1">
                                                {blog.title}
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                                                {blog.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
