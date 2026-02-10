import Image from "next/image";
import { getBlogs } from "@/lib/data";
import { BlogFilter } from "./client";

export const metadata = {
    title: "Journal | EnMaison Designs",
    description: "Design insights, architectural trends, and interior inspiration from Ar. Khushboo Gohel.",
};

export default function Blogs() {
    const blogs = getBlogs();

    return (
        <div className="min-h-screen bg-enmaison-cream/30">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center overflow-hidden bg-enmaison-dark-green">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/projects/kedia-villa/kedia-villa-1.jpg"
                        alt="Blog Background"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/80 via-enmaison-dark-green/40 to-enmaison-dark-green/90" />

                <div className="container relative z-10 text-center space-y-6">
                    <span className="text-enmaison-gold font-black uppercase tracking-[0.5em] text-sm animate-pulse">Design Journal</span>
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
                        Curated <br />
                        <span className="text-enmaison-gold">Knowledge</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium italic border-t border-white/10 pt-6">
                        Insights into the world of architecture, interior finesse, and the philosophy of living well.
                    </p>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="container py-24">
                <BlogFilter blogs={blogs} />
            </div>
        </div>
    );
}
