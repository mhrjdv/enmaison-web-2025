"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const Carousel = ({
  images,
  className,
  autoplay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Check if images array is valid
    if (!images || images.length === 0) {
      console.error('No images provided to carousel');
      // Set a default placeholder image
      setLoadedImages(['/image/placeholder.jpg']);
      setLoading(false);
      return;
    }

    // Set loaded images immediately to avoid loading state issues
    setLoadedImages(images);
    setLoading(false);

    // Optional: Preload images in the background for smoother transitions
    const preloadImages = () => {
      images.forEach((src) => {
        if (typeof window !== 'undefined') {
          const img = new window.Image();
          img.src = src;
        }
      });
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (autoplay && !isHovered && loadedImages.length > 0) {
      const intervalId = setInterval(() => {
        handleNext();
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, isHovered, interval, loadedImages, handleNext]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction === "right" ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction === "right" ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  // Show loading state only briefly
  if (loading) {
    return (
      <div className={cn("relative w-full overflow-hidden rounded-xl flex items-center justify-center bg-gray-100", className)}>
        <div className="animate-pulse flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500">Loading gallery...</p>
        </div>
      </div>
    );
  }

  // If we still have no images after loading, show a message with placeholder
  if (loadedImages.length === 0) {
    return (
      <div className={cn("relative w-full overflow-hidden rounded-xl", className)}>
        <div className="relative w-full h-full">
          <NextImage
            src="/image/placeholder.jpg"
            alt="No images available"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-white font-semibold mb-2">No images available</p>
              <p className="text-white/80 text-sm">Please check the image paths in your data file</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className={cn("relative w-full overflow-hidden rounded-xl group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="relative w-full h-full"
        >
          <NextImage
            src={loadedImages[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority={currentIndex === 0}
            onError={(e) => {
              console.error(`Failed to load image: ${loadedImages[currentIndex]}`);
              // Fallback to a placeholder if image fails to load
              e.currentTarget.src = '/image/placeholder.jpg';
            }}
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-10 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <TbChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-10 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <TbChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10 bg-black/20 px-3 py-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {loadedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full z-10">
        {currentIndex + 1} / {loadedImages.length}
      </div>
    </div>
  );
};
