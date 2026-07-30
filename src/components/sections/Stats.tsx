import { STATS } from "@/data/stats";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 bg-emerald px-[6vw] py-16 md:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`text-center ${i < STATS.length - 1 ? "md:border-r md:border-gold/20" : ""}`}
        >
          <Counter value={s.value} suffix={s.suffix} />
          <div className="mt-2 text-[12.5px] uppercase tracking-wider text-ivory/65">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
