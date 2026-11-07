"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServicePageData, ServiceSectionItem } from "@/data/services-data";
import { 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock
} from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const toggleFaq = (idx: string) => {
    setOpenFaq((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const otherServices = [
    { name: "SEO Service in Bangladesh", href: "/seo-service-in-bangladesh" },
    { name: "Local SEO Service", href: "/local-seo-service-in-bangladesh" },
    { name: "SEO Service in USA", href: "/seo-service-in-usa" },
    { name: "SEO Expert in Dhaka", href: "/seo-expert-in-dhaka" },
    { name: "Web Design Service", href: "/web-design-service-in-bangladesh" },
    { name: "Content Writing Service", href: "/content-writing-service" },
    { name: "Graphic Design Service", href: "/graphic-design-service" },
    { name: "YouTube SEO Service", href: "/youtube-seo-service" },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#333333]">
      {/* Breadcrumbs Header */}
      <div className="bg-[#F8F9FA] border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-[#CB3522] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/services" className="hover:text-[#CB3522] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#CB3522] font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {data.title.split("|")[0].split("#")[0].trim()}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#CB3522]/10 text-[#CB3522] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional SEO & Digital Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1B1B] leading-tight mb-4 tracking-tight">
              {data.title}
            </h1>

            <div className="w-20 h-1 bg-[#CB3522] rounded mb-6"></div>

            {data.metaDesc && (
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
                {data.metaDesc}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded bg-[#CB3522] text-white font-bold text-sm hover:bg-[#a92b1a] transition-all shadow-md shadow-red-500/20"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://www.upwork.com/freelancers/~01ffbd32bfcca4750e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-upwork inline-flex items-center justify-center px-5 py-3 rounded text-white font-bold text-sm transition-all"
              >
                Hire on Upwork
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a
                href="https://www.fiverr.com/rankmaster10?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fiverr inline-flex items-center justify-center px-5 py-3 rounded text-white font-bold text-sm transition-all"
              >
                Order on Fiverr
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Primary Content (col-span-8) */}
            <div className="lg:col-span-8 space-y-12">
              {data.sections.map((sec, sIdx) => (
                <div 
                  key={sIdx} 
                  id={`section-${sIdx}`}
                  className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {sec.heading && (
                    <div className="mb-6">
                      {sec.tag === "h1" ? (
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1B1B] tracking-tight">
                          {sec.heading}
                        </h2>
                      ) : sec.tag === "h3" ? (
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1B1B1B] tracking-tight">
                          {sec.heading}
                        </h3>
                      ) : (
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B1B1B] tracking-tight">
                          {sec.heading}
                        </h2>
                      )}
                      <div className="elementor-divider-separator mt-2.5"></div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {sec.items.map((item, iIdx) => {
                      if (item.type === "paragraph" && item.text) {
                        return (
                          <p
                            key={iIdx}
                            className="text-[#333333] text-base leading-relaxed text-justify"
                          >
                            {item.text}
                          </p>
                        );
                      }

                      if (item.type === "h4" && item.text) {
                        return (
                          <h4
                            key={iIdx}
                            className="text-lg font-bold text-[#1B1B1B] mt-6 mb-2"
                          >
                            {item.text}
                          </h4>
                        );
                      }

                      if (item.type === "list" && Array.isArray(item.items)) {
                        return (
                          <ul
                            key={iIdx}
                            className="space-y-2.5 my-4 pl-1"
                          >
                            {item.items.map((liText, lIdx) => (
                              <li
                                key={lIdx}
                                className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#CB3522] shrink-0 mt-0.5" />
                                <span>{liText as string}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (item.type === "image" && item.src) {
                        return (
                          <div
                            key={iIdx}
                            className="my-6 rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center p-2"
                          >
                            <img
                              src={item.src}
                              alt={item.alt || data.title}
                              className="max-h-[450px] w-auto max-w-full object-contain rounded"
                              loading="lazy"
                            />
                          </div>
                        );
                      }

                      if (item.type === "faqs" && Array.isArray(item.items)) {
                        return (
                          <div key={iIdx} className="space-y-3 mt-8">
                            <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">
                              Frequently Asked Questions
                            </h3>
                            {(item.items as { question: string; answer: string }[]).map(
                              (faq, fIdx) => {
                                const faqKey = `${sIdx}-${iIdx}-${fIdx}`;
                                const isOpen = !!openFaq[faqKey];
                                return (
                                  <div
                                    key={fIdx}
                                    className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all"
                                  >
                                    <button
                                      type="button"
                                      onClick={() => toggleFaq(faqKey)}
                                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1B1B1B] hover:text-[#CB3522] transition-colors"
                                    >
                                      <span>{faq.question}</span>
                                      {isOpen ? (
                                        <ChevronUp className="w-4 h-4 text-[#CB3522] shrink-0" />
                                      ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                                      )}
                                    </button>
                                    {isOpen && (
                                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-gray-600 border-t border-gray-100 leading-relaxed whitespace-pre-line bg-gray-50/50">
                                        {faq.answer}
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              ))}

              {/* Bottom Project Inquiry CTA */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1B1B1B] to-[#2d2d2d] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black mb-2">
                    Need Custom SEO or Web Solutions?
                  </h3>
                  <p className="text-gray-300 text-sm max-w-xl">
                    Get in touch with Bulbul Bahar today for custom rank-boosting strategies, tailored audits, and high-impact digital marketing.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 px-6 py-3 rounded bg-[#CB3522] hover:bg-[#a92b1a] text-white font-bold text-sm transition-all shadow-md"
                >
                  Contact Now
                </Link>
              </div>
            </div>

            {/* Sidebar (col-span-4) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Quick Contact Box */}
              <div className="bg-[#DDECEC47] border border-[#bcd7d7] rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1B1B1B] mb-3">
                  Direct Consultation
                </h3>
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  Have a quick question about ranking your business? Call or WhatsApp anytime!
                </p>

                <div className="space-y-3.5 mb-6 text-sm">
                  <a 
                    href="tel:01710424241"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/80 hover:border-[#CB3522] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#CB3522]/10 text-[#CB3522] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Phone & WhatsApp</div>
                      <div className="font-bold text-[#1B1B1B]">01710424241</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@Bulbulbahar.com"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/80 hover:border-[#CB3522] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#CB3522]/10 text-[#CB3522] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email Address</div>
                      <div className="font-bold text-[#1B1B1B]">info@Bulbulbahar.com</div>
                    </div>
                  </a>
                </div>

                <Link
                  href="/get-a-free-quote"
                  className="w-full flex items-center justify-center py-2.5 px-4 rounded bg-[#1B1B1B] text-white font-bold text-xs hover:bg-[#CB3522] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Other Services Menu */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#1B1B1B] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CB3522]" />
                  <span>Other Services</span>
                </h3>
                <nav className="space-y-1.5">
                  {otherServices.map((srv, idx) => {
                    const isCurrent = srv.href === `/${data.slug}`;
                    return (
                      <Link
                        key={idx}
                        href={srv.href}
                        className={`flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-all ${
                          isCurrent
                            ? "bg-[#CB3522] text-white font-bold shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#CB3522]"
                        }`}
                      >
                        <span>{srv.name}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-gray-400"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Fast Contact Form Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#1B1B1B] mb-2">
                  Fast Inquiry
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Send a message directly and get a reply within 2 hours.
                </p>
                <ContactForm />
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
