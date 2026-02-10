import blogsData from "@/data/blogs.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Interior Design Portfolio",
      description: "The requested blog could not be found."
    };
  }

  return {
    title: `${blog.title} | Interior Design Portfolio`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Interior Design Portfolio`,
      description: blog.excerpt,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default function BlogDetailLayout({ children }) {
  return children;
}
