import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blogData } from "@/data/blog-data";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Bangla Blog & Guides | Bulbul Bahar",
  description:
    "Read comprehensive guides, tips, and strategies on Search Engine Optimization, On-Page SEO, YouTube ranking, and freelancing by Bulbul Bahar.",
};

export default function BlogArchivePage() {
  return (
    <div className="py-16 md:py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060505]">
            SEO Bangla <span className="text-[#CB3522]">Blog &amp; Articles</span>
          </h1>
          <div className="w-16 h-1 bg-[#e05414] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Practical search engine optimization tutorials, algorithm updates, and freelancing blueprints written by Bulbul Bahar.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.slug}
              className="clean-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="font-semibold text-[#CB3522] bg-red-50 px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-[#060505] mb-3 hover:text-[#CB3522] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#CB3522] hover:underline flex items-center gap-1"
                >
                  <span>সম্পূর্ণ পড়ুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
