/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bulbulbahar.cloud", "images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/best-seo-expert-in-bangladesh",
        permanent: true,
      },
      {
        source: "/on-page-seo-tips-for-beginners",
        destination: "/blog/on-page-seo-tips-for-beginners",
        permanent: true,
      },
      {
        source: "/youtube-keyword-research-and-youtube-seo-2025",
        destination: "/blog/youtube-keyword-research-and-youtube-seo-2025",
        permanent: true,
      },
      {
        source: "/what-is-affiliate-marketing-a-to-z-guide-in-2025",
        destination: "/blog/what-is-affiliate-marketing-a-to-z-guide-in-2025",
        permanent: true,
      },
      {
        source: "/digital-marketing-ads-best-sem-platform-in-bd",
        destination: "/blog/digital-marketing-ads-best-sem-platform-in-bd",
        permanent: true,
      },
      {
        source: "/on-page-seo-2025-ultimate-guidelines",
        destination: "/blog/on-page-seo-2025-ultimate-guidelines",
        permanent: true,
      },
      {
        source: "/off-page-seo-2025-complete-guidelines",
        destination: "/blog/off-page-seo-2025-complete-guidelines",
        permanent: true,
      },
      {
        source: "/10-real-ways-of-making-money-online-without-huge-investment",
        destination: "/blog/10-real-ways-of-making-money-online-without-huge-investment",
        permanent: true,
      },
      {
        source: "/10-things-that-dont-affect-website-ranking-on-seo",
        destination: "/blog/10-things-that-dont-affect-website-ranking-on-seo",
        permanent: true,
      },
      {
        source: "/25-professional-digital-marketing-tips",
        destination: "/blog/25-professional-digital-marketing-tips",
        permanent: true,
      },
      {
        source: "/what-is-seo-how-do-i-learn-seo",
        destination: "/blog/what-is-seo-how-do-i-learn-seo",
        permanent: true,
      },
      {
        source: "/best-freelancing-tips-for-beginners",
        destination: "/blog/best-freelancing-tips-for-beginners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
