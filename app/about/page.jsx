import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight, TbQuote, TbFingerprint, TbLeaf, TbTarget } from "react-icons/tb"
import { getSiteContent } from "@/lib/data"

export const metadata = {
    title: "About Us | EnMaison Designs",
    description: "Learn about EnMaison Designs, founded by Ar. Khushboo Gohel, and our commitment to transformative spaces.",
};

export default function About() {
    const { about } = getSiteContent();

    return (
        <div className="bg-enmaison-cream/20">
            {/* Header */}
            <div className="relative h-[60vh] flex items-center overflow-hidden bg-enmaison-dark-green">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/projects/pawars-residence/pawars-residence-2.jpg"
                        alt="About EnMaison"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/80 via-transparent to-enmaison-dark-green/90" />
                <div className="container relative z-10 text-center space-y-4">
                    <span className="text-enmaison-gold font-black uppercase tracking-[0.5em] text-sm">The Studio</span>
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
                        Beyond <br />
                        <span className="text-enmaison-gold">Design</span>
                    </h1>
                </div>
            </div>

            <div className="container py-24">
                {/* Intro */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-black text-enmaison-dark-green tracking-tight leading-tight">
                            {about.title}
                        </h2>
                        <div className="w-20 h-2 bg-enmaison-gold rounded-full" />
                        <p className="text-xl text-enmaison-teal font-medium leading-relaxed italic">
                            {about.content}
                        </p>
                        <p className="text-lg text-enmaison-dark-green/80 font-medium leading-relaxed">
                            {about.whyEnMaison}
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-enmaison-gold rounded-[3rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl" />
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <Image src="/image/khushboo-gohel.jpg" fill sizes="(max-width: 1024px) 100vw, 50vw" alt="EnMaison Designs Studio" className="object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="bg-enmaison-dark-green rounded-[4rem] p-12 md:p-24 text-white shadow-2xl mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <TbQuote size={200} />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <span className="text-enmaison-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Soul</span>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                            {about.philosophy?.title || "Our Design Philosophy"}
                        </h3>
                        <p className="text-xl text-white/80 font-medium italic mb-12 leading-relaxed">
                            {about.philosophy?.description}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {about.philosophy?.points?.map((point, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-enmaison-gold">
                                        {idx === 0 ? <TbFingerprint size={28} /> : idx === 1 ? <TbTarget size={28} /> : <TbLeaf size={28} />}
                                    </div>
                                    <p className="font-black uppercase tracking-widest text-sm">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Founder */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-enmaison-gold/20 shadow-2xl bg-white p-4">
                            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                                <Image src="/image/khushboo-gohel.jpg" fill sizes="(max-width: 1024px) 100vw, 40vw" alt={about.founder.name} className="object-cover object-top" />
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-enmaison-gold text-enmaison-dark-green p-8 rounded-[2rem] shadow-2xl hidden md:block">
                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Principal Architect</p>
                            <p className="text-2xl font-black">Khushboo Gohel</p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-8">
                        <span className="text-enmaison-gold font-black uppercase tracking-[0.3em] text-sm">Founder & Architect</span>
                        <h2 className="text-5xl font-black text-enmaison-dark-green tracking-tight leading-tight">
                            A Graduation in Vision, <br />
                            A Lifetime in <span className="text-enmaison-gold">Precision</span>.
                        </h2>
                        <p className="text-xl text-enmaison-teal/90 font-medium leading-relaxed italic">
                            {about.founder.bio}
                        </p>
                        <div className="pt-8 flex flex-wrap gap-8">
                            <div className="text-center md:text-left">
                                <p className="text-3xl font-black text-enmaison-dark-green">Mumbai</p>
                                <p className="text-xs uppercase font-black text-enmaison-gold tracking-widest">Education Roots</p>
                            </div>
                            <div className="w-px h-12 bg-enmaison-gold/20 hidden md:block" />
                            <div className="text-center md:text-left">
                                <p className="text-3xl font-black text-enmaison-dark-green">8+</p>
                                <p className="text-xs uppercase font-black text-enmaison-gold tracking-widest">Projects Handled</p>
                            </div>
                        </div>

                        <div className="pt-12">
                            <Link href="/contact" className="inline-flex items-center gap-4 text-enmaison-dark-green font-black text-lg py-5 px-10 rounded-full bg-enmaison-gold hover:bg-enmaison-dark-green hover:text-white transition-all shadow-xl">
                                START A CONVERSATION <TbArrowUpRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}