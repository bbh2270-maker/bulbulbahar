"use client";

import React, { useState } from "react";

// Font Awesome "fas fa-tags" (same icon as the original Unlimited Elements accordion)
function TagsIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 512" fill="currentColor" aria-hidden="true">
      <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
    </svg>
  );
}

export interface InfoItem {
  title: string;
  content: React.ReactNode;
}

/** Teal "solid colour accordion" from the original home page (one column) */
export default function InfoAccordion({ items, defaultOpen = 0 }: { items: InfoItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.title} className="mb-[10px]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="relative w-full text-left bg-[#30C8B8] hover:bg-[#2bb5a6] transition-colors text-white text-[15px] leading-[20px] py-[12px] pr-[12px] pl-[78px] min-h-[44px] cursor-pointer"
            >
              {/* orange tag with arrow point, like the original */}
              <span className="absolute left-0 top-0 bottom-0 w-[33px] bg-[#F99517] flex items-center justify-end">
                <TagsIcon className="w-[15px] h-[15px] text-white relative left-[10px] z-10" />
                <span className="absolute top-0 -right-[22px] w-0 h-0 border-y-[22px] border-y-transparent border-l-[22px] border-l-[#F99517]" />
              </span>
              {item.title}
            </button>
            {isOpen && (
              <div className="bg-white px-[22px] py-[11px] text-[15px] leading-[22px] text-[#898989]">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
