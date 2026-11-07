import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogData, getBlogPostBySlug } from "@/data/blog-data";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

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

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  const seen = new Set<string>();

  blogData.forEach((post) => {
    const list = [post.slug, post.titleSlug, post.decodedSlug, ...(post.aliases || [])].filter(Boolean) as string[];
    list.forEach((s) => {
      if (!seen.has(s)) {
        seen.add(s);
        params.push({ slug: s });
      }
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Bulbul Bahar",
    };
  }

  return {
    title: `${decodeEntities(post.title)} | Bulbul Bahar Blog`,
    description: decodeEntities(post.excerpt),
    alternates: {
      canonical: `/blog/${encodeURI(post.slug)}`,
    },
  };
}

export default async function SingleBlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime || post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#060505] tracking-tight leading-tight">
            {decodeEntities(post.title)}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic border-l-4 border-[#CB3522] pl-4">
            {decodeEntities(post.excerpt)}
          </p>

          <div className="pt-2 text-xs text-gray-500">
            Written by <strong className="text-gray-900">{post.author}</strong> • #1 SEO Specialist in Bangladesh
          </div>
        </header>

        {/* Post Featured Banner Image */}
        {post.featuredImage && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <Image
              src={post.featuredImage}
              alt={decodeEntities(post.title)}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Post Content */}
        {post.contentHtml || post.content ? (
          <div
            className="prose prose-slate max-w-none text-gray-800 leading-relaxed text-base [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-heading [&>h2]:text-[#060505] [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-[#060505] [&>h3]:mt-6 [&>h3]:mb-3 [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-[#CB3522] [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1.5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-1.5 [&>img]:rounded-xl [&>img]:my-6 [&>a]:text-[#e05414] [&>a]:font-semibold hover:[&>a]:underline [&>table]:w-full [&>table]:border [&>table]:my-6 [&>table_th]:border [&>table_th]:p-3 [&>table_th]:bg-slate-50 [&>table_td]:border [&>table_td]:p-3"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || post.content }}
          />
        ) : null}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
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
        )}

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
            className="px-5 py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider !text-white bg-[#CB3522] hover:bg-[#BB2929] transition-colors whitespace-nowrap shadow-sm"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </article>
  );
}
