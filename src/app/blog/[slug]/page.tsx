import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/data/blog-data";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Bulbul Bahar Blog`,
    description: post.excerpt,
  };
}

export default async function SingleBlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#CB3522] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Header */}
        <header className="space-y-4 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="font-semibold text-[#CB3522] bg-red-50 px-2.5 py-1 rounded">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#060505] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic border-l-4 border-[#CB3522] pl-4">
            {post.excerpt}
          </p>

          <div className="pt-2 text-xs text-gray-500">
            Written by <strong className="text-gray-900">{post.author}</strong> • #1 SEO Specialist in Bangladesh
          </div>
        </header>

        {/* Post Content */}
        <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="text-2xl font-bold text-[#060505] pt-4">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("#### ")) {
              return (
                <h4 key={i} className="text-lg font-bold text-[#CB3522] pt-2">
                  {para.replace("#### ", "")}
                </h4>
              );
            }
            if (para.startsWith("* ") || para.startsWith("1. ")) {
              const lines = para.split("\n");
              return (
                <ul key={i} className="space-y-1.5 pl-5 list-disc marker:text-[#CB3522]">
                  {lines.map((l, li) => (
                    <li key={li}>
                      {l.replace(/^[*1234567890.]\s+/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (para.startsWith("---")) {
              return <hr key={i} className="border-gray-200 my-6" />;
            }
            return <p key={i}>{para}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700"
            >
              <Tag className="w-3 h-3 text-[#CB3522]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author Callout */}
        <div className="p-6 rounded-xl bg-[#F8F9FA] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900 text-base">
              Need Help Ranking Your Website?
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              Contact Bulbul Bahar for a customized, data-driven SEO strategy plan.
            </p>
          </div>
          <Link
            href="/get-a-free-quote"
            className="px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] shadow-md shadow-[#0082FB]/25 hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </article>
  );
}
