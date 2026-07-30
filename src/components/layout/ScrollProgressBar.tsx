import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const { progress } = useScrollProgress();
  return (
    <div
      className="fixed left-0 top-0 z-[250] h-0.5 bg-gold transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}
