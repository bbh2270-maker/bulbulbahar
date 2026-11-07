import data from "@/data/wp-pages/graphic-design-service.json";
import WpPage, { wpMetadata, type WpPageData } from "@/components/wp/WpPage";

// Content and layout captured from https://bulbulbahar.cloud/graphic-design-service/
const page = data as unknown as WpPageData;

export const metadata = wpMetadata(page);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: page.description,
            provider: { "@type": "Person", name: "Bulbul Bahar", url: "https://bulbulbahar.cloud" },
            areaServed: "Worldwide",
          }),
        }}
      />
      <WpPage data={page} />
    </>
  );
}
