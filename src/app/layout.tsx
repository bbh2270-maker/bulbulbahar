import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Bulbul Bahar",
  },
  description: siteConfig.description,
  keywords: [
    "Best SEO Expert in Bangladesh",
    "SEO Specialist bd",
    "Bulbul Bahar",
    "SEO Service in Bangladesh",
    "Local SEO Expert Dhaka",
    "Creative Niloy",
    "Technical SEO Specialist",
    "E-commerce SEO BD",
    "YouTube SEO Specialist",
    "SEO Training in Bangladesh",
  ],
  authors: [{ name: "Bulbul Bahar", url: siteConfig.url }],
  creator: "Bulbul Bahar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Bulbul Bahar - #1 SEO Specialist Bangladesh",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Bulbul Bahar - Best SEO Expert in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@bulbulbahar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white selection:bg-[#CB3522] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
