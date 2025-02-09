import React, { useState, useEffect, useRef } from "react";

import Paris1 from "../assets/paris1.jpeg";
import Paris2 from "../assets/paris2.jpeg";
import Paris3 from "../assets/paris3.jpeg";
import Paris4 from "../assets/paris4.jpeg";
import Califa1 from "../assets/califa1.jpeg";
import Califa2 from "../assets/califa2.jpeg";
import Califa3 from "../assets/califa3.jpeg";
import Califa4 from "../assets/califa4.jpeg";

const destinations = {
  Paris: [Paris1, Paris2, Paris3, Paris4],
  Maldivas: [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
  ],
  California: [Califa1, Califa2, Califa3, Califa4],
};

interface BackgroundCarouselProps {
  destination: string;
}

export function BackgroundCarousel({ destination }: BackgroundCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef(
    destinations[destination as keyof typeof destinations] || []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesRef.current.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {imagesRef.current.map((url, index) => (
        <div
          key={url}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${url})`,
            height: "100%", // Cover the entire parent container
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
