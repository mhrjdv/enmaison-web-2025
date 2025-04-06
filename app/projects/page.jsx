import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import projectsData from "@/data/projects.json";

export const metadata = {
    title: "Our Projects | Interior Design Portfolio",
    description: "Explore our interior design projects and see our work",
};

export default function Projects() {
    const projects = projectsData;
    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">OUR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">

                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.id}
                        className="relative overflow-hidden rounded-xl group block h-[400px]"
                    >
                        <div className="h-full">
                            <Image
                                src={project.mainImage}
                                width={480}
                                height={380}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 flex flex-col items-start justify-end w-full p-8 text-white z-10">
                            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                            <p className="text-sm mb-4 max-w-md">{project.tagline}</p>
                            <span className="inline-flex items-center px-4 py-2 bg-white text-black rounded-full text-sm font-medium group-hover:bg-opacity-100 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                View Project <TbArrowUpRight className="ml-1" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}