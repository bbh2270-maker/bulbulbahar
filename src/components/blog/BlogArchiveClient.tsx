"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/data/blog-data";
import { Clock, ArrowRight, Search, BookOpen, Layers } from "lucide-react";

interface BlogArchiveClientProps {
  initialPosts: BlogPost[];
  categories: string[];
}

function decodeEntities(str?: string): string {
  if (!str) return "";
  return str
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&#038;/g, "&");
}

export default function BlogArchiveClient({
  initialPosts,
  categories,
}: BlogArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Clean category normalization
  const normalizedCategories = useMemo(() => {
    const list = ["All", ...categories.filter((c) => c !== "Uncategorized")];
    return Array.from(new Set(list));
  }, [categories]);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (post.tags && post.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase()));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search and Category Filter Bar */}
      <div className="space-y-6">
        {/* Search Input */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 45 articles by title or keyword..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0082FB] focus:bg-white shadow-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {normalizedCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? initialPosts.length
                : initialPosts.filter(
                    (p) =>
                      p.category.toLowerCase() === cat.toLowerCase() ||
                      (p.tags && p.tags.some((t) => t.toLowerCase() === cat.toLowerCase()))
                  ).length;

            if (count === 0 && cat !== "All") return null;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#0082FB] text-white shadow-md shadow-[#0082FB]/25 scale-105"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                }`}
              >
                <span>{cat === "All" ? "সব আর্টিকেল (All)" : cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Showing count status */}
      <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#0082FB]" />
          <span>
            Showing <strong className="text-gray-900">{filteredPosts.length}</strong> of{" "}
            <strong>{initialPosts.length}</strong> published articles
          </span>
        </div>
        {selectedCategory !== "All" && (
          <button
            onClick={() => setSelectedCategory("All")}
            className="text-[#0082FB] hover:underline font-semibold"
          >
            Clear category filter
          </button>
        )}
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-gray-700 text-base">No articles found</h3>
          <p className="text-xs text-gray-500 mt-1">
            Try adjusting your search query or select another category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 text-xs font-bold bg-[#0082FB] text-white rounded-full"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="clean-card flex flex-col justify-between overflow-hidden group bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Post Featured Image Banner */}
              {post.featuredImage ? (
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={post.featuredImage}
                    alt={decodeEntities(post.title)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              ) : null}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="font-semibold text-[#E06126] bg-orange-50 px-2.5 py-1 rounded-md text-[11px]">
                      {decodeEntities(post.category)}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime || post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold font-heading text-[#060505] mb-2.5 group-hover:text-[#0082FB] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{decodeEntities(post.title)}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3">
                    {decodeEntities(post.excerpt)}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-gray-400">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#0082FB] hover:text-[#0055D4] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>সম্পূর্ণ পড়ুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
