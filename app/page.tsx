import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { InstagramProjects } from '@/components/InstagramProjects';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[1320px] flex-col gap-10 px-4 pb-20 pt-28 md:px-8">
        <HeroSection />
        <FeaturedProjects />
        <ProjectsSection />
        <InstagramProjects />
        <AboutSection />
        <ExperienceSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
