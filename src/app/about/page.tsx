import { permanentRedirect } from "next/navigation";

// The original WordPress About page lives at /best-seo-expert-in-bangladesh/
export default function AboutPage() {
  permanentRedirect("/best-seo-expert-in-bangladesh");
}
