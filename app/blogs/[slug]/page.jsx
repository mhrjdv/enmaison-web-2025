import Image from "next/image";
import Link from "next/link";
import { TbArrowLeft, TbCalendar, TbClock, TbShare, TbUser } from "react-icons/tb";
import { getBlogs } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | EnMaison Blog`,
    description: blog.excerpt,
  };
}

// Related Posts Component
function RelatedPosts({ currentBlog, allBlogs }) {
  let relatedPosts = allBlogs
    .filter((blog) => blog.category === currentBlog.category && blog.id !== currentBlog.id)
    .slice(0, 3);

  if (relatedPosts.length < 3) {
    const otherPosts = allBlogs
      .filter((blog) => blog.id !== currentBlog.id && !relatedPosts.some(p => p.id === blog.id))
      .slice(0, 3 - relatedPosts.length);

    relatedPosts = [...relatedPosts, ...otherPosts];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {relatedPosts.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${blog.slug}`}
          className="group block overflow-hidden rounded-3xl bg-white border border-enmaison-gold/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-enmaison-dark-green uppercase tracking-widest shadow-lg">
              {blog.category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-enmaison-dark-green group-hover:text-enmaison-gold transition-colors line-clamp-2 leading-tight mb-4">
              {blog.title}
            </h3>
            <div className="flex items-center justify-between border-t border-enmaison-gold/10 pt-4 mt-auto">
              <div className="flex items-center gap-2">
                <TbCalendar className="text-enmaison-gold" />
                <span className="text-xs font-bold text-enmaison-teal uppercase">{blog.date}</span>
              </div>
              <span className="text-xs font-black text-enmaison-gold">{blog.readTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-enmaison-cream/20">
      {/* Blog Hero */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/40 via-enmaison-dark-green/60 to-enmaison-dark-green/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-4xl px-4 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-white/80 mb-8 hover:text-enmaison-gold transition-colors font-bold uppercase tracking-[0.2em] text-sm"
            >
              <TbArrowLeft /> Return to Journal
            </Link>

            <div className="space-y-6">
              <span className="inline-block px-5 py-2 rounded-full bg-enmaison-gold text-enmaison-dark-green text-xs font-black uppercase tracking-widest shadow-2xl">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 pt-8 border-t border-white/10 mt-12">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-enmaison-gold">
                    <Image src={blog.authorImage} alt={blog.author} fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-enmaison-gold">Curated By</p>
                    <p className="text-sm font-bold uppercase">{blog.author}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <TbCalendar className="text-enmaison-gold text-2xl" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-enmaison-gold">Journal Date</p>
                    <p className="text-sm font-bold uppercase">{blog.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <TbClock className="text-enmaison-gold text-2xl" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-enmaison-gold">Read Time</p>
                    <p className="text-sm font-bold uppercase">{blog.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-enmaison-gold/10 -mt-32 relative z-20">
            <div className="flex justify-end mb-8">
              <button className="flex items-center gap-2 text-enmaison-teal hover:text-enmaison-gold transition-colors font-bold text-sm uppercase tracking-widest">
                <TbShare size={20} /> Share Article
              </button>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-enmaison-dark-green leading-snug mb-12 border-l-8 border-enmaison-gold pl-8 italic">
              {blog.excerpt}
            </p>

            <div className="prose prose-xl max-w-none text-enmaison-dark-green/90 leading-relaxed font-medium space-y-8">
              {blog.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t-2 border-enmaison-gold/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-enmaison-gold/10 rounded-2xl flex items-center justify-center text-enmaison-gold">
                  <TbUser size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-enmaison-teal">About the Author</p>
                  <p className="text-xl font-black text-enmaison-dark-green">{blog.author}</p>
                </div>
              </div>
              <Link href="/about" className="text-enmaison-gold font-black uppercase tracking-widest border-b-2 border-enmaison-gold hover:text-enmaison-teal hover:border-enmaison-teal transition-all">
                Learn more about our vision
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-32">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-enmaison-gold font-black uppercase tracking-[0.3em] text-sm">More Knowledge</span>
                <h2 className="text-4xl font-black text-enmaison-dark-green tracking-tighter uppercase mt-2">Related Articles</h2>
              </div>
              <Link href="/blogs" className="hidden md:block text-enmaison-teal font-bold uppercase tracking-widest hover:text-enmaison-gold transition-colors">
                Explore All &rarr;
              </Link>
            </div>
            <RelatedPosts currentBlog={blog} allBlogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}
