import { useOnScreen } from "@/hooks/useOnScreen";
import { useCounter } from "@/hooks/useCounter";

interface CounterProps {
  value: number;
  suffix: string;
}

export function Counter({ value, suffix }: CounterProps) {
  const { ref, visible } = useOnScreen<HTMLSpanElement>({ threshold: 0.5 });
  const display = useCounter(value, visible);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-gold-light">
      {display}
      {suffix}
    </span>
  );
}
