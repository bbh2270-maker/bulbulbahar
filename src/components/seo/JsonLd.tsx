import React from "react";
import { siteConfig } from "@/data/site-config";
import { faqsData } from "@/data/faqs-data";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: siteConfig.author.alias,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/bulbul-bahar.jpg`,
    jobTitle: "Principal SEO Specialist & Digital Growth Architect",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
      siteConfig.socials.youtube,
      siteConfig.socials.pinterest,
    ],
    knowsAbout: [
      "Search Engine Optimization",
      "Technical SEO",
      "Local SEO",
      "Content Strategy",
      "E-Commerce Growth",
      "YouTube Video SEO",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bulbul Bahar - Best SEO Expert in Bangladesh",
    image: `${siteConfig.url}/images/bulbul-bahar.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addresses[0].street,
      addressLocality: siteConfig.addresses[0].city,
      postalCode: siteConfig.addresses[0].postalCode,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7509,
      longitude: 90.3871,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "96",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
