import { ProcessSection } from "@/components/ProcessSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function ProcessPage() {
  const content = await getSiteContent();
  return <ProcessSection content={content.process} />;
}
