"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

export const Navbar = ({
  children,
  className
}) => {
  const ref = useRef(null);
  // Keep the ref for future use if needed
  useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // We no longer need the visible state since we're always showing the blur effect

  // Position navbar with a little space from the top
  const initialTop = 12;

  return (
    <motion.div
      ref={ref}
      // Using fixed position for the navbar to overlay the hero section
      animate={{
        top: `${initialTop}px`,
      }}
      className={cn("fixed inset-x-0 z-50 w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        width: "40%",
        y: 12,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "min(800px, 100%)",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-3 lg:flex dark:bg-transparent",
        "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick
}) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-800 transition duration-200 hover:text-zinc-900 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-800 font-medium dark:text-neutral-200"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        width: "92%",
        paddingRight: "16px",
        paddingLeft: "16px",
        borderRadius: "1rem",
        y: 12,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-transparent py-3 lg:hidden",
        "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className
}) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between px-1", className)}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-center justify-start gap-4 rounded-xl bg-white px-5 py-6 shadow-lg dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer ml-2"
      onClick={onClick}
    >
      {isOpen ? (
        <IconX className="text-black dark:text-white" />
      ) : (
        <IconMenu2 className="text-black dark:text-white" />
      )}
    </div>
  );
};

export const NavbarLogo = ({ logoSrc, logoAlt, logoText }) => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-6 flex items-center space-x-2.5 px-1 py-1 text-sm font-medium text-black"
    >
      <div className="relative w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden shadow-sm">
        <Image
          src={logoSrc || "/placeholder-logo.svg"}
          alt={logoAlt || "Enmaison Designs"}
          width={30}
          height={30}
          unoptimized
        />
      </div>
      <span className="font-semibold text-base text-black dark:text-white">{logoText || "Enmaison"}</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2.5 rounded-full bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-gray-900 text-white shadow-md hover:bg-gray-800 border border-gray-900",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
