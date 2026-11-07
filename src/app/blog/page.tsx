import React from "react";
import type { Metadata } from "next";
import { blogData, blogCategories } from "@/data/blog-data";
import BlogArchiveClient from "@/components/blog/BlogArchiveClient";
import HeadlineHighlight from "@/components/ui/HeadlineHighlight";

export const metadata: Metadata = {
  title: "SEO Bangla Blog & Guides | Bulbul Bahar",
  description:
    "Read 45+ comprehensive guides, tips, and strategies on Search Engine Optimization, On-Page SEO, Off-Page SEO, YouTube ranking, and freelancing by Bulbul Bahar.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogArchivePage() {
  return (
    <div className="py-12 md:py-16 bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0082FB] text-xs font-bold uppercase tracking-wider">
            <span>Knowledge Base &amp; Tutorials</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000F23] tracking-tight">
            SEO &amp; Freelancing{" "}
            <HeadlineHighlight variant="underline" color="#ff0000">
              <span className="text-[#31A1FF]">Blog &amp; Articles</span>
            </HeadlineHighlight>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Practical search engine optimization tutorials, Google algorithm updates, content writing formulas, and freelancing blueprints written by Engineer Bulbul Bahar.
          </p>
        </div>

        {/* Client-side filterable blog post grid */}
        <BlogArchiveClient
          initialPosts={blogData}
          categories={blogCategories}
        />
      </div>
    </div>
  );
}
