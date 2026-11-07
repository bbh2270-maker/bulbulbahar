import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";
import { siteConfig } from "@/data/site-config";

/** "Let's Work Together!" band at the bottom of the home page */
export default function WorkTogether() {
  return (
    <section className="bg-[#F0F0F0] py-[25px] text-center">
      <div className="max-w-[1140px] mx-auto px-4">
        <SectionHeading highlight="Let’s Work Together!" className="mb-[25px]" />
        <p className="text-[14px] text-[#5D7280] mb-[14px]">
          Let’s work together to make a big success. Request a quote &amp; work together From All countries.
        </p>
        <h4 className="text-[20px] leading-[1.2] font-extrabold mb-[25px] flex items-center justify-center gap-2">
          <Phone className="w-[20px] h-[20px] fill-[#C0392B] text-[#C0392B]" />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-[#e05414]">
            Call Me: 01710424241
          </a>
        </h4>
        <Link
          href="/get-a-free-quote"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-base shadow-lg shadow-[#0082FB]/25 hover:shadow-xl hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Get a Free Quote Now
        </Link>
      </div>
    </section>
  );
}
