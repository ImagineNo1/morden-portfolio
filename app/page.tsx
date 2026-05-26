import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InstagramProjects } from '@/components/InstagramProjects';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage(){
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <ProjectsSection />
      <InstagramProjects />
      <AboutSection />
      <ExperienceSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}
