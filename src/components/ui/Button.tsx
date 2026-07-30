import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-wide transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]";

const variants = {
  primary: "bg-emerald text-gold-light hover:shadow-[0_14px_32px_rgba(11,59,46,0.28)]",
  ghost: "bg-transparent text-emerald border border-emerald/25 hover:border-emerald",
  gold: "bg-gold text-emerald-deep hover:-translate-y-0.5",
};

interface CommonProps {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  variant = "primary",
  children,
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
