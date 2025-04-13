"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from "./ui/resizable-navbar";
import MobileDock from "./MobileDock";
import MobileHeader from "./MobileHeader";

const navItems = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/projects" },
  { name: "ABOUT US", link: "/about" },
  { name: "GALLERY", link: "/gallery" },
  { name: "BLOGS", link: "/blogs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo
            logoSrc="/placeholder-logo.svg"
            logoAlt="Enmaison Designs"
            logoText="Enmaison"
          />
          <NavItems items={navItems} />
          <div className="relative z-20">
            <NavbarButton href="/contact" variant="dark">
              Contact Us <TbArrowUpRight className="inline-block ml-2" />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Only show the traditional mobile nav on medium screens, not on small or large screens */}
        <MobileNav className="hidden md:flex lg:hidden">
          <MobileNavHeader>
            <div className="flex-1">
              <NavbarLogo
                logoSrc="/placeholder-logo.svg"
                logoAlt="Enmaison Designs"
                logoText="Enmaison"
              />
            </div>
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block w-full text-center px-3 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:text-black hover:bg-gray-50 rounded-lg dark:text-neutral-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-5 pt-5 border-t border-gray-100 w-full px-3 text-center">
              <NavbarButton href="/contact" variant="dark" className="w-full">
                Contact Us <TbArrowUpRight className="inline-block ml-2" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Mobile Header with centered logo for small screens */}
      <MobileHeader />

      {/* Mobile Dock for small screens - always rendered but hidden with CSS on larger screens */}
      <MobileDock />
    </>
  );
}