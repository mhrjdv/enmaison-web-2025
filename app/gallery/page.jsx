import Image from "next/image";
import { getProjects } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
    title: "Gallery | EnMaison Designs",
    description: "A curated collection of our finest architectural and interior design work.",
};

export default function Gallery() {
    const projects = getProjects();
    const allImages = projects.flatMap(project =>
        project.images.map(img => ({
            src: img,
            project: project.name,
            slug: project.slug
        }))
    );

    return (
        <div className="min-h-screen bg-enmaison-cream/30">
            {/* Hero Section — matching Blogs & Projects */}
            <div className="relative h-[60vh] flex items-center overflow-hidden bg-enmaison-dark-green">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/projects/singar-sadan/singar-sadan-1.jpg"
                        alt="Gallery Background"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/80 via-enmaison-dark-green/40 to-enmaison-dark-green/90" />

                <div className="container relative z-10 text-center space-y-6">
                    <span className="text-enmaison-gold font-black uppercase tracking-[0.5em] text-sm">Visual Archive</span>
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
                        The <br />
                        <span className="text-enmaison-gold">Gallery</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium italic border-t border-white/10 pt-6">
                        A curated visual archive of spaces crafted with precision and care.
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="py-24">
                <GalleryGrid images={allImages} />
            </div>
        </div>
    );
}