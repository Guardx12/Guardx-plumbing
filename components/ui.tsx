import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="container-pad">{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";
  const styles: Record<string, string> = {
    primary:
      base +
      " bg-accent-500 text-white shadow-soft hover:bg-accent-600",
    secondary:
      base +
      " bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50",
    ghost: base + " text-slate-900 hover:bg-slate-100",
  };

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200">
      {children}
    </span>
  );
}
