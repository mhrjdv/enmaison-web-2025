"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowUpRight, TbMenu, TbX } from "react-icons/tb";

const navItems = [
  { name: "Portfolio", link: "/projects" },
  { name: "The Studio", link: "/about" },
  { name: "Gallery", link: "/gallery" },
  { name: "Journal", link: "/blogs" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic text color logic
  // Scrolled: always white (on green bg)
  // Not Scrolled & Home: Dark Green (on cream bg)
  // Not Scrolled & Not Home: White (on dark hero bg)
  const getTextColor = (baseColor = "text-white") => {
    if (isScrolled) return "text-white";
    return isHomePage ? "text-enmaison-dark-green" : "text-white";
  };

  const getLogoColor = () => {
    if (isScrolled) return "text-white";
    return isHomePage ? "text-enmaison-dark-green" : "text-white";
  };

  const getButtonStyles = () => {
    if (isScrolled) {
      return "bg-enmaison-gold text-enmaison-dark-green hover:bg-white";
    }
    if (isHomePage) {
      return "bg-enmaison-dark-green text-white hover:bg-enmaison-gold hover:text-enmaison-dark-green";
    }
    // For other pages with dark hero, use gold button for contrast
    return "bg-enmaison-gold text-enmaison-dark-green hover:bg-white hover:text-enmaison-dark-green";
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-enmaison-dark-green/95 backdrop-blur-xl shadow-2xl" : "py-8 bg-transparent"}`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${getLogoColor()}`}>
              ENMAISON <span className="text-enmaison-gold">DESIGNS</span>
            </span>
            <span className={`text-[8px] font-black uppercase tracking-[0.4em] transition-all duration-500 ${isScrolled ? "text-enmaison-gold opacity-100" : "opacity-0 -translate-y-2"}`}>
              Architecture & Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-enmaison-gold ${getTextColor("text-white/80")}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl group flex items-center gap-2 ${getButtonStyles()}`}
          >
            Contact <TbArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-enmaison-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <TbX size={32} /> : <TbMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-enmaison-dark-green z-40 transition-transform duration-700 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col items-center justify-center gap-10`}>
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-black text-white hover:text-enmaison-gold tracking-tighter uppercase"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-8 bg-enmaison-gold text-enmaison-dark-green px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}