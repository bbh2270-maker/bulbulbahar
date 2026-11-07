"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import {
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
  BarChart3,
  Users,
  Star,
  ExternalLink,
  ChevronRight,
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

/* ─── tiny stat badge ─── */
function StatBadge({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-8 rounded-lg bg-[#EBF4FF] flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#0082FB]" />
      </div>
      <span className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">{label}</span>
      <span className="text-xs font-black text-[#000F23]">{value}</span>
    </div>
  );
}

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
    <div className="bg-white text-slate-800">

      {/* ══════════════════════════════════════════════
          HERO — split layout with big stats
         ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0055D4] via-[#0082FB] to-[#31A1FF]">
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-[#0055D4]/40 blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              {/* breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white font-semibold">Portfolio</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                <Award className="w-3.5 h-3.5" />
                <span>Verified SEO Case Studies</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-6">
                Real Results.<br />
                <span className="text-white/80">Real Businesses.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
                Explore 250+ verified SEO campaigns across Bangladesh, USA, UK, Singapore & Australia — all delivering measurable organic growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/get-a-free-quote"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0055D4] font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:01710424241"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/15 border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* RIGHT — floating stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "250+", label: "Projects Delivered", sub: "National & Global", icon: BarChart3 },
                { number: "98%", label: "Client Retention", sub: "Repeat contracts", icon: Users },
                { number: "10×", label: "Average ROI Growth", sub: "High-intent traffic", icon: TrendingUp },
                { number: "#1", label: "Google Rankings", sub: "Ultra-competitive niches", icon: Star },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-black text-white mb-0.5">{s.number}</div>
                  <div className="text-xs font-bold text-white/90">{s.label}</div>
                  <div className="text-[11px] text-white/55 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURED CASE STUDIES — horizontal cards
         ══════════════════════════════════════════════ */}
      {featuredProjects.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#F7F9FC]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0082FB] mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Featured Work</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#000F23]">
                  Flagship Case Studies
                </h2>
              </div>
              <p className="text-sm text-[#5D7280] max-w-sm">
                Detailed performance breakdowns showing verifiable search visibility and revenue expansion.
              </p>
            </div>

            {/* horizontal featured cards */}
            <div className="space-y-6">
              {featuredProjects.slice(0, 2).map((project, idx) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0082FB]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* IMAGE PANEL */}
                    <div className={`lg:col-span-4 bg-gradient-to-br from-[#EBF4FF] to-[#DDEEFF] flex items-center justify-center p-10 min-h-[220px] ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={320}
                          height={180}
                          className="max-h-32 max-w-[260px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      ) : (
                        <Globe className="w-20 h-20 text-[#0082FB]/30" />
                      )}
                    </div>

                    {/* CONTENT PANEL */}
                    <div className="lg:col-span-8 p-7 sm:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#EBF4FF] text-[#0082FB] border border-[#0082FB]/20">
                            {project.tag || project.category}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">{project.domain}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-[#000F23] mb-3 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#5D7280] leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* metrics row */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-[#F7F9FC] rounded-2xl border border-slate-100 mb-6">
                          <StatBadge icon={TrendingUp} label="Growth" value={project.metrics.trafficIncrease || "N/A"} />
                          <StatBadge icon={Target} label="Rankings" value={project.metrics.keywordsRanked || "N/A"} />
                          <StatBadge icon={Clock} label="Duration" value={project.metrics.timeline || "N/A"} />
                        </div>

                        {/* results list */}
                        <div className="space-y-2">
                          {project.results.map((r, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-[#5D7280]">
                              <CheckCircle2 className="w-4 h-4 text-[#0082FB] shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                        <Link
                          href="/get-a-free-quote"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0082FB] to-[#0055D4] text-white text-xs font-bold hover:from-[#006CE0] hover:to-[#0047B8] shadow-md shadow-[#0082FB]/25 hover:-translate-y-0.5 transition-all duration-200"
                          style={{ color: "#fff" }}
                        >
                          <span>Get Similar Results</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#0082FB] transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{project.domain}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          ALL PROJECTS — filter + card grid
         ══════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#000F23] mb-3">
              All Client Projects
            </h2>
            <p className="text-sm sm:text-base text-[#5D7280]">
              Filter by industry or search by domain / keyword target.
            </p>
          </div>

          {/* filters + search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-10 p-4 bg-[#F7F9FC] rounded-2xl border border-slate-200/80">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#0082FB] text-white shadow-sm shadow-[#0082FB]/30"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-[#0082FB]/50 hover:text-[#0082FB]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-64 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0082FB] transition-all"
              />
            </div>
          </div>

          {/* grid */}
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center bg-[#F7F9FC] rounded-3xl border border-slate-200">
              <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No projects found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">Try selecting &apos;All&apos; or clearing your search.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#0082FB] text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#0082FB]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* logo area */}
                  <div className="relative bg-gradient-to-br from-[#EBF4FF] to-[#F0F7FF] flex items-center justify-center p-8 h-44 overflow-hidden">
                    {/* subtle grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0082FB 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={100}
                        className="max-h-20 max-w-[180px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-400 relative z-10 drop-shadow-sm"
                        unoptimized
                      />
                    ) : (
                      <Globe className="w-14 h-14 text-[#0082FB]/30 relative z-10" />
                    )}
                    {/* category pill */}
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-[#0082FB] border border-[#0082FB]/20 shadow-sm">
                      {project.tag || project.category}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-col flex-1 p-5">
                    <span className="text-[11px] font-mono text-slate-400 mb-1">{project.domain}</span>
                    <h3 className="text-base font-bold text-[#000F23] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#5D7280] leading-relaxed mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* mini metric pills */}
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {project.metrics.trafficIncrease && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#EBF4FF] text-[#0082FB]">
                          <TrendingUp className="w-3 h-3" />
                          {project.metrics.trafficIncrease}
                        </span>
                      )}
                      {project.metrics.keywordsRanked && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                          <Target className="w-3 h-3" />
                          {project.metrics.keywordsRanked}
                        </span>
                      )}
                      {project.metrics.timeline && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                          <Clock className="w-3 h-3" />
                          {project.metrics.timeline}
                        </span>
                      )}
                    </div>

                    {/* key result */}
                    {project.results[0] && (
                      <div className="flex items-start gap-2 text-xs text-slate-600 mb-5 pb-4 border-b border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0082FB] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{project.results[0]}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        href="/get-a-free-quote"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0082FB] hover:text-[#0055D4] transition-colors group/link"
                      >
                        <span>Get Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-slate-400 hover:text-[#0082FB] transition-colors"
                        >
                          Visit Site ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOGO GRID — trusted clients
         ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#F7F9FC] border-t border-slate-200/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Trusted By Businesses Worldwide
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-[#000F23]">
              Brands & Portals We&apos;ve Optimized
            </h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {projects.slice(0, 12).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-slate-200/70 shadow-xs hover:shadow-md hover:border-[#0082FB]/30 transition-all duration-200 flex items-center justify-center p-4 h-20 group"
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={120}
                    height={50}
                    className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                ) : (
                  <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">{p.domain}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA BANNER — dark blue gradient, premium
         ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2347] to-[#0055D4]">
        {/* decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0082FB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#31A1FF]/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Documented Organic Growth?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-5">
            Want Similar #1 Rankings &{" "}
            <span className="text-[#60C0FF]">Proven Inbound Leads?</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Every website has distinct competitive hurdles. Contact Bulbul Bahar today for a comprehensive, confidential audit and tailored ROI growth blueprint.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-free-quote"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0055D4] font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ color: "#0055D4" }}
            >
              <span>Get Free SEO Audit & Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:01710424241"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200"
              style={{ color: "#fff" }}
            >
              <Phone className="w-4 h-4" />
              <span>Call: 01710424241</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
