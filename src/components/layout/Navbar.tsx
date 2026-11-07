"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const pathname = usePathname();

  const seoServices = [
    { label: "SEO Service In Bd", href: "/seo-service-in-bangladesh" },
    { label: "SEO Service in USA", href: "/seo-service-in-usa" },
    { label: "SEO Expert in Dhaka", href: "/seo-expert-in-dhaka" },
    { label: "Best SEO Agency In Bangladesh", href: "/best-seo-agency-in-bangladesh" },
    { label: "Local SEO Service", href: "/local-seo-service-in-bangladesh" },
    { label: "Youtube SEO Service", href: "/youtube-seo-service" },
  ];

  const otherServices = [
    { label: "Content Writing Service", href: "/content-writing-service" },
    { label: "Web Design Service", href: "/web-design-service-in-bangladesh" },
    { label: "Graphic Design Service", href: "/graphic-design-service" },
    { label: "Android App Development", href: "/android-app-development-service" },
    { label: "Quality Assurance Testing", href: "/quality-assurance-testing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#31A1FF] transition-all">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png?v=2"
              alt="Bulbul Bahar Logo"
              width={120}
              height={60}
              className="h-[55px] sm:h-[65px] w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[1025px]:flex items-center text-[15px] font-normal text-white">
            <Link
              href="/"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>Home</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>

            <Link
              href="/best-seo-expert-in-bangladesh"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/best-seo-expert-in-bangladesh" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>About Me</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/best-seo-expert-in-bangladesh" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>

            {/* SEO Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setSeoOpen(true)}
              onMouseLeave={() => setSeoOpen(false)}
            >
              <button
                type="button"
                className="px-[10px] xl:px-[20px] py-[13px] flex items-center gap-[8px] text-white transition-colors"
              >
                <span>SEO Services</span>
                <svg viewBox="0 0 320 512" className="w-[9px] h-[9px] fill-white" aria-hidden="true"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
              </button>

              {seoOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 z-50 text-gray-800">
                  {seoServices.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CB3522] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setOtherOpen(true)}
              onMouseLeave={() => setOtherOpen(false)}
            >
              <button
                type="button"
                className="px-[10px] xl:px-[20px] py-[13px] flex items-center gap-[8px] text-white transition-colors"
              >
                <span>Other Services</span>
                <svg viewBox="0 0 320 512" className="w-[9px] h-[9px] fill-white" aria-hidden="true"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
              </button>

              {otherOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 z-50 text-gray-800">
                  {otherServices.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CB3522] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/portfolio" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>Portfolio</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/portfolio" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>

            <Link
              href="/seo-training-in-bangladesh"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/seo-training-in-bangladesh" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>SEO Training</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/seo-training-in-bangladesh" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>

            <Link
              href="/contact"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/contact" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>Contact</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>

            <Link
              href="/blog"
              className={`px-[10px] xl:px-[20px] py-[13px] transition-colors relative group ${
                pathname === "/blog" ? "text-white" : "text-white hover:text-white"
              }`}
            >
              <span>Blog</span>
              <span className={`absolute bottom-[4px] left-[10px] right-[10px] xl:left-[20px] xl:right-[20px] h-[2px] bg-[#F15151] transition-transform ${pathname === "/blog" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
          </nav>

          {/* Desktop CTA Button: Hire Me */}
          <div className="hidden min-[1025px]:flex items-center">
            <Link
              href="/get-a-free-quote"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0082FB]/25 hover:shadow-lg hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex min-[1025px]:hidden items-center gap-3">
            <Link
              href="/get-a-free-quote"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0082FB] to-[#0055D4] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#0082FB]/20"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="min-[1025px]:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3 rounded-b-xl shadow-2xl text-gray-800">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              Home
            </Link>
            <Link
              href="/best-seo-expert-in-bangladesh"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              About Me
            </Link>

            {/* Mobile SEO Services */}
            <div>
              <div className="font-bold text-xs uppercase tracking-wider text-[#CB3522] py-1 border-b border-gray-100">
                SEO Services
              </div>
              <div className="pl-3 py-1 space-y-1.5">
                {seoServices.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-xs text-gray-700 hover:text-[#CB3522]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Other Services */}
            <div>
              <div className="font-bold text-xs uppercase tracking-wider text-[#CB3522] py-1 border-b border-gray-100">
                Other Services
              </div>
              <div className="pl-3 py-1 space-y-1.5">
                {otherServices.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-xs text-gray-700 hover:text-[#CB3522]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              Portfolio
            </Link>
            <Link
              href="/seo-training-in-bangladesh"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              SEO Training
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#1B1B1B] hover:text-[#CB3522]"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
