import Image from "next/image";
import Link from "next/link";
import { TbArrowLeft, TbCalendar, TbClock } from "react-icons/tb";
import blogsData from "@/data/blogs.json";

// Related Posts Component
function RelatedPosts({ currentBlog, allBlogs }) {
  // First try to find posts in the same category
  let relatedPosts = allBlogs
    .filter((blog) => blog.category === currentBlog.category && blog.id !== currentBlog.id)
    .slice(0, 3);

  // If we don't have enough posts from the same category, add some random posts
  if (relatedPosts.length < 3) {
    const otherPosts = allBlogs
      .filter((blog) => blog.id !== currentBlog.id && !relatedPosts.some(p => p.id === blog.id))
      .slice(0, 3 - relatedPosts.length);

    relatedPosts = [...relatedPosts, ...otherPosts];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${blog.slug}`}
          className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="relative h-48 w-full overflow-hidden">
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
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{blog.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
              {blog.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{blog.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function BlogDetail({ params }) {
  const { slug } = params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <p className="mb-8">
          The blog you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/blogs"
          className="flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <TbArrowLeft className="mr-2" /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Blog Hero */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-24">
            <Link
              href="/blogs"
              className="inline-flex items-center text-white mb-6 hover:underline"
            >
              <TbArrowLeft className="mr-2" /> Back to Blogs
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center">
                <div className="relative h-10 w-10 overflow-hidden rounded-full mr-2">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <TbCalendar className="mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <TbClock className="mr-1" />
                <span>{blog.readTime}</span>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {blog.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-8 font-medium text-gray-700 dark:text-gray-300">
            {blog.excerpt}
          </p>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>{blog.content}</p>

            {/* Placeholder for more content */}
            <p className="mt-8">
              Interior design is not just about aesthetics; it&apos;s about creating spaces that reflect
              your personality, enhance your lifestyle, and improve your well-being. Whether you&apos;re
              renovating your entire home or just refreshing a single room, thoughtful design choices
              can transform your space into something truly special.
            </p>
            <p className="mt-4">
              Remember that the best interior designs are those that evolve over time, incorporating
              new ideas while maintaining a cohesive vision. Don&apos;t be afraid to experiment, mix styles,
              and make your space uniquely yours.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <RelatedPosts currentBlog={blog} allBlogs={blogsData} />
          </div>
        </div>
      </div>

      {/* More from this category */}
      {blogsData.filter(b => b.category === blog.category).length > 1 && (
        <div className="bg-gray-50 dark:bg-gray-900 py-16 mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">More from {blog.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogsData
                .filter(b => b.category === blog.category && b.id !== blog.id)
                .slice(0, 4)
                .map((categoryBlog) => (
                  <Link href={`/blogs/${categoryBlog.slug}`} key={categoryBlog.id} className="group">
                    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={categoryBlog.image}
                          alt={categoryBlog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white line-clamp-1">
                          {categoryBlog.title}
                        </h3>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{categoryBlog.date}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{categoryBlog.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
