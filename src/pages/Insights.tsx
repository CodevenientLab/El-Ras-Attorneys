import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export default function Insights() {
  return (
    <div className="px-[6vw] pb-[120px] pt-[160px]">
      <Reveal>
        <SectionHead eyebrow="Insights" title="Plain-language notes on the law that affects you">
          Short, practical reads on the matters we see most often — no jargon, no billable-hour
          padding.
        </SectionHead>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {INSIGHTS.map((post, i) => (
          <Reveal delay={i * 80} key={post.slug}>
            <article className="group flex h-full cursor-pointer flex-col rounded-2xl border border-emerald/[0.08] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_20px_40px_rgba(11,59,46,0.1)]">
              <span className="mb-4 inline-block w-fit rounded-full bg-ivory px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald">
                {post.category}
              </span>
              <h3 className="mb-2.5 font-display text-lg font-medium leading-snug text-emerald">
                {post.title}
              </h3>
              <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-inkdark/60">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-[12.5px] text-inkdark/45">
                <span>{post.readTime}</span>
                <ArrowUpRight
                  size={16}
                  className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-inkdark/40">
        Note: these are placeholder articles for layout purposes — replace with real posts before
        publishing.
      </p>
    </div>
  );
}
