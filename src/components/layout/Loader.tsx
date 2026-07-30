import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale } from "lucide-react";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-emerald"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Scale size={56} strokeWidth={1.4} className="text-gold" />
          </motion.div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/70">
            El Ras Attorneys Inc
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
