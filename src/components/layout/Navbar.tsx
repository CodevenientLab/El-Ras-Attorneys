import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Scale } from "lucide-react";
import { NAV_LINKS } from "@/data/navLinks";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Magnetic } from "@/components/ui/Magnetic";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed left-1/2 top-4 z-[100] w-[92%] max-w-[1100px] -translate-x-1/2 rounded-full border border-gold/25 backdrop-blur-md transition-all duration-500",
          scrolled
            ? "top-2.5 bg-ivory/85 px-5 py-2.5 shadow-[0_10px_30px_rgba(11,59,46,0.1)]"
            : "bg-ivory/55 px-7 py-4.5"
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-emerald">
            <Scale size={22} strokeWidth={1.6} className="text-gold" />
            El Ras Attorneys
          </Link>

          <ul className="hidden gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="group relative text-sm font-semibold text-emerald"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <Magnetic className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-full bg-emerald px-5.5 py-2.5 text-[13px] font-bold tracking-wide text-gold-light transition-colors hover:bg-emerald-deep"
            >
              Book Consultation
            </Link>
          </Magnetic>

          <button
            aria-label="Open menu"
            className="text-emerald md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
