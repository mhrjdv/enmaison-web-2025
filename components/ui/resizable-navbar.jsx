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
        "bg-white/80 dark:bg-enmaison-dark-green/90 backdrop-blur-sm border border-enmaison-gold/20",
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
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-enmaison-dark-green transition duration-200 hover:text-enmaison-green lg:flex lg:space-x-2 dark:text-enmaison-gold",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-enmaison-dark-green font-medium hover:text-enmaison-green dark:text-enmaison-cream dark:hover:text-enmaison-gold transition-colors duration-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-enmaison-gold/10 dark:bg-enmaison-gold/20"
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
        "bg-white/80 dark:bg-enmaison-dark-green/90 backdrop-blur-sm border border-enmaison-gold/20",
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
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-center justify-start gap-4 rounded-xl bg-white/95 px-5 py-6 shadow-lg dark:bg-enmaison-dark-green/95 backdrop-blur-sm border border-enmaison-gold/20",
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
      className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-enmaison-gold/10 dark:hover:bg-enmaison-gold/20 transition-colors cursor-pointer ml-2"
      onClick={onClick}
    >
      {isOpen ? (
        <IconX className="text-enmaison-dark-green dark:text-enmaison-gold" />
      ) : (
        <IconMenu2 className="text-enmaison-dark-green dark:text-enmaison-gold" />
      )}
    </div>
  );
};

export const NavbarLogo = ({ logoSrc, logoAlt, logoText }) => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-6 flex items-center space-x-2.5 px-1 py-1 text-sm font-medium text-enmaison-dark-green dark:text-enmaison-gold"
    >
      <div className="flex items-center justify-center rounded-full bg-enmaison-gold/10 p-2">
        <div className="w-8 h-8 bg-gradient-to-br from-enmaison-green to-enmaison-teal rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">E</span>
        </div>
      </div>
      <span className="font-bold text-lg text-enmaison-dark-green dark:text-enmaison-gold">
        {logoText}
      </span>
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
  const baseClasses = "relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-enmaison-green to-enmaison-teal text-white hover:from-enmaison-teal hover:to-enmaison-green shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-enmaison-gold",
    secondary: "bg-white text-enmaison-dark-green border-2 border-enmaison-gold hover:bg-enmaison-cream hover:text-enmaison-green shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-enmaison-gold",
    dark: "bg-enmaison-dark-green text-enmaison-gold hover:bg-enmaison-green hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-enmaison-gold",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
