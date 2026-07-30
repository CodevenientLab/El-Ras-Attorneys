import { AttorneyProfile } from "@/components/sections/AttorneyProfile";
import { Stats } from "@/components/sections/Stats";
import { LegalProcess } from "@/components/sections/LegalProcess";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <div className="pt-[140px]">
      <div className="px-[6vw] pb-16">
        <Reveal>
          <SectionHead
            eyebrow="About the Firm"
            title="A Mahikeng firm built on preparation and plain language"
          >
            El Ras Attorneys Inc was founded to give clients across North West Province the kind
            of representation usually reserved for larger centres — without losing the personal
            attention a smaller firm can offer.
          </SectionHead>
        </Reveal>
      </div>
      <Stats />
      <AttorneyProfile />
      <LegalProcess />
    </div>
  );
}
