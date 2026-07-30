import { Award, Users } from "lucide-react";
import { TEAM } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export default function Team() {
  return (
    <div className="px-[6vw] pb-[120px] pt-[160px]">
      <Reveal>
        <SectionHead eyebrow="Our People" title="The people behind El Ras Attorneys Inc">
          Every matter is handled directly by an admitted attorney — not passed down a chain of
          juniors you've never spoken to.
        </SectionHead>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {TEAM.map((member) => (
          <Reveal key={member.role}>
            <div className="rounded-3xl border border-emerald/[0.08] bg-white p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory text-emerald">
                <Users size={26} strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 font-display text-2xl font-medium text-emerald">
                {member.role}
              </h3>
              <p className="mb-5 text-[14.5px] leading-relaxed text-inkdark/60">{member.bio}</p>

              <ul className="mb-5 flex flex-col gap-2.5">
                {member.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-[13.5px] text-inkdark/60">
                    <Award size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" />
                    {q}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {member.memberships.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-emerald/[0.18] px-3 py-1.5 text-[12px] text-emerald"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-inkdark/40">
        Note: the profile above is placeholder content — swap in the firm's real attorney names,
        photos, admission dates and full qualifications before publishing.
      </p>
    </div>
  );
}
