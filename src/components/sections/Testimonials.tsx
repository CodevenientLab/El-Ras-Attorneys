import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-white py-[120px]">
      <div className="px-[6vw]">
        <Reveal>
          <SectionHead eyebrow="Client Voices" title="Trusted by clients across the region" />
        </Reveal>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="animate-scrollX flex w-max gap-5 hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 rounded-[18px] border border-emerald/[0.08] bg-white p-7"
            >
              <div className="mb-3.5 flex gap-0.5 text-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-4 text-[14.5px] leading-relaxed text-inkdark">"{t.quote}"</p>
              <div className="text-[12.5px] font-semibold text-inkdark/60">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
