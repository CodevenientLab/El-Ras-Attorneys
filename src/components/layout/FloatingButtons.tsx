import { ArrowUp, MessageCircle } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "27180000000"; // TODO: replace with the firm's real WhatsApp number

export function FloatingButtons() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1"
      >
        <MessageCircle size={20} />
      </a>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-gold-light shadow-lg transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1",
          progress > 15 ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
