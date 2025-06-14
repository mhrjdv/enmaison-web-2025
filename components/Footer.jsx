"use client";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";
import { HyperText } from "./magicui/hyper-text";
import { TbBrandWhatsapp, TbArrowUpRight } from "react-icons/tb";

export default function Footer() {

    return (
        <div className="bg-gradient-to-br from-enmaison-green to-enmaison-dark-green">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-enmaison-gold">COMPANY</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/about">About Us</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/press">Press</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/careers">Careers</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-enmaison-gold">DEVELOPMENT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/about">Documentation</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/press">API Reference</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/careers">Changelog</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/contact">Status</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold text-enmaison-gold">CONNECT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/about">Instagram</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/press">Linkedin</Link>
                            <Link className="py-1 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/careers">Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center border-t-2 border-enmaison-gold/30 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
                    <p className="pb-4 text-xl font-semibold text-enmaison-gold">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input className="w-full px-4 pr-20 border-2 border-enmaison-gold bg-white/90 backdrop-blur-sm rounded-full h-14 focus:outline-none focus:ring-2 focus:ring-enmaison-gold focus:border-transparent placeholder-enmaison-teal" type="text" placeholder="Email Address" />
                        <button className="absolute h-10 px-3 text-sm text-white bg-enmaison-gold rounded-full top-2 right-2 hover:bg-enmaison-teal transition-colors duration-300">Subscribe</button>
                    </div>
                    <p className="pt-4 text-enmaison-cream/80">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* Copy Right */}
            <div className="py-10 bg-enmaison-dark-green">
                <div className="container text-center text-enmaison-cream/70 lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy;2025 ENMAISON DESIGNS. All rights reserved </p>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-6">
                        <a
                            href="https://wa.me/919028431000?text=Hello%20Mihir,%20I%20visited%20the%20Enmaison%20Designs%20website%20and%20wanted%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mb-3 lg:mb-0 px-3 py-1.5 bg-enmaison-gold/20 hover:bg-enmaison-gold/40 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer group"
                            title="Contact the developer via WhatsApp"
                        >
                            <TbBrandWhatsapp className="text-green-400 opacity-70 group-hover:opacity-100 size-4 transition-opacity" />
                            <HyperText
                                className="text-sm font-medium py-0 group-hover:text-enmaison-cream transition-colors"
                                duration={1000}
                                delay={300}
                                animateOnHover={true}
                                startOnView={true}
                            >
                                DEVELOPED BY
                            </HyperText>
                            <AuroraText
                                className="text-sm font-semibold ml-1 group-hover:scale-105 transition-transform"
                                colors={["#D4AF37", "#B8860B", "#DAA520", "#FFD700"]}
                                speed={1.5}
                            >
                                Mihir Jadhav
                                <TbArrowUpRight className="ml-1 inline-block size-3.5 text-enmaison-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </AuroraText>
                        </a>
                        <div className="flex items-center gap-6">
                            <Link className="p-2 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/privacy">Privacy</Link>
                            <Link className="p-2 hover:underline text-enmaison-cream hover:text-enmaison-gold transition-colors" href="/terms">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
