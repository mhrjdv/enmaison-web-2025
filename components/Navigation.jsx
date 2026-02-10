"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <button
                className="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none lg:hidden"
                onClick={() => setOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <svg
                    className={`fill-current size-4 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                    className={`fill-current size-4 ${isOpen ? "block" : "hidden"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>

            <nav
                className={`lg:flex lg:items-center lg:space-x-8 transform transition-transform duration-300 ${isOpen ? 'flex flex-col px-6 py-10 z-50 gap-y-5 fixed inset-y-0 top-0 right-0 w-64 sm:w-80 bg-white shadow-xl translate-x-0 overflow-y-auto' : 'hidden max-lg:translate-x-full'}`}
                aria-hidden={!isOpen}
            >
                {nav.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-sm transition-colors py-1 block ${pathname === href ? 'text-neutral-900 font-medium' : 'text-neutral-500 hover:text-neutral-900'}`}
                        onClick={() => setOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Backdrop overlay when menu is open */}
            <div
                className={`${isOpen ? 'fixed inset-0 z-30 bg-black/50' : 'hidden'}`}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            />

            {/* Desktop contact button */}
            <Link
                href="/contact"
                className="items-center hidden px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full lg:inline-flex hover:bg-neutral-800 transition-colors"
            >
                Contact Us <TbArrowUpRight className="size-4 ml-1.5" />
            </Link>

            {/* Mobile contact button */}
            {isOpen && (
                <div className="mt-6 pt-6 border-t border-neutral-100">
                    <Link
                        href="/contact"
                        className="flex items-center justify-center w-full px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Contact Us <TbArrowUpRight className="size-4 ml-1.5" />
                    </Link>
                </div>
            )}
        </>
    )
}