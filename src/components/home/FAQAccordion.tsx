"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs-data";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";

export default function FAQAccordion() {
  // Allow multiple or single open
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Split into 2 columns (6 each) matching Elementor 50% columns
  const col1 = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const col2 = faqsData.slice(Math.ceil(faqsData.length / 2));

  const renderFaqItem = (faq: typeof faqsData[0]) => {
    const isOpen = !!openIds[faq.id];
    return (
      <div
        key={faq.id}
        className="bg-white transition-all duration-300 overflow-hidden mb-[20px]"
        style={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.12)",
        }}
      >
        <button
          type="button"
          onClick={() => toggle(faq.id)}
          className="w-full px-[28px] py-[22px] text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none select-none transition-colors"
        >
          <span className="text-[13px] font-semibold uppercase text-[#000F23] leading-[1.25]">
            {faq.question}
          </span>

          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
            {isOpen ? (
              // Active/Open: Brand Red up-caret
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200"
                viewBox="0 0 320 512"
                fill="#CB3522"
              >
                <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
              </svg>
            ) : (
              // Closed: Orange right-caret matching Elementor svg { fill: #F99517 }
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200"
                viewBox="0 0 192 512"
                fill="#F99517"
              >
                <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
              </svg>
            )}
          </span>
        </button>

        {isOpen && (
          <div className="px-[28px] pb-[22px] text-[14px] text-[#5D7280] leading-[26px] whitespace-pre-line">
            {faq.answer.includes("http") ? (
              <span>
                {faq.answer.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  part.match(/^https?:\/\//) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e05414] hover:text-[#CB3522] break-all inline-block my-1"
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  )
                )}
              </span>
            ) : (
              faq.answer
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-white pt-[40px] pb-[50px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading as="h4" highlight="Frequently Asked Questions" className="mb-[60px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] items-start max-w-[1060px] mx-auto">
          <div>{col1.map(renderFaqItem)}</div>
          <div>{col2.map(renderFaqItem)}</div>
        </div>
      </div>
    </section>
  );
}
