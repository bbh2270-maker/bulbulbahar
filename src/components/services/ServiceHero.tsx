"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeadlineHighlight from "@/components/ui/HeadlineHighlight";
import { ArrowRight, Phone } from "lucide-react";
import { serviceHeroConfigs, type ServiceHeroConfig } from "@/data/service-hero-configs";
export { serviceHeroConfigs, type ServiceHeroConfig };

export default function ServiceHero({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const conf = serviceHeroConfigs[slug];

  const pageCleanTitle = title
    .replace(/^#\d*\s*/, "")
    .split("|")[0]
    .replace(/#\d+.*$/, "")
    .replace(/[-–—]\s*$/, "")
    .trim();

  const titleBefore = conf?.titleBefore || "Professional";
  const titleHighlight = conf?.titleHighlight || pageCleanTitle;
  const titleAfter = conf?.titleAfter || "";
  const leadText =
    conf?.lead ||
    "Partner with Bulbul Bahar to dominate search engine rankings, generate high-intent organic visitors, and build sustainable online revenue.";
  const heroImage = conf?.image || "/images/services/SEO-Service-in-Bangladesh.png";

  return (
    <section className="bg-white border-b border-slate-100 py-10 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Clean Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#5D7280] mb-6">
          <Link href="/" className="hover:text-[#0082FB] transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/services" className="hover:text-[#0082FB] transition-colors">
            Services
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#0082FB] font-semibold truncate max-w-[220px] sm:max-w-md">
            {pageCleanTitle}
          </span>
        </nav>

        {/* Clean 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Lead & Clean Buttons */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#000F23] font-heading tracking-tight leading-[1.2]">
              {titleBefore ? `${titleBefore} ` : ""}
              <HeadlineHighlight variant="none">
                <span className="text-[#31A1FF]">{titleHighlight}</span>
              </HeadlineHighlight>
              {titleAfter ? ` ${titleAfter}` : ""}
            </h1>

            <p className="text-base sm:text-lg text-[#5D7280] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {leadText}
            </p>

            {/* Simple, Uncluttered CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/get-a-free-quote"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-sm shadow-lg shadow-[#0082FB]/25 hover:shadow-xl hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:01710424241"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#000F23] border border-slate-200 hover:border-[#0082FB]/60 font-heading font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200"
              >
                <span className="w-6 h-6 rounded-full bg-[#0082FB]/10 flex items-center justify-center group-hover:bg-[#0082FB] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#0082FB] group-hover:text-white transition-colors" />
                </span>
                <span>Call: 01710424241</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Light Showcase Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-sm flex items-center justify-center overflow-hidden">
              <Image
                src={heroImage}
                alt={pageCleanTitle}
                width={600}
                height={400}
                className="w-full h-auto object-cover max-h-[360px] rounded-xl block"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
