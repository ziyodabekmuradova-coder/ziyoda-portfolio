"use client";

import { useState } from "react";

const tones = {
  light: "bg-[#e8ebe5] text-black",
  dark: "bg-[#181818] text-white",
  blue: "bg-[#e5ecff] text-[#17316e]",
  warm: "bg-[#eee5dc] text-[#3b2920]",
};

export function ProjectVisual({ src, title, tone, compact = false }: { src: string; title: string; tone: keyof typeof tones; compact?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative h-full min-h-[${compact ? "250px" : "430px"}] overflow-hidden ${tones[tone]}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`${title} project preview`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" onError={() => setFailed(true)} />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-8">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-current/10" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-current/10" />
          <div className="relative w-full max-w-[420px] rounded-[28px] border border-current/10 bg-white/25 p-6 backdrop-blur-[2px]">
            <div className="mb-12 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] opacity-60"><span>Project preview</span><span>Replace cover.jpg</span></div>
            <div className="h-3 w-2/3 rounded-full bg-current/15" />
            <div className="mt-3 h-3 w-1/2 rounded-full bg-current/10" />
            <div className="mt-8 grid grid-cols-3 gap-2"><span className="h-20 rounded-2xl bg-current/10" /><span className="h-20 rounded-2xl bg-current/15" /><span className="h-20 rounded-2xl bg-current/10" /></div>
            <div className="mt-8 text-3xl font-semibold tracking-[-0.04em]">{title}</div>
          </div>
        </div>
      )}
    </div>
  );
}
