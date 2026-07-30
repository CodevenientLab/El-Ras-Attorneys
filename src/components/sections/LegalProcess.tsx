import { PROCESS_STEPS } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function LegalProcess() {
  return (
    <section id="process" className="px-[6vw] py-[120px]">
      <Reveal>
        <SectionHead eyebrow="How We Work" title="A clear process, from first call to resolution" center />
      </Reveal>

      <div className="relative mx-auto max-w-[760px]">
        <div className="absolute bottom-2.5 left-[23px] top-2.5 w-[1.5px] bg-gradient-to-b from-gold to-gold/15" />
        {PROCESS_STEPS.map((step, i) => (
          <Reveal delay={i * 100} key={step.title} className="relative mb-12 pl-[66px] last:mb-0">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-gold bg-ivory font-display text-[15px] font-semibold text-emerald">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2 mt-1.5 font-display text-xl font-medium text-emerald">{step.title}</h3>
            <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-inkdark/60">{step.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
