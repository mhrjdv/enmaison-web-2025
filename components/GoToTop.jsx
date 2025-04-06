"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TbArrowUp } from "react-icons/tb";
import "./GoToTop.css";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    // Initial check on mount
    if (typeof window !== 'undefined' && window.scrollY > 200) {
      setIsVisible(true);
    }

    const toggleVisibility = () => {
      // Show button after scrolling down 200px (reduced threshold for better UX)
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function with smooth animation
  const scrollToTop = () => {
    // Prevent default behavior
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
            mass: 0.5
          }}
          onClick={scrollToTop}
          className="go-to-top-button"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <TbArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
