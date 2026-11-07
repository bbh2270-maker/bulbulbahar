"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const blogLinks = [
    "এসইও কি এবং কেন করা হয়",
    "অন পেজ এসইও গাইড ২০২৫",
    "কিভাবে-ইউটিউব-এসইও-করবেন",
    "কিভাবে সাইটে ভিজিটর বাড়াবেন",
    "ফাইভার এ আয় করুন- বিস্তারিত",
  ];

  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/bulbul.bahar1015", Icon: FacebookIcon },
    { label: "Twitter", href: "https://x.com/engBulbulbahar", Icon: TwitterIcon },
    { label: "YouTube", href: "https://www.youtube.com/@EngBulbulbahar", Icon: YoutubeIcon },
    { label: "Instagram", href: "https://www.instagram.com/engbulbulbahar/", Icon: InstagramIcon },
    { label: "Pinterest", href: "https://www.pinterest.com/EngBulbulbahar/", Icon: PinterestIcon },
  ];

  const headingCls = "text-[18px] leading-[1.2] font-bold !text-white mb-[26px]";

  return (
    <footer>
      {/* MAIN FOOTER */}
      <div className="bg-black border-t-[4px] border-[#E82A00] text-[#FFFFFFC9] text-[14px] leading-[1.6]">
        <div className="max-w-[1140px] mx-auto px-4 pt-[60px] pb-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.1fr_1fr_1.5fr] gap-[30px]">
            <div>
              <h4 className={headingCls}>Contact Info</h4>
              <p className="mb-[20px]">151/7 Green Rd, Dhaka 1205, Bangladesh</p>
              <p className="mb-[20px]">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">01710-424241</a>
              </p>
              <p>
                <a href="mailto:info@bulbulbahar.com" className="hover:text-white">info@Bulbulbahar.com</a>
              </p>
            </div>

            <div className="lg:text-center">
              <h4 className={headingCls}>Quick Links</h4>
              <ul className="space-y-[6px] text-[13px]">
                <li><Link href="/get-a-free-quote" className="hover:text-[#F99517]">Get a Free Quote</Link></li>
                <li><Link href="/contact" className="hover:text-[#F99517]">Contact Us</Link></li>
                <li><Link href="/best-seo-expert-in-bangladesh" className="hover:text-[#F99517]">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#F99517]">All Portfolio</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#F99517]">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={headingCls}>SEO Bangla Blog</h4>
              <ul className="space-y-[6px] text-[13px]">
                {blogLinks.map((t) => (
                  <li key={t}>
                    <Link href="/blog" className="hover:text-[#F99517]">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={headingCls}>Follow Me</h4>
              <ul className="space-y-[6px] text-[13px]">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[12px] hover:text-[#F99517]">
                      <Icon className="w-[13px] h-[13px] text-white" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h4 className={headingCls}>Get Updates</h4>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full bg-white text-[#333] text-[14px] px-[16px] py-[12px] mb-[12px] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#E82A00] hover:bg-[#c92400] text-white text-[13px] font-bold uppercase py-[13px] transition-colors"
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#FFFFFF1F] mt-[50px] pt-[20px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" aria-label="Bulbul Bahar – Home">
              <Image src="/images/logo.png?v=2" alt="Bulbul Bahar Logo" width={109} height={55} className="h-[55px] w-auto" unoptimized />
            </Link>
            <p className="text-[12px] text-white">
              Copyright {new Date().getFullYear()}© All rights Reserved | Made By{" "}
              <Heart className="inline w-[12px] h-[12px] fill-[#E82A00] text-[#E82A00] align-[-1px]" /> BulBul Bahar
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-[30px] right-[30px] z-40 w-[34px] h-[34px] rounded-[3px] bg-[#E06126] hover:bg-[#CB3522] text-white flex items-center justify-center shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}

function PinterestIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.17-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.16 0 7.39 2.96 7.39 6.92 0 4.13-2.6 7.45-6.21 7.45-1.21 0-2.35-.63-2.74-1.37l-.75 2.84c-.27 1.04-1 2.35-1.49 3.15A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
