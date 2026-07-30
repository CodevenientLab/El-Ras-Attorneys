import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroScene } from "@/components/three/HeroScene";

const HEADLINE = "Justice, Practised with Precision";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const spans = headingRef.current.querySelectorAll("span span");
    gsap.fromTo(
      spans,
      { yPercent: 115 },
      {
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.09,
        delay: 0.15,
      }
    );
  }, []);

  const words = HEADLINE.split(" ");

  return (
    <header id="home" className="relative min-h-screen overflow-hidden bg-ivory px-[6vw] pb-20 pt-[140px]">
      {/* gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(11,59,46,0.16), transparent 60%)," +
            "radial-gradient(ellipse 50% 45% at 85% 15%, rgba(199,166,90,0.22), transparent 60%)," +
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(11,59,46,0.10), transparent 65%)",
        }}
      />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply" />

      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="animate-floaty pointer-events-none absolute rounded-full bg-gold opacity-50"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            left: `${8 + i * 9}%`,
            top: `${15 + (i % 5) * 15}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${7 + (i % 4)}s`,
          }}
        />
      ))}

      <div className="relative z-[2] grid min-h-[70vh] grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald before:h-px before:w-6.5 before:bg-gold before:content-['']">
            Attorneys · Mahikeng
          </div>

          <h1
            ref={headingRef}
            className="mb-6.5 font-display text-[clamp(40px,5.6vw,76px)] font-medium leading-[1.04] text-emerald"
          >
            {words.map((w, i) => (
              <span className="word" key={i}>
                <span>{w}</span>
              </span>
            ))}
          </h1>

          <p className="mb-9 max-w-[46ch] text-[17px] leading-relaxed text-inkdark/60">
            El Ras Attorneys Inc represents individuals and businesses across North West Province
            with the discretion, clarity and precision every matter deserves — from first
            consultation to final resolution.
          </p>

          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-4 text-sm font-bold text-gold-light transition-shadow hover:shadow-[0_14px_32px_rgba(11,59,46,0.28)]"
              >
                Book a Consultation <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/practice-areas"
                className="inline-flex items-center rounded-full border border-emerald/25 px-7 py-4 text-sm font-bold text-emerald hover:border-emerald"
              >
                Explore Practice Areas
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[380px] md:max-w-none">
          <div className="absolute inset-[6%] rounded-full border border-gold/35" />
          <div className="absolute inset-[16%] rounded-full border border-emerald/15" />
          <HeroScene />
        </div>
      </div>
    </header>
  );
}
