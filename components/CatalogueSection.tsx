"use client";
import Image from "next/image";
import Link from "next/link";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection({ data: projects }) {
    if (!projects) return null;

    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mb-12">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-enmaison-gold mb-3">Featured</p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                    Selected Projects
                </h2>
            </div>
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.slice(0, 4).map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4">
                                <Image
                                    src={project.mainImage}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    alt={project.name}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-neutral-900 group-hover:text-enmaison-teal transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                                    {project.tagline}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium text-enmaison-gold group-hover:text-enmaison-teal transition-colors">
                                    View Project
                                    <TbArrowNarrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
