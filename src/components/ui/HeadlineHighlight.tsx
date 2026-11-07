"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeadlineHighlightProps {
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "none";
  color?: string;
}

/**
 * HeadlineHighlight:
 * - variant="none": Normal clean typography without underline.
 * - variant="underline": Modern, clean, sleek blue gradient accent bar (no messy red scribbles).
 */
export default function HeadlineHighlight({
  children,
  className = "",
  variant = "underline",
}: HeadlineHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (variant === "none") return;
    const el = ref.current;
    if (!el) {
      setDrawn(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
        }
      },
      { threshold: 0.05, rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [variant]);

  if (variant === "none") {
    return <span className={`inline-block ${className}`}>{children}</span>;
  }

  return (
    <span
      ref={ref}
      className={`relative inline-block text-[#0082FB] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Sleek, clean modern gradient accent line under highlighted text */}
      <span
        aria-hidden="true"
        className={`absolute left-0 bottom-[-4px] h-[3px] sm:h-[3.5px] rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#38BDF8] transition-all duration-700 ease-out ${
          drawn ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </span>
  );
}

/** Centered section heading */
export function SectionHeading({
  before,
  highlight,
  after,
  as: Tag = "h2",
  className = "",
  highlightClassName = "",
  variant,
  highlightColor = "text-[#0082FB]",
}: {
  before?: string;
  highlight?: string;
  after?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  highlightClassName?: string;
  variant?: "underline" | "none";
  color?: string;
  highlightColor?: string;
}) {
  const chosenVariant = variant ?? (Tag === "h1" ? "none" : "underline");

  return (
    <Tag className={`wp-heading ${className}`}>
      {before ? <>{before} </> : null}
      {highlight ? (
        <HeadlineHighlight
          variant={chosenVariant}
          className={highlightClassName}
        >
          <span className={highlightColor}>{highlight}</span>
        </HeadlineHighlight>
      ) : null}
      {after ? <> {after}</> : null}
    </Tag>
  );
}
