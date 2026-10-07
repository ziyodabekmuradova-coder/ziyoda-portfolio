import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const testimonials = [
    {
      text: "Ziyoda quickly understood what we needed and turned our ideas into clear, modern designs. She was always open to feedback and easy to work with.",
      author: "WeDrive Manager",
    },
    {
      text: "Ziyoda is creative, responsible and pays great attention to detail. She always brings fresh ideas and finds clear visual solutions.",
      author: "Ziyoly Team",
    },
    {
      text: "Working with Ziyoda was a great experience. She understood our vision and turned it into a clean and engaging design.",
      author: "Client",
    },
  ];

  return (
    <section className="border-y border-black/10 bg-[#111111] text-white">
      <div className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            Testimonials
          </p>
          <h2 className="editorial-title text-5xl font-semibold md:text-7xl">
            What people say
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={(index + 1) * 60}>
              <div className="min-h-[270px] rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                <Quote
                  size={20}
                  className="text-white/35"
                  aria-hidden="true"
                />

                <p className="mt-12 text-lg leading-7 text-white/75">
                  “{testimonial.text}”
                </p>

                <div className="mt-8 text-xs uppercase tracking-[0.14em] text-white/35">
                  — {testimonial.author}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}