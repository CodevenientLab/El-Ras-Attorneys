import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}

export function SectionHead({ eyebrow, title, children, center, className }: SectionHeadProps) {
  return (
    <div className={cn("mb-16 max-w-[640px]", center && "mx-auto text-center", className)}>
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold before:h-px before:w-6.5 before:bg-gold before:content-['']",
          center && "before:hidden"
        )}
      >
        {eyebrow}
      </div>
      <h2 className="mb-4 font-display text-[clamp(30px,3.4vw,48px)] font-medium leading-tight text-emerald">
        {title}
      </h2>
      {children && <p className="text-base leading-relaxed text-inkdark/60">{children}</p>}
    </div>
  );
}
