import type { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import { projectsData } from "@/data/projects-data";

export const metadata: Metadata = {
  title: "Client Case Studies & SEO Portfolio | Bulbul Bahar",
  description:
    "Explore 250+ verified SEO, E-Commerce, and web development client case studies delivered by Bulbul Bahar. Real #1 Google rankings, traffic metrics, and proven ROI.",
  openGraph: {
    title: "Client Case Studies & SEO Portfolio | Bulbul Bahar",
    description:
      "Explore 250+ verified SEO, E-Commerce, and web development client case studies delivered by Bulbul Bahar. Real #1 Google rankings, traffic metrics, and proven ROI.",
    url: "https://bulbulbahar.cloud/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bulbul Bahar - Portfolio & Client Case Studies",
    description:
      "Proven SEO and digital marketing case studies showing organic ranking growth, lead generation, and revenue expansion.",
    url: "https://bulbulbahar.cloud/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectsData.map((project, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: project.liveUrl || `https://bulbulbahar.cloud/portfolio#${project.id}`,
          keywords: [project.category, "SEO Case Study", "Google Rankings"],
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient projects={projectsData} />
    </>
  );
}
