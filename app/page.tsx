import { HeroSection } from "@/components/HeroSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function HomePage() {
  const content = await getSiteContent();
  return <HeroSection content={content.home} />;
}
