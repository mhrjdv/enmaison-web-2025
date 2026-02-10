import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection({ data }) {
    if (!data) return null;

    return (
        <section className="py-24 bg-enmaison-dark-green">
            <div className="container max-w-4xl mx-auto text-center space-y-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-enmaison-gold">
                    Get in Touch
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Let&apos;s create something<br />
                    meaningful together
                </h2>
                <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
                    Every great space begins with a conversation. Tell us about your vision.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-enmaison-gold text-enmaison-dark-green rounded-full font-semibold hover:bg-white transition-colors"
                    >
                        Start a Project <TbArrowUpRight size={18} />
                    </Link>
                    <a
                        href={`tel:${data.phone}`}
                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        {data.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
