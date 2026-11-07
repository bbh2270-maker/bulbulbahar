"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import {
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Target,
  Clock,
  Sparkles,
  Globe,
  Search,
  ArrowRight,
  Phone,
  Layers,
  Award,
  ShieldCheck,
} from "lucide-react";

interface PortfolioClientProps {
  projects: Project[];
}

const CATEGORIES = [
  "All",
  "SEO & Growth",
  "E-Commerce",
  "Education & Leads",
  "Finance & Legal",
  "Local SEO",
  "Design & Creative",
] as const;

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.tag === activeCategory ||
        project.category.toLowerCase().includes(activeCategory.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [projects, activeCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, [projects]);

  return (
    <div className="bg-[#FAFBFD] text-slate-800">
      {/* ========================================================
          HERO SECTION: High-impact, Clean & Trustworthy
         ======================================================== */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/70 overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0082FB]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#31A1FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0082FB] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0082FB] font-semibold">Portfolio</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0082FB] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Case Studies & Verified Rankings</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#000F23] font-heading tracking-tight leading-[1.15] mb-6">
              Proven Results That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4]">
                Scale Real Businesses
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5D7280] leading-relaxed mb-8 font-normal">
              Explore real-world client success stories across Bangladesh, USA, UK, Singapore, and Australia. From technical on-page overhauls to high-competition #1 Google rankings and exponential traffic growth.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#0082FB] mb-1">
                250+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Projects Delivered</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">National & Global Clients</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#0082FB] mb-1">
                98.4%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Client Retention</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Repeat contracts & long-term</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#0082FB] mb-1">
                10x
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Average ROI Growth</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">High-intent buyer traffic</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#0082FB] mb-1">
                #1
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Google Rankings</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">In ultra-competitive niches</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED SPOTLIGHT SHOWCASES
         ======================================================== */}
      <section className="py-14 lg:py-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0082FB] mb-2">
              <Award className="w-4 h-4" />
              <span>Flagship Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#000F23] font-heading">
              Featured Client Breakdowns
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5D7280] max-w-md">
            Detailed performance highlights showing verifiable search visibility and revenue expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#0082FB]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header image / screenshot */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center p-5 mb-6 shadow-2xs">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={180}
                      className="max-h-28 max-w-[260px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                      unoptimized
                    />
                  ) : (
                    <Globe className="w-16 h-16 text-slate-300" />
                  )}
                  <span className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full bg-slate-50 text-[#0082FB] shadow-xs border border-slate-200/70">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {project.domain}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0082FB]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Case
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#000F23] font-heading mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#5D7280] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                  {project.metrics.trafficIncrease && (
                    <div className="text-center">
                      <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                        <TrendingUp className="w-3 h-3 text-[#0082FB]" />
                        <span>Growth</span>
                      </div>
                      <div className="text-base sm:text-lg font-black text-[#0082FB] font-heading">
                        {project.metrics.trafficIncrease}
                      </div>
                    </div>
                  )}
                  {project.metrics.keywordsRanked && (
                    <div className="text-center border-x border-slate-200">
                      <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                        <Target className="w-3 h-3 text-[#0082FB]" />
                        <span>Rankings</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                        {project.metrics.keywordsRanked}
                      </div>
                    </div>
                  )}
                  {project.metrics.timeline && (
                    <div className="text-center">
                      <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                        <Clock className="w-3 h-3 text-[#0082FB]" />
                        <span>Duration</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                        {project.metrics.timeline}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tangible Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0082FB] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/get-a-free-quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0082FB] hover:text-[#0055D4] transition-colors"
                >
                  <span>Discuss Similar Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {project.liveUrl && (
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{project.domain}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          FULL PORTFOLIO SHOWCASE WITH CATEGORY FILTERS & SEARCH
         ======================================================== */}
      <section className="py-14 bg-white border-t border-slate-200/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-[#000F23] font-heading mb-3">
              Explore All Client Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#5D7280]">
              Filter projects by industry or search by specific business goals and domain targets.
            </p>
          </div>

          {/* Filters & Search Control Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] text-white shadow-md shadow-[#0082FB]/25"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/60"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0082FB] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Grid of Projects */}
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No matching projects found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Try selecting &apos;All&apos; or clearing your search keywords.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#0082FB] text-white hover:bg-[#006CE0]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-lg hover:border-[#0082FB]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Project Image Frame */}
                    <div className="relative w-full h-36 rounded-xl overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center p-4 mb-4 shadow-2xs">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={280}
                          height={130}
                          className="max-h-24 max-w-[200px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                          style={{ imageRendering: "-webkit-optimize-contrast" }}
                          unoptimized
                        />
                      ) : (
                        <Globe className="w-12 h-12 text-slate-300" />
                      )}
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-50 text-[#0082FB] shadow-xs border border-slate-200/70">
                        {project.tag || project.category}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 mb-1">
                      {project.domain}
                    </div>

                    <h3 className="text-lg font-bold text-[#000F23] font-heading mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#5D7280] leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics Banner */}
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-center">
                      <div>
                        <div className="text-[10px] text-slate-400">Growth</div>
                        <div className="text-xs sm:text-sm font-black text-[#0082FB] font-heading">
                          {project.metrics.trafficIncrease || "N/A"}
                        </div>
                      </div>
                      <div className="border-x border-slate-200 px-3">
                        <div className="text-[10px] text-slate-400">Rankings</div>
                        <div className="text-xs font-bold text-slate-800 font-heading">
                          {project.metrics.keywordsRanked || "N/A"}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Timeline</div>
                        <div className="text-xs font-bold text-slate-800 font-heading">
                          {project.metrics.timeline || "N/A"}
                        </div>
                      </div>
                    </div>

                    {/* Key Wins */}
                    <div className="space-y-1.5 mb-5">
                      {project.results.slice(0, 2).map((win, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0082FB] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{win}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/get-a-free-quote"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0082FB] hover:text-[#0055D4] transition-colors"
                    >
                      <span>Get Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.liveUrl && (
                      <span className="text-[11px] text-slate-400 font-mono">
                        {project.domain}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          ENTERPRISE TRUSTED CLIENT BRAND LOGO GRID
         ======================================================== */}
      <section className="py-16 bg-[#FAFBFD] border-t border-slate-200/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
            TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#000F23] font-heading mb-8">
            Selected Brands & Portals We Have Optimized
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {projects.slice(0, 12).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-[#0082FB]/30 transition-all duration-200 flex items-center justify-center h-20"
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={140}
                    height={60}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-600">{p.domain}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CONVERSION BANNER: 100% Light, Colorful & Premium
         ======================================================== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FAFBFD] via-blue-50/30 to-white border-t border-slate-200/70 relative overflow-hidden">
        {/* Soft colourful ambient lights */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#31A1FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#0082FB]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-blue-100 shadow-xl shadow-blue-500/5 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0082FB] border border-blue-200/70 text-xs font-bold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Documented Organic Growth?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000F23] font-heading leading-tight max-w-3xl mx-auto mb-5 tracking-tight">
              Want Similar #1 Search Rankings &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4]">
                Proven Inbound Leads?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#5D7280] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
              Every website has distinct competitive hurdles. Contact Bulbul Bahar today for a comprehensive, confidential audit and tailored ROI growth blueprint.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-a-free-quote"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-sm shadow-lg shadow-[#0082FB]/25 hover:shadow-xl hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Get Free SEO Audit &amp; Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <a
                href="tel:01710424241"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-[#000F23] border border-slate-200 hover:border-[#0082FB] font-heading font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0082FB] group-hover:bg-[#0082FB] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call: 01710424241</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
