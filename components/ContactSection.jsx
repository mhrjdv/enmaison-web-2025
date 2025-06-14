import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-gradient-to-br from-enmaison-green to-enmaison-teal">
            <div className="container items-center text-center border-b-2 border-enmaison-gold/30 lg:justify-between lg:flex py-14">
                <div className="py-4">
                    <p className="text-2xl text-enmaison-gold font-medium">Let&apos;s</p>
                    <h1 className="text-3xl font-bold lg:text-6xl text-white">Get in touch</h1>
                </div>
                <a className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-enmaison-dark-green bg-enmaison-gold rounded-full shadow-xl hover:bg-enmaison-cream hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:ring-4 hover:ring-enmaison-gold/50 ring-offset-2" href="/contact">
                    CONTACT US <TbArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> 
                </a>
            </div>
        </div>
    )
}