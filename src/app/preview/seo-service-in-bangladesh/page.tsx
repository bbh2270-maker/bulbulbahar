import type { Metadata } from "next";
import data from "@/data/wp-pages/seo-service-in-bangladesh.json";
import type { WpPageData } from "@/components/wp/WpPage";
import SeoServicePage from "@/components/services/seo/SeoServicePage";

// Design preview — same content as /seo-service-in-bangladesh with the new premium design.
// Not indexed by Google until it replaces the live page.
const page = data as unknown as WpPageData;

export const metadata: Metadata = {
  title: { absolute: `${page.title} (Premium design preview)` },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SeoServicePage data={page} />;
}
