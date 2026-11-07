"use client";

import React, { useEffect, useRef, useState } from "react";

// Same skills, colours and skin as the original "EAE Progress Bar" widget
const skills = [
  { name: "Advance SEO", percentage: 98, color: "#00BFB3" },
  { name: "Local SEO & E-Commerce SEO", percentage: 91, color: "#FF3756" },
  { name: "Cyber Security", percentage: 87, color: "#FFDA3E" },
  { name: "Digital Marketing", percentage: 89, color: "#027BF3" },
  { name: "PPC Ads & Lead Generation", percentage: 85, color: "#F99517" },
  { name: "YouTube Video Marketing", percentage: 84, color: "#00BFB3" },
  { name: "WordPress Theme Customization", percentage: 95, color: "#F99517" },
];

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-[24px] last:mb-0">
          <div className="flex items-center justify-between text-[14px] leading-[26px] tracking-[1px] text-[#5D7280]">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <div className="w-full rounded-[20px] border border-[#DDDDDD] p-[4px] bg-white">
            <div className="h-[10px] w-full rounded-[20px] overflow-hidden">
              <div
                className="h-full rounded-[20px] transition-[width] duration-[1500ms] ease-out"
                style={{
                  width: visible ? `${skill.percentage}%` : "0%",
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
