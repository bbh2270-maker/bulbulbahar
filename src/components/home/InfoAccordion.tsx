"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export interface InfoItem {
  title: string;
  content: React.ReactNode;
}

/**
 * Modern, clean, light executive accordion.
 * Replaces dated teal/orange widgets with a sleek 2026 SaaS/agency design.
 */
export default function InfoAccordion({
  items,
  defaultOpen = null,
}: {
  items: InfoItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.title}
            className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#0082FB]/50 shadow-md shadow-blue-500/5 ring-1 ring-[#0082FB]/10"
                : "border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3.5 transition-colors hover:bg-blue-50/20 cursor-pointer"
            >
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-gradient-to-r from-[#0082FB] to-[#0055D4] text-white shadow-xs shadow-[#0082FB]/30"
                      : "bg-blue-50 text-[#0082FB] border border-blue-100/60"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-[15px] sm:text-[16px] font-heading font-bold text-[#000F23] tracking-tight leading-snug">
                  {item.title}
                </span>
              </div>

              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-[#0082FB]/10 text-[#0082FB]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-[14px] sm:text-[15px] leading-relaxed text-[#5D7280] border-t border-slate-100/90 font-normal">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
