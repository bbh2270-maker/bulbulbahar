import data from "@/data/wp-pages/get-a-free-quote.json";
import WpPage, { wpMetadata, type WpPageData } from "@/components/wp/WpPage";

// Content and layout captured from https://bulbulbahar.cloud/get-a-free-quote/
const page = data as unknown as WpPageData;

export const metadata = wpMetadata(page);

export default function Page() {
  return <WpPage data={page} />;
}
