"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const email = process.env.NEXT_PUBLIC_EMAIL || "hello@example.com";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#F7F7F5]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-sm font-bold tracking-[-0.02em]" aria-label="Ziyoda home">ZIYODA</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-black/65 transition hover:text-black">{label}</a>)}
        </nav>
        <a href={`mailto:${email}`} className="hidden items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:flex">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`overflow-hidden border-t border-black/[0.06] bg-[#F7F7F5] transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto flex max-w-site flex-col px-5 py-4" aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-black/[0.07] py-4 text-lg font-medium">{label}</a>)}
          <a href={`mailto:${email}`} onClick={() => setOpen(false)} className="flex items-center gap-1.5 py-4 text-lg font-medium">Let&apos;s talk <ArrowUpRight size={18} /></a>
        </nav>
      </div>
    </header>
  );
}
