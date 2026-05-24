"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { image: "/images/hero_banner.png", alt: "Premium Nashik Agricultural Produce" },
  { image: "/images/onion_export.png", alt: "Premium Graded Red Onions" },
  { image: "/images/tomato_export.png", alt: "Export Quality Grade-A Tomatoes" },
  { image: "/images/pomegranate_export.png", alt: "Premium Bhagwa Pomegranates" },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4500); // Cycle every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 select-none overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-30 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      
      {/* Dark Gradients for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#022c22] via-[#022c22]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent" />

      {/* Navigation Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent w-6" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
