import React, { useState, useEffect } from "react";

import Paris1 from "../assets/paris1.jpeg";
import Paris2 from "../assets/paris2.jpeg";
import Paris3 from "../assets/paris3.jpeg";
import Paris4 from "../assets/paris4.jpeg";

const destinations = {
  Paris: [Paris1, Paris2, Paris3, Paris4],
  Maldivas: [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
  ],
  Veneza: [
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f",
  ],
};

interface BackgroundCarouselProps {
  destination: string;
}

export function BackgroundCarousel({ destination }: BackgroundCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = destinations[destination as keyof typeof destinations] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((url, index) => (
        <div
          key={url}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${url})`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
    </div>
  );
}
