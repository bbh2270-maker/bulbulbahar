"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import {
  Search,
  Globe,
  PenTool,
  Palette,
  Video,
  Smartphone,
  CheckSquare,
  Building2,
  TrendingUp,
  MapPin,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ServiceItem {
  slug: string;
  title: string;
  category: "seo" | "creative" | "tech";
  categoryLabel: string;
  desc: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const allServices: ServiceItem[] = [
  {
    slug: "seo-service-in-bangladesh",
    title: "Best SEO Service in Bangladesh",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Achieve top 10 Google rankings within 4–6 months. Proven White Hat search strategies built to attract organic visitors, boost brand recognition, and maximize revenue.",
    highlights: [
      "Guaranteed Top 10 Google Rankings",
      "100% White Hat & Algorithm-Safe",
      "Full-Funnel Keyword & Competitor Audit",
    ],
    icon: Search,
    accentColor: "#CB3522",
  },
  {
    slug: "local-seo-service-in-bangladesh",
    title: "Local SEO Service in Bangladesh",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Dominate Google Maps and local 3-pack search results. Drive targeted nearby customers to your storefront, office, or regional business.",
    highlights: [
      "Google Business Profile (GMB) Optimization",
      "Local Map-Pack Top Ranking",
      "Geo-Targeted Citations & Local Reviews",
    ],
    icon: MapPin,
    accentColor: "#F99517",
  },
  {
    slug: "seo-service-in-usa",
    title: "Affordable SEO Service in USA",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Target high-intent American buyers across competitive US industries. High-authority backlink acquisition and ROI-driven international traffic.",
    highlights: [
      "US Market Keyword Optimization",
      "High-DA Link Outreach & PR",
      "E-commerce & Lead Gen Conversions",
    ],
    icon: Globe,
    accentColor: "#0284C7",
  },
  {
    slug: "seo-expert-in-dhaka",
    title: "Professional SEO Expert in Dhaka",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Work directly with Dhaka’s leading SEO consultant. Tailored rank-boosting strategies, in-depth technical audits, and monthly transparent reporting.",
    highlights: [
      "Direct 1-on-1 SEO Strategic Roadmap",
      "Core Web Vitals & Technical Fixes",
      "Continuous Tracking & Detailed Reporting",
    ],
    icon: TrendingUp,
    accentColor: "#10B981",
  },
  {
    slug: "best-seo-agency-in-bangladesh",
    title: "Best SEO Agency in Bangladesh",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Full-scale corporate SEO management for established companies, startups, and expanding brands looking for sustainable search engine dominance.",
    highlights: [
      "Enterprise Search Optimization",
      "White-Glove Link Building & Outreach",
      "Ongoing Algorithm Monitoring & Protection",
    ],
    icon: Building2,
    accentColor: "#6366F1",
  },
  {
    slug: "youtube-seo-service",
    title: "YouTube SEO Service Provider",
    category: "seo",
    categoryLabel: "SEO & Growth",
    desc: "Skyrocket video views, subscribers, and watch time. Maximize your video visibility on YouTube search results and algorithmic recommendations.",
    highlights: [
      "Video Tag, Title & Description Optimization",
      "Suggested Video & Browse Placement",
      "CTR-Boosting Thumbnails & Metadata",
    ],
    icon: Video,
    accentColor: "#EF4444",
  },
  {
    slug: "web-design-service-in-bangladesh",
    title: "Web Design Service in BD",
    category: "creative",
    categoryLabel: "Creative & Content",
    desc: "High-converting, responsive websites tailored for business growth. Beautiful UI/UX layouts optimized for lighting-fast speed and search engine rankings.",
    highlights: [
      "Modern, Responsive & Mobile-First UI/UX",
      "SEO-Ready Architecture & Fast Loading",
      "WordPress, Elementor & Custom Stacks",
    ],
    icon: Globe,
    accentColor: "#8B5CF6",
  },
  {
    slug: "content-writing-service",
    title: "Best Content Writing Service",
    category: "creative",
    categoryLabel: "Creative & Content",
    desc: "Captivate readers and rank on Google with human-crafted, search-intent matched copy. Engaging blog articles, service pages, and persuasive copywriting.",
    highlights: [
      "Search-Intent Matched SEO Content",
      "100% Unique, Human & Plagiarism-Free",
      "Conversion-Focused Sales Copywriting",
    ],
    icon: PenTool,
    accentColor: "#EC4899",
  },
  {
    slug: "graphic-design-service",
    title: "Best Graphic Design Service",
    category: "creative",
    categoryLabel: "Creative & Content",
    desc: "Your visual brand speaks before you say a word. High-impact social media creatives, corporate branding, banners, and advertising visuals.",
    highlights: [
      "High-Converting Social Media Creatives",
      "Complete Brand Identity & Logo Design",
      "Marketing Collateral & Display Banners",
    ],
    icon: Palette,
    accentColor: "#F59E0B",
  },
  {
    slug: "android-app-development-service",
    title: "Android App Development Service",
    category: "tech",
    categoryLabel: "Engineering & QA",
    desc: "Transform your vision into high-performance Android mobile apps. Seamless user experiences, clean backend integrations, and Play Store readiness.",
    highlights: [
      "Native & Cross-Platform Android Apps",
      "Scalable Architecture & Secure APIs",
      "Full Google Play Launch Support",
    ],
    icon: Smartphone,
    accentColor: "#059669",
  },
  {
    slug: "quality-assurance-testing",
    title: "Quality Assurance & Software Testing",
    category: "tech",
    categoryLabel: "Engineering & QA",
    desc: "Ensure your software, mobile application, or web platform runs completely bug-free. Automated and manual testing for flawless reliability.",
    highlights: [
      "Automated & Manual Functional Testing",
      "Cross-Browser & Performance Audits",
      "Detailed Bug Logs & Regression Testing",
    ],
    icon: CheckSquare,
    accentColor: "#2563EB",
  },
  {
    slug: "seo-training-in-bangladesh",
    title: "Advance SEO Training in Bangladesh",
    category: "tech",
    categoryLabel: "Engineering & QA",
    desc: "Master search engine optimization from an active industry specialist. Practical, hands-on training with real ranking projects and algorithm insights.",
    highlights: [
      "Live Practical Project Experience",
      "Technical, On-Page & Off-Page Mastery",
      "Direct Mentorship by Bulbul Bahar",
    ],
    icon: GraduationCap,
    accentColor: "#DC2626",
  },
];

export default function ServicesPage() {
  const [filter, setFilter] = useState<"all" | "seo" | "creative" | "tech">("all");

  const filteredServices =
    filter === "all"
      ? allServices
      : allServices.filter((s) => s.category === filter);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Breadcrumbs */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-[#CB3522] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#CB3522] font-semibold">Services Catalog</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CB3522]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#F99517]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#CB3522]/10 text-[#CB3522] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SUITE DIGITAL SOLUTIONS & GROWTH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-heading max-w-4xl mx-auto leading-tight">
            High-Performance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB3522] to-[#F99517]">
              SEO & Digital Services
            </span>
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#CB3522] to-[#F99517] mx-auto mt-6 rounded-full" />

          <p className="text-base sm:text-lg text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Every business requires a decisive digital edge. Explore our 12 specialized services engineered to rank your website at the top of Google, drive verified organic traffic, and scale qualified customer conversions.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="p-3 text-center border-r border-slate-100 last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#CB3522] font-heading">10+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Years SEO Mastery</div>
            </div>
            <div className="p-3 text-center sm:border-r border-slate-100 last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-heading">250+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Satisfied Clients</div>
            </div>
            <div className="p-3 text-center border-r border-slate-100 last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F99517] font-heading">300+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Ranked Projects</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#CB3522] font-heading">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">White Hat Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pb-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-[#CB3522] text-white shadow-md shadow-red-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              All Services (12)
            </button>
            <button
              onClick={() => setFilter("seo")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === "seo"
                  ? "bg-[#CB3522] text-white shadow-md shadow-red-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              SEO & Growth (6)
            </button>
            <button
              onClick={() => setFilter("creative")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === "creative"
                  ? "bg-[#CB3522] text-white shadow-md shadow-red-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              Creative & Content (3)
            </button>
            <button
              onClick={() => setFilter("tech")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === "tech"
                  ? "bg-[#CB3522] text-white shadow-md shadow-red-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              Engineering & QA (3)
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#CB3522]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: `${svc.accentColor}15`,
                          color: svc.accentColor,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#CB3522]/10 group-hover:text-[#CB3522] transition-colors">
                        {svc.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-[#111827] group-hover:text-[#CB3522] transition-colors font-heading leading-snug">
                      <Link href={`/${svc.slug}`}>{svc.title}</Link>
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {svc.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#CB3522] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#CB3522] hover:text-[#992215] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/get-a-free-quote"
                      className="text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#0082FB] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white shadow-sm shadow-[#0082FB]/25 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/30 p-8 sm:p-12 text-slate-800 border border-blue-100 shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#0082FB]/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0082FB] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/70">
                  Direct Expert Consultation
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#000F23] leading-tight">
                  Ready to Rank #1 on Google and Scale Sales?
                </h3>
                <p className="text-sm sm:text-base text-[#5D7280] leading-relaxed">
                  Whether you need comprehensive technical SEO, local maps visibility, creative branding, or custom web design, Bulbul Bahar builds tailored, data-driven roadmaps that yield quantifiable results.
                </p>

                {/* Direct Contacts */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                  <a
                    href="tel:01710424241"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs"
                  >
                    <Phone className="w-4 h-4 text-[#0082FB]" />
                    <span>01710424241</span>
                  </a>
                  <a
                    href="mailto:info@Bulbulbahar.com"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-[#0082FB]" />
                    <span>info@Bulbulbahar.com</span>
                  </a>
                </div>

                {/* Freelance Profiles */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.upwork.com/freelancers/~01ffbd32bfcca4750e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-upwork inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-bold transition-transform hover:-translate-y-0.5"
                  >
                    <span>Upwork Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.fiverr.com/rankmaster10?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fiverr inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-bold transition-transform hover:-translate-y-0.5"
                  >
                    <span>Fiverr Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:01710424241"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0082FB] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-[#0082FB]/25"
                  >
                    <span>Direct Call: 01710424241</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl text-slate-800 shadow-lg">
                <h4 className="text-xl font-bold font-heading text-[#111827] mb-2">
                  Request a Free Audit & Proposal
                </h4>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details and receive an in-depth audit report within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
