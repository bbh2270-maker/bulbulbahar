import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe2,
  Send,
} from "lucide-react";
import HeadlineHighlight, { SectionHeading } from "@/components/ui/HeadlineHighlight";
import ContactForm from "@/components/ui/ContactForm";
import PageRating from "@/components/ui/PageRating";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact | Feel Free to ask a Question - Bulbul Bahar",
  description:
    "Contact us to Get your Service and get free quotes. We are ready to help you and always try to give you the best support. Knock us on Live Chat or email.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#1F2937]">
      {/* ============================================================
          HERO & FIRST SECTION: Redesigned Executive Intro
          ============================================================ */}
      <section className="pt-[50px] md:pt-[65px] pb-[40px] px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0082FB] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0082FB]" />
            <span>Direct Support &amp; Growth Consultation</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#000F23] mb-4 tracking-tight">
            <HeadlineHighlight variant="underline" color="#ff0000">
              <span className="text-[#31A1FF]">Contact Us</span>
            </HeadlineHighlight>
          </h1>

          <p className="text-base md:text-lg text-[#5D7280] max-w-2xl mx-auto leading-relaxed">
            Have questions about ranking #1 on Google, comprehensive web solutions, or need a customized growth blueprint? Reach out directly to Engineer Bulbul Bahar.
          </p>

          {/* Executive Agency Overview Card */}
          <div className="mt-10 bg-white rounded-3xl border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,15,35,0.08)] p-6 md:p-10 text-left relative overflow-hidden">
            {/* Ambient accent background blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Narrative Story & Links */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E06126] bg-[#E06126]/10 px-3 py-1 rounded-md">
                  One-Stop Digital Agency
                </div>

                <h2 className="text-xl md:text-2xl font-bold font-heading text-[#000F23] leading-snug">
                  Complete Web &amp; SEO Solutions Under One Roof to Turn Your Business Into an Industry Brand
                </h2>

                <div className="text-[15px] leading-relaxed text-[#5D7280] space-y-3">
                  <p>
                    Contact us and discover all kinds of high-quality web solutions under a roof at the best prices in the shortest possible time with us. We are the most reliable{" "}
                    <Link
                      href="/seo-service-in-bangladesh"
                      className="text-[#E06126] font-semibold hover:underline"
                    >
                      SEO Service Provider Company in Bangladesh
                    </Link>
                    .
                  </p>
                  <p>
                    <strong>
                      &ldquo;
                      <Link href="/" className="text-[#000F23] hover:text-[#0082FB] font-bold">
                        Bulbul Bahar
                      </Link>
                      &rdquo; has
                    </strong>{" "}
                    the complete package to serve your business in every aspect. From creating your website to getting it on{" "}
                    <a
                      href="https://www.google.com/business/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E06126] font-semibold hover:underline"
                    >
                      the Google Business Profile
                    </a>
                    , we do everything to make your business a Brand. We will help you achieve your business goals and accelerate your growth at an affordable price. We are able to solve your business challenges with our high-tech technology and creative content.
                  </p>
                  <p>
                    Our team members keep themselves updated with the latest technology and frequent changes in the web world. We have our own well-organized lab with the latest devices and updated premium software to serve our clients with their maximum benefits. If you are a small business owner and you are looking for an online marketing solution, then contact us here:-
                  </p>
                </div>
              </div>

              {/* Right Column: Key Trust Badges */}
              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:border-slate-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#0082FB] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#000F23]">Verified Google SEO Expert</div>
                    <div className="text-xs text-[#5D7280] mt-0.5">8+ Years documented track record in organic dominance.</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:border-slate-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#E06126] flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#000F23]">In-House Digital Lab</div>
                    <div className="text-xs text-[#5D7280] mt-0.5">Equipped with enterprise software &amp; testing devices.</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:border-slate-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-[#000F23]">Rapid Support &amp; Audit</div>
                    <div className="text-xs text-[#5D7280] mt-0.5">Direct communication &amp; confidential growth audit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: Contact Details & Get in Touch Form
          ============================================================ */}
      <section className="py-[40px] px-4">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Details Cards */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,15,35,0.06)] p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#000F23] mb-8 text-center lg:text-left">
                Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Numbers */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FF3756]/10 text-[#FF3756] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] text-[#000F23] mb-1">Phone Numbers</h4>
                    <div className="text-[14px] text-[#5D7280] space-y-1">
                      <a href="tel:+8801710424241" className="block hover:text-[#0082FB] transition-colors">
                        +880 1710 424241
                      </a>
                      <a href="tel:+192083885366" className="block hover:text-[#0082FB] transition-colors">
                        +1 920 838 8536
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FF3756]/10 text-[#FF3756] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] text-[#000F23] mb-1">Email</h4>
                    <div className="text-[14px] text-[#5D7280] space-y-1">
                      <a href="mailto:info@bulbulbahar.cloud" className="block hover:text-[#0082FB] transition-colors break-all">
                        info@bulbulbahar.cloud
                      </a>
                      <a href="mailto:Mdbulbul1015@gmail.com" className="block hover:text-[#0082FB] transition-colors break-all">
                        Mdbulbul1015@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address 1: London, UK */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FF3756]/10 text-[#FF3756] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] text-[#000F23] mb-1">Address 1 (UK)</h4>
                    <p className="text-[14px] text-[#5D7280] leading-relaxed">
                      71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
                    </p>
                  </div>
                </div>

                {/* Address 2: New York, USA */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FF3756]/10 text-[#FF3756] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] text-[#000F23] mb-1">Address 2 (USA)</h4>
                    <p className="text-[14px] text-[#5D7280] leading-relaxed">
                      58 Chester Avenue, Brooklyn, NY 11218, United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="font-heading font-bold text-lg text-[#000F23]">Follow Us:</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/bulbul.bahar1015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/engBulbulbahar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/engbulbulbahar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#E4405F] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 shadow-[0_15px_40px_-15px_rgba(0,15,35,0.08)] p-6 md:p-8">
              <div className="mb-6 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0082FB] bg-blue-50 px-3 py-1 rounded-full">
                  Quick Message
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#000F23] mt-2">
                  Get in Touch Now
                </h2>
                <p className="text-xs text-[#5D7280] mt-1">
                  Fill in your requirements and we will respond promptly.
                </p>
              </div>

              <ContactForm initialService="Complete SEO" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: Head Office (Bangladesh) Map
          ============================================================ */}
      <section className="py-[40px] px-4 bg-slate-50/50">
        <div className="max-w-[1140px] mx-auto text-center">
          <SectionHeading
            before="Head Office"
            highlight="(Bangladesh)"
            as="h2"
            className="mb-8"
          />

          <div className="w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=creative%20niloy%2C151%2F7%20Green%20Rd%2C%20Dhaka%201205&t=m&z=14&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Head Office Bangladesh Map"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: Branch Office (USA) Map
          ============================================================ */}
      <section className="py-[40px] px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <SectionHeading
            before="Branch Office"
            highlight="(USA)"
            as="h2"
            className="mb-8"
          />

          <div className="w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=creative%20niloy%2058%20Chester%20Avenue%20Apt%20%23%202%2CBrooklyn%2C%20NY%2011218&t=m&z=10&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Branch Office USA Map"
            />
          </div>
        </div>
      </section>

      {/* Rating Bar */}
      <PageRating score={5.0} votes={3} />
    </div>
  );
}
