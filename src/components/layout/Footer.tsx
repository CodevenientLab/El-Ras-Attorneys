import { Link } from "react-router-dom";
import { ArrowUpRight, Scale } from "lucide-react";
import { NAV_LINKS } from "@/data/navLinks";
import { PRACTICE_AREAS } from "@/data/practiceAreas";

export function Footer() {
  return (
    <footer className="bg-inkdark px-[6vw] pb-7 pt-18 text-ivory/65">
      <div className="grid grid-cols-1 gap-10 border-b border-ivory/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5 font-display text-lg text-ivory">
            <Scale size={22} strokeWidth={1.6} />
            El Ras Attorneys
          </div>
          <p className="max-w-[34ch] text-[13.5px] leading-relaxed">
            A Mahikeng law firm serving individuals and businesses across North West Province.
          </p>
          <form
            className="mt-3.5 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-lg border border-ivory/15 bg-ivory/[0.06] px-3 py-2.5 text-[13px] text-ivory outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-lg bg-gold px-3.5 text-emerald-deep"
            >
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>

        <div>
          <h4 className="mb-4.5 text-[13px] uppercase tracking-wider text-ivory">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4.5 text-[13px] uppercase tracking-wider text-ivory">Practice Areas</h4>
          <ul className="flex flex-col gap-2.5">
            {PRACTICE_AREAS.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link to="/practice-areas" className="text-sm hover:text-gold">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4.5 text-[13px] uppercase tracking-wider text-ivory">Office Hours</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>Mon – Fri: 08:00 – 17:00</li>
            <li>Sat: By appointment</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-xs">
        <span>© {new Date().getFullYear()} El Ras Attorneys Inc. All rights reserved.</span>
        <span>Designed by Codevenient Consulting</span>
      </div>
    </footer>
  );
}
