import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactWizard } from "@/components/sections/ContactWizard";

export function ContactSection() {
  return (
    <section id="contact" className="px-[6vw] pb-24 pt-5 md:pb-[120px]">
      <Reveal>
        <div className="grid grid-cols-1 gap-10 rounded-[28px] bg-emerald px-6 py-10 sm:px-10 sm:py-14 md:grid-cols-2 md:gap-14 md:px-16 md:py-18">
          <div>
            <h2 className="mb-4.5 font-display text-[clamp(28px,3vw,40px)] font-medium text-ivory">
              Ready to talk through your matter?
            </h2>
            <p className="mb-8 max-w-[42ch] text-[15px] leading-relaxed text-ivory/68">
              Reach out for a confidential consultation. We respond to most enquiries within 24
              hours.
            </p>

            <div className="mb-4.5 flex items-center gap-3.5 text-[14.5px] text-ivory">
              <MapPin size={18} className="shrink-0 text-gold" />
              Mahikeng, North West, South Africa
            </div>
            <div className="mb-4.5 flex items-center gap-3.5 text-[14.5px] text-ivory">
              <Phone size={18} className="shrink-0 text-gold" />
              +27 18 000 0000
            </div>
            <div className="mb-4.5 flex items-center gap-3.5 text-[14.5px] text-ivory">
              <Mail size={18} className="shrink-0 text-gold" />
              info@elrasattorneys.co.za
            </div>
            <div className="flex items-center gap-3.5 text-[14.5px] text-ivory">
              <Clock size={18} className="shrink-0 text-gold" />
              Mon–Fri · 08:00–17:00
            </div>
          </div>

          <ContactWizard />
        </div>
      </Reveal>
    </section>
  );
}
