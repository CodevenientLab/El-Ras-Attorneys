import { ContactSection } from "@/components/sections/ContactSection";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <div className="pt-[140px]">
      <div className="px-[6vw] pb-10">
        <Reveal>
          <SectionHead eyebrow="Get in Touch" title="Let's talk about your matter">
            Fill in a few details and we'll come back to you within 24 hours — no obligation, no
            pressure.
          </SectionHead>
        </Reveal>
      </div>
      <ContactSection />
    </div>
  );
}
