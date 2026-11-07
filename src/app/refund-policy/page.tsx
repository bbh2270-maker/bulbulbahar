import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy - Bulbul Bahar",
  description: "Thank you for choosing our services. Please read this Refund Policy carefully before making any payment.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#5D7280] hover:text-[#0082FB] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CB3522] bg-[#CB3522]/10 px-3 py-1 rounded-md mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[#000F23]">
            Refund Policy
          </h1>
          <p className="text-sm text-[#5D7280] mt-2">
            Last Updated: Official Policy of Bulbul Bahar SEO Agency
          </p>
        </div>

        <div
          className="prose prose-slate max-w-none text-[#333] leading-relaxed text-[15px] space-y-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-[#000F23] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: "\n<p class=\"wp-block-paragraph\">Thank you for choosing our services. Please read this Refund Policy carefully before making any payment.</p>\n\n\n\n<h3 class=\"wp-block-heading\">1. No Refund for Completed Services</h3>\n\n\n\n<p class=\"wp-block-paragraph\">Once a project has started or a service has been delivered, we do not offer any refunds. By purchasing our services, you agree to this no-refund policy.</p>\n\n\n\n<h3 class=\"wp-block-heading\">2. Refund for Unaccepted Projects</h3>\n\n\n\n<p class=\"wp-block-paragraph\">If we receive your payment but are <strong>unable to accept or start your project</strong> for any reason, we will refund the full amount to you.</p>\n\n\n\n<h3 class=\"wp-block-heading\">3. Project Cancellation by Client</h3>\n\n\n\n<p class=\"wp-block-paragraph\">If the client decides to cancel the project after we have accepted it, <strong>no refund</strong> will be provided for the amount already paid.</p>\n\n\n\n<h3 class=\"wp-block-heading\">4. Payment Disputes</h3>\n\n\n\n<p class=\"wp-block-paragraph\">We always aim to maintain clear communication. In case of any payment-related issue, clients are requested to contact us directly at [your email or support contact] to resolve the matter quickly.</p>\n\n\n\n<h3 class=\"wp-block-heading\">5. Policy Agreement</h3>\n\n\n\n<p class=\"wp-block-paragraph\">By purchasing our services, you agree to this Refund Policy. We reserve the right to update or modify this policy at any time without prior notice.</p>\n\n\n<div class=\"kk-star-ratings kksr-auto kksr-align-center kksr-valign-bottom\"\n    data-payload='{&quot;align&quot;:&quot;center&quot;,&quot;id&quot;:&quot;4735&quot;,&quot;slug&quot;:&quot;default&quot;,&quot;valign&quot;:&quot;bottom&quot;,&quot;ignore&quot;:&quot;&quot;,&quot;reference&quot;:&quot;auto&quot;,&quot;class&quot;:&quot;&quot;,&quot;count&quot;:&quot;0&quot;,&quot;legendonly&quot;:&quot;&quot;,&quot;readonly&quot;:&quot;&quot;,&quot;score&quot;:&quot;0&quot;,&quot;starsonly&quot;:&quot;&quot;,&quot;best&quot;:&quot;5&quot;,&quot;gap&quot;:&quot;4&quot;,&quot;greet&quot;:&quot;Rate this page&quot;,&quot;legend&quot;:&quot;0\\/5 - (0 votes)&quot;,&quot;size&quot;:&quot;24&quot;,&quot;title&quot;:&quot;Refund Policy&quot;,&quot;width&quot;:&quot;0&quot;,&quot;_legend&quot;:&quot;{score}\\/{best} - ({count} {votes})&quot;,&quot;font_factor&quot;:&quot;1.25&quot;}'>\n            \n<div class=\"kksr-stars\">\n    \n<div class=\"kksr-stars-inactive\">\n            <div class=\"kksr-star\" data-star=\"1\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" data-star=\"2\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" data-star=\"3\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" data-star=\"4\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" data-star=\"5\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n    </div>\n    \n<div class=\"kksr-stars-active\" style=\"width: 0px;\">\n            <div class=\"kksr-star\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n            <div class=\"kksr-star\" style=\"padding-right: 4px\">\n            \n\n<div class=\"kksr-icon\" style=\"width: 24px; height: 24px;\"></div>\n        </div>\n    </div>\n</div>\n                \n\n<div class=\"kksr-legend\" style=\"font-size: 19.2px;\">\n            <span class=\"kksr-muted\">Rate this page</span>\n    </div>\n    </div>\n" }}
        />
      </div>
    </div>
  );
}
