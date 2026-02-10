import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import ContactSection from "@/components/ContactSection";
import ContactStrip from "@/components/ContactStrip";
import HeroSectionOne from "@/components/ui/hero-section-demo-1";
import { getSiteContent, getProjects } from "@/lib/data";

export async function generateMetadata() {
  const content = getSiteContent();
  return {
    title: `Home | ${content.hero.title}`,
    description: content.hero.description,
  };
}

export default function Home() {
  const content = getSiteContent();
  const projects = getProjects();

  return (
    <>
      <HeroSectionOne data={content.hero} />
      <ContactStrip contact={content.contact} />
      <AboutComponent data={content.about} />
      <CatalogueSection data={projects} />
      <ContactSection data={content.contact} />
    </>
  );
}
