import { Award, Clock, Scale, Users } from "lucide-react";
import { TEAM } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";

export function AttorneyProfile() {
  const attorney = TEAM[0];

  return (
    <section id="about" className="bg-white px-[6vw] py-[120px]">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-emerald via-emerald-deep to-[#051911]">
            <div className="noise-overlay absolute inset-0 opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center text-gold/50">
              <Scale size={90} strokeWidth={1} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold before:h-px before:w-6.5 before:bg-gold before:content-['']">
            Why Choose Us
          </div>
          <h2 className="mb-4 font-display text-[clamp(28px,3vw,40px)] font-medium text-emerald">
            Local knowledge, professional standards
          </h2>
          <p className="max-w-[50ch] text-[15px] leading-relaxed text-inkdark/60">
            El Ras Attorneys Inc is built on the idea that clients deserve both — a firm rooted in
            Mahikeng that understands the local courts and community, held to the same standards of
            preparation and communication you'd expect anywhere. {attorney.bio}
          </p>

          <ul className="mt-7 flex flex-col gap-4.5">
            {attorney.qualifications.map((q) => (
              <li key={q} className="flex items-start gap-3.5 text-[14.5px] text-inkdark/60">
                <Award size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" />
                {q}
              </li>
            ))}
            <li className="flex items-start gap-3.5 text-[14.5px] text-inkdark/60">
              <Clock size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" />
              Same-week consultations, most enquiries answered within 24 hours
            </li>
            <li className="flex items-start gap-3.5 text-[14.5px] text-inkdark/60">
              <Users size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" />
              Plain-language advice — no unexplained legal jargon
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {attorney.memberships.map((m) => (
              <span
                key={m}
                className="rounded-full border border-emerald/[0.18] px-3.5 py-1.5 text-[12.5px] text-emerald"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
