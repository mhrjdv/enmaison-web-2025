import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from "react-icons/tb"

export const metadata = {
    title: "About Us | Interior Design Portfolio",
    description: "Learn about our interior design company and our experienced team",
};

export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO ARE WE?</h1>

            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl text-enmaison-dark-green">We have great idea & Interior Design</h2>
                    <p className="text-2xl font-medium lg:w-1/2 text-enmaison-dark-green/80">
                        The Enmaison Designs interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="Interior design gallery showcase" className="rounded-md" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide text-enmaison-dark-green/70">
                            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication. De-signed and handcrafted to hold and showcase my year two architecture portfolio, the unfolding box allows portfolio sheets…
                            <br />
                            <br />

                            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight text-enmaison-dark-green">The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.</span>
                        </p>
                        <Link href="/projects" className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-enmaison-dark-green hover:bg-enmaison-green hover:ring-2 hover:ring-enmaison-gold ring-offset-2 transition-all duration-300">Read More <TbArrowUpRight className="size-5" /> </Link>


                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center text-enmaison-dark-green">TEAM</h1>
                    </div>
                    <div className="flex justify-center py-8">
                        <div className="border-2 border-enmaison-gold/30 max-w-md">
                            <div className="-m-0.5 p-8 text-center transition hover:-translate-y-3 hover:-translate-x-3 bg-gradient-to-br from-white to-enmaison-cream hover:shadow-xl duration-300">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt="Khushboo Gohel - Founder & CEO" className="mx-auto rounded-full aspect-square object-cover mb-6 shadow-lg" />
                                <h2 className="py-2 text-2xl font-bold text-enmaison-dark-green">Khushboo Gohel</h2>
                                <p className="text-lg font-medium text-enmaison-gold mb-2">Founder & CEO</p>
                                <p className="text-sm text-enmaison-dark-green/70 mb-4">
                                    Bachelors in Architecture from Mumbai
                                </p>
                                <p className="text-sm text-enmaison-dark-green/60 leading-relaxed">
                                    Leading Enmaison Designs with a vision to transform spaces into beautiful, functional environments that reflect our clients&apos; unique personalities and lifestyle needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}