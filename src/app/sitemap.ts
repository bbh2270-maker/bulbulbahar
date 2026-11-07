import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { blogData } from "@/data/blog-data";
import { allServiceSlugs } from "@/data/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://bulbulbahar.com";

  const staticRoutes = [
    "",
    "/best-seo-expert-in-bangladesh",
    "/services",
    "/portfolio",
    "/seo-training-in-bangladesh",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/refund-policy",
    "/get-a-free-quote",
    "/best-seo-agency-in-bangladesh",
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

  const blogRoutes = blogData.map((post) => {
    let dateStr = new Date().toISOString();
    try {
      const d = new Date(post.publishedAt || post.date);
      if (!isNaN(d.getTime())) {
        dateStr = d.toISOString();
      }
    } catch (e) {}
    return {
      url: `${baseUrl}/blog/${encodeURI(post.slug)}`,
      lastModified: dateStr,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
