import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { AttorneyProfile } from "@/components/sections/AttorneyProfile";
import { LegalProcess } from "@/components/sections/LegalProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PracticeAreas />
      <AttorneyProfile />
      <LegalProcess />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
