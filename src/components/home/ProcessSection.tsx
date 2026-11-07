import React from "react";
import {
  FileSearch,
  Compass,
  Target,
  FileEdit,
  Code2,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Technical Audit of Website",
      desc: "Comprehensive diagnostic of site crawlability, broken links, Core Web Vitals, mobile responsiveness, and indexing status.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "SEO Strategy Development",
      desc: "Tailored algorithmic blueprint designed for your specific industry, evaluating competitor gaps and user intent funnels.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Keywords that Actually Rank",
      desc: "Deep research using Semrush & Ahrefs to pinpoint high-volume, low-competition commercial terms that drive qualified buyers.",
      icon: Target,
    },
    {
      num: "04",
      title: "Semantic SEO Content Writing",
      desc: "High-value, human-crafted content crafted to satisfy Google Helpful Content Guidelines and engage your target audience.",
      icon: FileEdit,
    },
    {
      num: "05",
      title: "Site Structure & On-Page SEO",
      desc: "Architectural optimization, internal linking, schema markup, title tags, meta descriptions, and image alt attributes.",
      icon: Code2,
    },
    {
      num: "06",
      title: "Transparent Reporting & Growth",
      desc: "Real-time Google Search Console performance analytics, keyword position tracking, and continuous conversion optimization.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Proven SEO Strategy &amp; Process
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            Effective SEO is not guesswork. We apply a rigorous 6-stage engineering
            approach accumulated across 8+ years of ranking competitive websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-7 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-brand-500/40 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-brand-500/50 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
