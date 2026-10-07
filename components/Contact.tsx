import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const email =
    process.env.NEXT_PUBLIC_EMAIL || "ziyodabekmuradova@gmail.com";
  const telegram = "https://t.me/Ziyoda_Usman";
  const portfolio =
    process.env.NEXT_PUBLIC_FULL_PORTFOLIO_URL || "https://www.figma.com/";

  return (
    <section
      id="contact"
      className="section-anchor mx-auto max-w-site px-5 py-24 md:px-8 md:py-36"
    >
      <Reveal>
        <div className="rounded-[32px] bg-[#dfe7ff] p-7 md:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
            Contact
          </p>

          <h2 className="editorial-title mt-5 max-w-4xl text-5xl font-semibold md:text-7xl">
            Have an idea?
            <br />
            Let&apos;s build it together.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">
            Whether you&apos;re starting a new product or improving an existing
            one, I&apos;d love to hear about it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>

            <a
              href={portfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/50 px-5 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              View full portfolio <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-6 border-t border-black/10 pt-6 text-sm">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-black/60 hover:text-black"
            >
              <Mail size={16} /> {email}
            </a>

            <a
              href={telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-black/60 hover:text-black"
            >
              <Send size={16} /> @Ziyoda_Usman
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}