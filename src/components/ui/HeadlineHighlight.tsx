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
 * - variant="none": Completely normal clean typography (for first/hero headings).
 * - variant="underline": Original Elementor hand-drawn underline shape (ager moto same),
 *   tightly hugging under the text, not sagging low ("besi niche nambena"),
 *   compact ("arektu choto"), and vibrant red #ff0000 ("erokom colour").
 */
export default function HeadlineHighlight({
  children,
  className = "",
  variant = "underline",
  color = "#ff0000",
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
        } else {
          setDrawn(false);
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
      className={`wp-highlight ${drawn ? "is-drawn" : ""} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 115 500 35"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
          style={{ stroke: color }}
        />
      </svg>
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
  color = "#ff0000",
  highlightColor = "text-[#31A1FF]",
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
          color={color}
          className={highlightClassName}
        >
          <span className={highlightColor}>{highlight}</span>
        </HeadlineHighlight>
      ) : null}
      {after ? <> {after}</> : null}
    </Tag>
  );
}
