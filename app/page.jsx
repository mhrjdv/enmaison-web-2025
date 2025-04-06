import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSectionOne from "@/components/ui/hero-section-demo-1";

export const metadata = {
  title: "Home | Interior Design Portfolio",
  description: "Discover beautiful interior design solutions for your home",
};

export default function Home() {
  return (
    <>
      <HeroSectionOne />
      {/* <CompanySection /> */}
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
