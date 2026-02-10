"use client";
import Link from "next/link";
import { TbBrandWhatsapp, TbBrandInstagram, TbMail, TbPhone } from "react-icons/tb";
import { getSiteContent } from "@/lib/data";

export default function Footer() {
    const { contact } = getSiteContent();

    return (
        <footer className="bg-enmaison-dark-green">
            <div className="container py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            EnMaison Designs
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            Elevating the standard of living through architectural precision and interior finesse.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://instagram.com/enmaisondesigns" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-enmaison-gold hover:bg-white/10 transition-colors">
                                <TbBrandInstagram size={18} />
                            </a>
                            <a href={`mailto:${contact.email}`} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-enmaison-gold hover:bg-white/10 transition-colors">
                                <TbMail size={18} />
                            </a>
                            <a href={`tel:${contact.phone}`} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-enmaison-gold hover:bg-white/10 transition-colors">
                                <TbPhone size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-medium uppercase tracking-wider text-white/30">Navigation</h3>
                        <div className="flex flex-col gap-3">
                            {[
                                { href: "/projects", label: "Projects" },
                                { href: "/about", label: "About" },
                                { href: "/gallery", label: "Gallery" },
                                { href: "/blogs", label: "Journal" },
                                { href: "/contact", label: "Contact" },
                            ].map(({ href, label }) => (
                                <Link key={href} href={href} className="text-white/40 hover:text-white text-sm transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-medium uppercase tracking-wider text-white/30">Stay Updated</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Design insights and studio updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                className="flex-1 h-10 bg-white/5 border border-white/10 rounded-lg px-4 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-enmaison-gold/50 transition-colors"
                                placeholder="Email address"
                            />
                            <button className="h-10 px-4 bg-enmaison-gold text-enmaison-dark-green rounded-lg text-sm font-medium hover:bg-white transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-6">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/25 text-xs">
                        &copy; 2025 EnMaison Designs. All rights reserved.
                    </p>
                    <a
                        href="https://wa.me/919028431000?text=Hello%20Mihir,%20I%20visited%20the%20Enmaison%20Designs%20website%20and%20wanted%20to%20connect%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/25 hover:text-white/50 transition-colors text-xs"
                    >
                        <TbBrandWhatsapp className="text-green-500 size-3.5" />
                        Crafted by Mihir Jadhav
                    </a>
                </div>
            </div>
        </footer>
    );
}
