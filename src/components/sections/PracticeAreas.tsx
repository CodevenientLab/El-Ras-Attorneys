import { ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";
import { PracticeIcon } from "@/components/ui/PracticeIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

interface PracticeAreasProps {
  compact?: boolean;
}

export function PracticeAreas({ compact }: PracticeAreasProps) {
  return (
    <section id="practice" className="px-[6vw] py-[120px]">
      {!compact && (
        <Reveal>
          <SectionHead eyebrow="What We Do" title="Practice areas built around real North West matters">
            Six areas of focused practice — chosen because they're what clients in Mahikeng and the
            surrounding region actually need most.
          </SectionHead>
        </Reveal>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRACTICE_AREAS.map((p, i) => (
          <Reveal delay={i * 80} key={p.slug}>
            <article className="group relative overflow-hidden rounded-[20px] border border-emerald/[0.08] bg-white p-8 transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-gold hover:shadow-[0_24px_48px_rgba(11,59,46,0.12)]">
              <div className="mb-5.5 flex h-13 w-13 items-center justify-center rounded-[14px] bg-ivory text-emerald transition-colors duration-300 group-hover:bg-emerald group-hover:text-gold-light">
                <PracticeIcon name={p.icon} size={24} strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 font-display text-xl font-medium text-emerald">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-inkdark/60">{p.blurb}</p>
              <p className="max-h-0 overflow-hidden text-[13.5px] leading-relaxed text-inkdark/60 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
                {p.detail}
              </p>
              <div className="mt-4.5 flex translate-x-[-6px] items-center gap-1.5 text-[12.5px] font-bold text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Learn more <ArrowUpRight size={14} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
