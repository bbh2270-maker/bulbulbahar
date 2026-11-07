"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";
import LottiePlayer from "@/components/ui/LottiePlayer";

// Font Awesome "far fa-grin-alt" – the icon used on the original site
function GrinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
      <path d="M200.3 248c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zm128 0c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3z" />
    </svg>
  );
}

const stats = [
  { value: "250+", label: "Happy Clients" },
  { value: "300+", label: "Project Completed" },
  { value: "24/7", label: "Support online" },
  { value: "1000+", label: "Successfull Students" },
];

export default function StatsSection() {
  return (
    <section className="bg-[rgba(93,114,128,0.05)] py-[70px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading before="Why Choose Me as" highlight="SEO Expert in Bangladesh" className="mb-[50px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 4 icon boxes */}
          <div className="grid grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-[10px] pt-[25px] pb-[55px] group">
                <span className="inline-flex p-[10px] text-[#e05414] transition-transform duration-300 group-hover:scale-110">
                  <GrinIcon className="w-[50px] h-[50px]" />
                </span>
                <h4 className="text-[20px] leading-[24px] font-extrabold mb-[10px]">{stat.value}</h4>
                <p className="text-[17px] sm:text-[22px] leading-[1.5] font-semibold text-black lg:whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Lottie character */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square">
              <LottiePlayer animationPath="/lottie/why-choose-me.json" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
