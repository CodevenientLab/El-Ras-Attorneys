import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-[6vw] py-[120px]">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <SectionHead eyebrow="Questions" title="Frequently asked" className="mx-auto mb-10" />
        </Reveal>

        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="cursor-pointer border-b border-emerald/[0.12] py-5.5"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div className="flex items-center justify-between font-display text-lg text-emerald">
                {f.q}
                <ChevronDown
                  size={18}
                  className={cn("shrink-0 text-gold transition-transform duration-300", isOpen && "rotate-180")}
                />
              </div>
              <div
                className={cn(
                  "overflow-hidden text-[14.5px] leading-relaxed text-inkdark/60 transition-all duration-300",
                  isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
