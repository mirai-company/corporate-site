import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import PhilosophyTeaser from "@/components/PhilosophyTeaser";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DomainsSection />
      <PhilosophyTeaser />
      <ProcessSection />
      <ProjectsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
