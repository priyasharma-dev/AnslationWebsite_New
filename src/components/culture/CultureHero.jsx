import React from "react";
import Panel from "./Panel";
import heroCollage from "../../assets/cultureHero.jpeg";
import GradientButton from "../ui/GradientButton"; 

export default function CultureHero({
  onJoinClick = () => (window.location.href = "/career"),
}) {
  return (
     <section className="relative text-white">
      {/* soft blue glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: copy */}
          <div>
            <p className="text-blue-300/90 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Our Culture
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em] max-w-2xl">
              Empowering innovators, bound by{" "}
              <span className="text-blue-400">curiosity</span>,{" "}
              <span className="text-blue-400">creativity</span> &{" "}
              <span className="text-blue-400">care</span>.
            </h1>
            <p className="mt-4 max-w-xl text-white/80 text-base sm:text-lg">
              We build together in a space that values openness, craftsmanship,
              and momentum—so great ideas become great products.
            </p>
            <div className="mt-8">
              <GradientButton onClick={onJoinClick} className="w-full sm:w-auto px-5 py-3">
    <span className="flex items-center justify-center sm:justify-start gap-2">
      Join Our Team
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  </GradientButton>
            </div>
          </div>

          {/* Right: collage image inside a subtle Panel glow */}
          <div className="relative max-w-md sm:max-w-lg md:max-w-none mx-auto md:mx-0 w-full">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/10 blur-xl" />
            <Panel className="p-1.5 sm:p-2 md:p-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src={heroCollage}
                alt="Anslation team collage"
                className="w-full h-auto rounded-2xl border border-white/10 object-cover shadow-2xl"
                 loading="eager"
                decoding="async"
              />
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
