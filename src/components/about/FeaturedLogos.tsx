"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/images/about/logo-basis.webp", alt: "Basis" },
  { src: "/images/about/logo-ecab.webp", alt: "E-Cab" },
  { src: "/images/about/logo-matchwheel.webp", alt: "Matchwheel" },
  { src: "/images/about/logo-peoplentech.webp", alt: "People n Tech" },
];

/** "Bulbul Bahar Featured In" logo carousel (Elementor image carousel) */
export default function FeaturedLogos() {
  const [start, setStart] = useState(0);
  const n = logos.length;

  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % n), 3000);
    return () => clearInterval(t);
  }, [n]);

  const ordered = logos.map((_, i) => logos[(start + i) % n]);

  return (
    <div className="flex items-center gap-[10px]">
      <button
        type="button"
        onClick={() => setStart((s) => (s - 1 + n) % n)}
        aria-label="Previous"
        className="text-[#000F23] text-[24px] px-1 hover:text-[#F99517]"
      >
        &#8249;
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] flex-1">
        {ordered.map((l) => (
          <Image
            key={l.alt}
            src={l.src}
            alt={l.alt}
            width={240}
            height={150}
            className="w-full h-auto block"
            unoptimized
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setStart((s) => (s + 1) % n)}
        aria-label="Next"
        className="text-[#000F23] text-[24px] px-1 hover:text-[#F99517]"
      >
        &#8250;
      </button>
    </div>
  );
}
