import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight, TbLayoutGrid, TbStack } from "react-icons/tb";
import { getProjects } from "@/lib/data";

export const metadata = {
    title: "Portfolio | EnMaison Designs",
    description: "Explore our architectural and interior design projects where precision meets passion.",
};

export default function Projects() {
    const projects = getProjects();

    return (
        <div className="bg-enmaison-cream/30 min-h-screen">
            <div className="relative h-[60vh] flex items-center overflow-hidden bg-enmaison-dark-green">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/projects/pawars-residence/pawars-residence-1.jpg"
                        alt="Background"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-enmaison-dark-green via-enmaison-dark-green/60 to-transparent" />
                <div className="container relative z-10 space-y-4">
                    <span className="text-enmaison-gold font-black uppercase tracking-[0.4em] text-sm animate-fade-in">Our Legacy</span>
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
                        Curated <br />
                        <span className="text-enmaison-gold">Works</span>
                    </h1>
                </div>
            </div>

            <div className="container py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black text-enmaison-dark-green tracking-tight uppercase mb-6 flex items-center gap-4">
                            <TbLayoutGrid className="text-enmaison-gold" />
                            Project Archive
                        </h2>
                        <p className="text-xl text-enmaison-teal font-medium leading-relaxed italic">
                            A showcase of our commitment to creating spaces that are tailored, timeless, and transformative. From residential havens to commercial landscapes.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-enmaison-gold font-bold uppercase tracking-widest text-xs border-b-2 border-enmaison-gold pb-2">
                        <TbStack /> {projects.length} Total Projects
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.id}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-enmaison-gold/10"
                        >
                            <div className="relative h-[450px] overflow-hidden">
                                <Image
                                    src={project.mainImage}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    alt={project.name}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-enmaison-dark-green via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-enmaison-gold font-black text-xs uppercase tracking-[0.3em] mb-3">0{idx + 1} / Project</span>
                                    <h2 className="text-3xl font-black tracking-tight mb-4 group-hover:text-enmaison-gold transition-colors">{project.name}</h2>
                                    <p className="text-white/80 font-medium line-clamp-2 italic mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.tagline}
                                    </p>
                                    <div className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-enmaison-gold">
                                        View Details <TbArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}