import Image from "next/image";
import Link from "next/link";
import { TbArrowLeft, TbArrowUpRight, TbMapPin, TbCalendar, TbClock } from "react-icons/tb";
import { Carousel } from "@/components/ui/carousel";
import { getProjects } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | EnMaison Designs`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-enmaison-cream/30">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.mainImage}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/60 via-enmaison-dark-green/30 to-enmaison-dark-green/80" />
        </div>

        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <Link href="/projects" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-enmaison-gold transition-colors font-bold uppercase tracking-widest text-sm">
            <TbArrowLeft /> Back to Works
          </Link>

          <div className="space-y-6 max-w-4xl px-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-enmaison-gold text-enmaison-dark-green text-xs font-black uppercase tracking-[0.2em] shadow-lg">
              Featured Project
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto italic border-l-4 border-enmaison-gold pl-6">
              {project.tagline}
            </p>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 md:gap-16 px-4 py-8 bg-black/20 backdrop-blur-md border-y border-white/10">
            <div className="flex flex-col items-center gap-1">
              <TbMapPin className="text-enmaison-gold text-2xl" />
              <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Location</span>
              <span className="text-sm font-bold">{project.location || "Khamgaon"}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TbCalendar className="text-enmaison-gold text-2xl" />
              <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Completed</span>
              <span className="text-sm font-bold">{project.completionDate || "2024"}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TbClock className="text-enmaison-gold text-2xl" />
              <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Category</span>
              <span className="text-sm font-bold">{project.slug.includes('elevation') ? 'Architecture' : 'Interior'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="container py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-4xl font-black text-enmaison-dark-green mb-8 flex items-center gap-4">
                <span className="w-12 h-1.5 bg-enmaison-gold rounded-full" />
                The Vision
              </h2>
              <p className="text-xl text-enmaison-teal leading-relaxed font-medium">
                {project.description}
              </p>
            </section>

            {project.images && project.images.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-end justify-between border-b-2 border-enmaison-gold/20 pb-4">
                  <h2 className="text-3xl font-black text-enmaison-dark-green uppercase tracking-tight">Gallery Showcase</h2>
                  <p className="text-enmaison-teal font-bold text-sm tracking-widest">{project.images.length} HIGH-RES RENDERS</p>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Carousel
                    images={project.images}
                    className="h-[400px] md:h-[600px]"
                    autoplay={true}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {project.images.slice(0, 8).map((image, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group border border-enmaison-gold/10">
                      <Image
                        src={image}
                        alt={`${project.name} detail ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-enmaison-gold/20">
              <h2 className="text-3xl font-black text-enmaison-dark-green mb-8 uppercase tracking-tight">Design & Thinking</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.details.map((detail, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-bold text-enmaison-gold flex items-center gap-3">
                      <span className="text-2xl font-black opacity-20">0{index + 1}</span>
                      {detail.title}
                    </h3>
                    <p className="text-enmaison-dark-green/80 font-medium leading-relaxed italic">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-enmaison-dark-green rounded-[2.5rem] p-10 text-white shadow-2xl sticky top-24">
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 tracking-tight uppercase">About Project</h3>
              <div className="space-y-8">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-enmaison-gold tracking-[0.2em] uppercase">Firm</p>
                  <p className="text-lg font-bold">EnMaison Designs</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-enmaison-gold tracking-[0.2em] uppercase">Principal Architect</p>
                  <p className="text-lg font-bold">Ar. Khushboo Gohel</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-enmaison-gold tracking-[0.2em] uppercase">Project Location</p>
                  <p className="text-lg font-bold">{project.location || "Khamgaon, Maharashtra"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-enmaison-gold tracking-[0.2em] uppercase">Service Provided</p>
                  <p className="text-lg font-bold">Architecture & Interiors</p>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="group flex items-center justify-between w-full bg-enmaison-gold text-enmaison-dark-green px-8 py-5 rounded-2xl font-black transition-all hover:bg-white">
                  ENQUIRE NOW
                  <TbArrowUpRight className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-enmaison-cream py-24 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-enmaison-dark-green mb-8 tracking-tighter">Inspired by {project.name}?</h2>
          <p className="text-xl text-enmaison-teal font-medium mb-12 italic">
            Every space has a story waiting to be told. Let us help you craft yours with precision and soul.
          </p>
          <Link href="/projects" className="inline-flex items-center gap-4 text-enmaison-gold font-black text-lg py-4 px-10 rounded-full border-2 border-enmaison-gold hover:bg-enmaison-gold hover:text-white transition-all shadow-xl">
            VIEW MORE PROJECTS <TbArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
