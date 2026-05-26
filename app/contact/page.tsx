import { ContactSection } from "@/components/ContactSection";
import { getSiteContent } from "@/lib/siteContent";

export default async function ContactPage() {
  const content = await getSiteContent();
  return <ContactSection content={content.contact} />;
}
