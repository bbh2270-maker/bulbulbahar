export interface ServiceHeroConfig {
  badge: string;
  titleBefore?: string;
  titleHighlight?: string;
  titleAfter?: string;
  lead: string;
  image: string;
  lottie?: string;
  features: [string, string, string];
  skipSections: number;
}

export const serviceHeroConfigs: Record<string, ServiceHeroConfig> = {
  "seo-service-in-bangladesh": {
    badge: "🏆 #1 SEO Expert & Service Provider in BD",
    titleBefore: "Best",
    titleHighlight: "SEO Service",
    titleAfter: "in Bangladesh",
    lead: "Welcome to the website of the Best SEO Company in Bangladesh. We take the challenge to rank your business in Google’s top results. Driven by proven White Hat strategies and manual work by Google-certified SEO specialists to guarantee sustained organic growth without penalty risks.",
    image: "/images/generated/hero-seo-bangladesh.png",
    features: [
      "Top 10 Google Ranking in 4–6 Months",
      "100% White Hat & Penalty-Safe SEO",
      "Tailored Keyword & Competitor Analysis",
    ],
    skipSections: 1,
  },
  "seo-expert-in-dhaka": {
    badge: "🎯 Top Rated SEO Specialist in Dhaka",
    titleBefore: "Best",
    titleHighlight: "SEO Service",
    titleAfter: "in Dhaka",
    lead: "Looking for an expert SEO specialist in Dhaka? Bulbul Bahar is a Google-certified SEO Consultant helping businesses across Dhaka and internationally dominate search engine rankings, attract high-intent local clients, and accelerate revenue.",
    image: "/images/generated/hero-seo-dhaka.png",
    features: [
      "Dedicated 1-on-1 Strategy & Consultation",
      "Core Web Vitals & Technical Speed Fixes",
      "Proven ROI & Transparent Monthly Reports",
    ],
    skipSections: 1,
  },
  "local-seo-service-in-bangladesh": {
    badge: "📍 Google Maps & Local 3-Pack Growth",
    titleBefore: "Proven",
    titleHighlight: "Local SEO Service",
    titleAfter: "in Bangladesh",
    lead: "Dominate Google Maps and local 3-pack search results. Our local SEO service helps you target high-intent nearby customers in your city, capture immediate search inquiries, and dramatically increase local foot traffic and sales.",
    image: "/images/generated/hero-local-seo.png",
    features: [
      "Google Business Profile (GMB) Optimization",
      "Local 3-Pack Top Ranking Guaranteed",
      "Geo-Targeted Citations & Customer Reviews",
    ],
    skipSections: 1,
  },
  "seo-service-in-usa": {
    badge: "🌐 International Search Dominance",
    titleBefore: "Affordable",
    titleHighlight: "SEO Service",
    titleAfter: "in USA",
    lead: "Welcome to the premier SEO service for the American market. Directed by Bulbul Bahar, we help businesses rank on Google.com across competitive US niches through high-authority outreach, rigorous technical optimization, and commercial intent targeting.",
    image: "/images/generated/hero-seo-usa.png",
    features: [
      "High-Intent US Market Keyword Targeting",
      "High-DA Backlinks & Editorial PR Outreach",
      "ROI-Driven E-Commerce & Lead Generation",
    ],
    skipSections: 1,
  },
  "best-seo-agency-in-bangladesh": {
    badge: "🏢 Enterprise Digital Marketing Partner",
    titleBefore: "Best",
    titleHighlight: "SEO Agency",
    titleAfter: "in Bangladesh",
    lead: "In today’s competitive digital world, having a website is not enough to grow your business. Partner with the leading SEO agency in Bangladesh for end-to-end search engine optimization, white-glove link outreach, and sustainable organic traffic.",
    image: "/images/generated/hero-seo-agency.png",
    features: [
      "Comprehensive Enterprise SEO Management",
      "White-Glove Link Building & Outreach",
      "Continuous Algorithm Adaptation & Protection",
    ],
    skipSections: 1,
  },
  "youtube-seo-service": {
    badge: "▶️ YouTube Channel Growth & Video Ranking",
    titleBefore: "Best",
    titleHighlight: "YouTube SEO Service",
    titleAfter: "Provider in BD",
    lead: "Are you looking to boost your YouTube presence? We optimize video titles, tags, descriptions, and watch-time factors to get your videos ranked on YouTube search results, suggested playlists, and Google universal search.",
    image: "/images/services/Youtube-Marketing-Service.png",
    features: [
      "Video Keyword, Tag & Metadata Optimization",
      "Suggested Video Placement & Browse Features",
      "CTR & Watch-Time Optimization Strategy",
    ],
    skipSections: 1,
  },
  "web-design-service-in-bangladesh": {
    badge: "💻 High-Converting Responsive Websites",
    titleBefore: "Web Design Service –",
    titleHighlight: "Start Your Next Website",
    titleAfter: "with Bulbul Bahar",
    lead: "Are you looking for top web design companies in Bangladesh? We build lightning-fast, mobile-first, and SEO-friendly responsive websites tailored to convert visitors into loyal paying customers.",
    image: "/images/generated/hero-web-design.png",
    features: [
      "Responsive, High-Converting UI/UX Layouts",
      "SEO-Ready Architecture & Ultra-Fast Loading",
      "Custom WordPress, Elementor & Next.js",
    ],
    skipSections: 1,
  },
  "content-writing-service": {
    badge: "✍️ Search Intent & Conversion Copywriting",
    titleBefore: "Best",
    titleHighlight: "Content Writing Service",
    titleAfter: "Provider in BD",
    lead: "Content is the true king of SEO. We craft high-quality, search-intent matched articles, sales copy, and web content designed to rank effortlessly on Google and educate, engage, and convert your prospective buyers.",
    image: "/images/services/Content-Writing-Service.jpg",
    features: [
      "Search-Intent Matched SEO Copywriting",
      "100% Unique, Plagiarism-Free & Fact-Checked",
      "High Conversion Sales & Landing Page Copy",
    ],
    skipSections: 1,
  },
  "graphic-design-service": {
    badge: "🎨 Visual Storytelling & Brand Identity",
    titleBefore: "Graphic Design Service:",
    titleHighlight: "Your Image Can Speak",
    titleAfter: "Silently",
    lead: "A great design communicates thousands of words without speaking. Elevate your brand with striking visual creatives, logo designs, promotional social banners, and marketing collateral designed to leave a lasting impression.",
    image: "/images/generated/hero-graphic-design.png",
    features: [
      "High-Converting Social Media Creatives",
      "Complete Corporate Brand Identity & Logo",
      "Professional Marketing Banners & Collateral",
    ],
    skipSections: 1,
  },
  "android-app-development-service": {
    badge: "📱 Scalable Android Mobile Solutions",
    titleBefore: "Professional",
    titleHighlight: "Android App Development",
    titleAfter: "Service in BD",
    lead: "Build high-performance, robust Android apps capable of scaling to millions of users. From concept validation and UI/UX design to native coding, robust backend APIs, and Google Play Store deployment.",
    image: "/images/generated/hero-android-dev.png",
    features: [
      "Native & Cross-Platform Android Apps",
      "Scalable Architecture & Clean Secure APIs",
      "Full Google Play Store Launch Support",
    ],
    skipSections: 1,
  },
  "quality-assurance-testing": {
    badge: "🛡️ Bug-Free Software & Performance Assurance",
    titleBefore: "Quality Assurance Testing:",
    titleHighlight: "Assured Quality",
    titleAfter: "to Build Trust",
    lead: "Don't let software bugs and performance glitches tarnish your brand reputation. We conduct thorough automated and manual QA testing to ensure your application runs smoothly across all platforms and operating systems.",
    image: "/images/generated/hero-qa-testing.png",
    features: [
      "Automated & Manual Functional Testing",
      "Performance, Security & Cross-Browser Audits",
      "Detailed Bug Tracking & Regression Reports",
    ],
    skipSections: 1,
  },
  "seo-training-in-bangladesh": {
    badge: "🎓 Live Practical SEO Mentorship",
    titleBefore: "Advance",
    titleHighlight: "SEO Training",
    titleAfter: "in Bangladesh",
    lead: "Gain in-depth practical knowledge of modern search engine optimization. Learn directly from Bulbul Bahar through real ranking projects, advanced algorithm updates, and live industry methodologies.",
    image: "/images/seo-training.jpg",
    features: [
      "Practical, Hands-On Live Projects",
      "Technical, On-Page & Off-Page Mastery",
      "Direct 1-on-1 Mentorship by Bulbul Bahar",
    ],
    skipSections: 1,
  },
};
