import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { blogData } from "@/data/blog-data";
import { allServiceSlugs } from "@/data/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/best-seo-expert-in-bangladesh",
    "/services",
    "/portfolio",
    "/seo-training-in-bangladesh",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/get-a-free-quote",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = allServiceSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
