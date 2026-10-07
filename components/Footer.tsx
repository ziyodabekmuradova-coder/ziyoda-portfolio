import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "hello@example.com";
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM || "https://t.me/ziyodabekmuradova";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/";
  return <footer className="border-t border-black/10"><div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-10 md:px-8 md:py-12 lg:flex-row lg:items-end lg:justify-between"><div><div className="text-sm font-bold tracking-[-0.02em]">Ziyoda Usman</div><div className="mt-2 text-sm text-black/45">Product Designer · UI/UX Designer</div><div className="mt-7 text-xs text-black/35">© 2026 Ziyoda Usman</div></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm"><a href={telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-black/55 hover:text-black">Telegram <ArrowUpRight size={14} /></a><a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-black/55 hover:text-black">LinkedIn <ArrowUpRight size={14} /></a><a href={`mailto:${email}`} className="inline-flex items-center gap-1 text-black/55 hover:text-black">Email <ArrowUpRight size={14} /></a></div></div></footer>;
}
