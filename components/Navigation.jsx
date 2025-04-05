"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/gallery', label: 'GALLERY' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <button
                className="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 lg:hidden"
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
                        className={`text-gray-700 hover:text-gray-900 font-medium transition-colors py-1 block ${pathname === href ? 'text-black font-semibold' : ''}`}
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
                className="items-center hidden px-5 py-2 font-medium text-white bg-gray-900 border border-gray-900 rounded-full shadow-md lg:inline-flex hover:bg-gray-800 transition-colors duration-300"
            >
                Contact Us <TbArrowUpRight className="size-5 ml-2" />
            </Link>

            {/* Mobile contact button - shown in the mobile menu */}
            {isOpen && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                        href="/contact"
                        className="flex items-center justify-center w-full px-5 py-2.5 font-medium text-white bg-gray-900 border border-gray-900 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300"
                        onClick={() => setOpen(false)}
                    >
                        Contact Us <TbArrowUpRight className="size-5 ml-2" />
                    </Link>
                </div>
            )}
        </>
    )
}