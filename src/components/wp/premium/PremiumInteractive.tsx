"use client";

import React, { useState } from "react";

type Item = { title: string; html: string };

/** FAQ / toggle / accordion — premium card style, every item's full text kept */
export function PremiumAccordion({ items, defaultOpen = 0, numbered = false }: { items: Item[]; defaultOpen?: number | null; numbered?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(defaultOpen === null ? [] : [defaultOpen]));
  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={i}
            className={`rounded-2xl border bg-white transition-all duration-300 ${
              isOpen ? "border-[#F99517]/40 shadow-[0_12px_30px_-12px_rgba(249,149,23,0.35)]" : "border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
            >
              {numbered && (
                <span
                  className="shrink-0 w-9 h-9 rounded-xl text-[13px] font-extrabold flex items-center justify-center font-heading"
                  style={{ background: "linear-gradient(135deg,#F99517,#E06126)", color: "#fff" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="flex-1 font-heading text-[15px] sm:text-[16px] font-bold text-[#0B1B3F] leading-snug">{it.title}</span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-[#F99517] text-white rotate-45" : "bg-[#FFF4E5] text-[#F99517]"
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100">
                  <div className="pm-rich pt-4" dangerouslySetInnerHTML={{ __html: it.html }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Tabs — segmented pill control with a content card */
export function PremiumTabs({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 w-fit max-w-full" role="tablist">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-[14px] font-heading font-bold transition-all text-left ${
              active === i ? "bg-white text-[#0B1B3F] shadow-sm" : "text-slate-500 hover:text-[#0B1B3F]"
            }`}
          >
            {it.title}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-slate-200/80 bg-[#FBFCFE] p-5 sm:p-7">
        <div className="pm-rich" dangerouslySetInnerHTML={{ __html: items[active]?.html || "" }} />
      </div>
    </div>
  );
}
