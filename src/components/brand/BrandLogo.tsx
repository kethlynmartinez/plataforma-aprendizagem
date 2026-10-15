import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
}

/** Símbolo da plataforma: um "L" com um ponto de luz. */
export const BrandMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("h-9 w-9 shrink-0", className)}>
    <defs>
      <linearGradient id="brand-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7C66FF" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="url(#brand-mark)" />
    <path d="M24 18v26h18" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="42" cy="22" r="5" fill="#fff" />
  </svg>
);

/** Logo da plataforma: não muda com o tema da empresa cliente. */
export const BrandLogo = ({ variant = "dark", className, compact }: Props) => (
  <span className={cn("inline-flex items-center gap-2.5", className)} aria-label={BRAND.name}>
    <BrandMark />
    {!compact && (
      <span className={cn("font-sora text-xl font-bold tracking-tight", variant === "light" ? "text-white" : "text-ink")}>
        {BRAND.name}
        <span className="bg-gradient-to-r from-[#8C7AFF] to-[#60A5FA] bg-clip-text text-transparent">.</span>
      </span>
    )}
  </span>
);
