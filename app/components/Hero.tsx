import Link from "next/link";
import Reveal from "./Reveal";
import NeuralCanvas from "./NeuralCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper-2 to-paper pt-40 pb-28 min-h-[560px]">
      <NeuralCanvas />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h1 className="text-ink text-[2.6rem] md:text-[4rem] leading-[1.1] font-semibold">
            Your hub for code, projects, and big ideas.
          </h1>
        </Reveal>
        <Reveal delay={0.12} className="mt-9">
          <Link
            href="/class-info/"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-ink text-white font-semibold hover:-translate-y-0.5 transition-transform"
          >
            View class info
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
