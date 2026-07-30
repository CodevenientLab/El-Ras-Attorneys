export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Matters Handled" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years in Practice" },
  { value: 24, suffix: "hr", label: "Response Time" },
];
