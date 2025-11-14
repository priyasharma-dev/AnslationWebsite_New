import React from "react";
import anupamPhoto from "../../assets/AnupamJain.jpeg";

export default function EmployeeWellbeing({
  title = "Employee Wellbeing",
  intro = "We craft an inclusive, energising workplace that sparks creativity and supports real-life balance. From wellness days and learning budgets to team offsites, we optimise for a mindful pace and lasting impact.",
  person = { name: "Anupam Jain", role: "Full Stack Developer" },
  story = "At Anslation I own the stack end-to-end—from API contracts to UI performance. We ship in short cycles, learn from real usage, and keep quality high with strong reviews and good tooling. It’s the right balance of speed, craft, and user impact.",
  // ✅ correct default value syntax (no JSX here)
  imageSrc = anupamPhoto,
}) {
  return (
   <section className="relative overflow-hidden text-white">
     
      {/* Soft auroras */}
      <div className="pointer-events-none absolute -top-28 -left-28 -z-20 h-[22rem] w-[22rem] sm:-top-40 sm:-left-36 sm:h-[30rem] sm:w-[30rem] lg:-top-48 lg:-left-40 lg:h-[42rem] lg:w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.40),transparent_55%)] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_55%)] blur-3xl opacity-40" />

      {/* Animated geometric motif (triangles) */}
      <div className="pointer-events-none absolute left-5 top-6 sm:left-10 sm:top-10 md:left-16 md:top-16 motion-safe:block hidden">
        <div style={{ animation: "drift 14s ease-in-out infinite" }} className="relative">
          <svg width="96" height="80" viewBox="0 0 120 100" className="opacity-80" style={{ animation: "orbit 18s linear infinite" }}>
            <polygon points="60,5 115,90 5,90" fill="transparent" stroke="rgba(255,255,255,.55)" strokeWidth="3" />
          </svg>
          <svg width="56" height="48" viewBox="0 0 64 56" className="absolute left-8 top-4 drop-shadow" style={{ animation: "float 6s ease-in-out infinite, spin 16s linear infinite" }}>
            <polygon points="32,2 62,54 2,54" fill="#F59E0B" stroke="rgba(255,255,255,.7)" strokeWidth="3" />
          </svg>
          <div className="absolute -right-2 top-12 h-2 w-2 rounded-full bg-sky-300" style={{ animation: "blink 2.2s ease-in-out infinite" }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/70 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
            Culture
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-20 sm:w-24 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 px-1">{intro}</p>
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12">
          {/* Story */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-amber-300">{person.name}</h3>
              <p className="mt-2 text-sm text-white/60">{person.role}</p>
              <p className="mt-4 text-white/80">{story}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Wellness Days", "Learning Budget", "Hybrid & Remote", "Team Offsites"].map((x) => (
                  <span key={x} className="rounded-full border border-white/10 bg-gradient-to-r from-blue-600/20 to-sky-500/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 hidden md:block text-left text-[36px] lg:text-[52px] font-black leading-none tracking-tight text-white/[0.09]">
            <div
    aria-hidden
    className="absolute -inset-3 -z-10 rounded-xl
               bg-[radial-gradient(120%_80%_at_0%_50%,rgba(56,189,248,0.18),transparent_60%)]
               drop-shadow-[0_0_18px_rgba(56,189,248,0.28)]
               blur-xl"
  />
              E M P L O Y E E
              <br />
              W E L L B E I N G
            </div>
          </div>

          {/* Image card */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl sm:max-w-2xl">
              <div className="pointer-events-none absolute -inset-3 sm:-inset-4 md:-inset-5 lg:-inset-6 -z-10 rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] bg-blue-500/10 blur-xl sm:blur-xl md:blur-2xl" />
              <div className="rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] bg-gradient-to-br from-sky-500/40 via-blue-600/25 to-cyan-400/35 p-[1px] shadow-[0_18px_46px_-20px_rgba(29,78,216,0.55)] sm:shadow-[0_25px_70px_-25px_rgba(29,78,216,0.55)]">
                <div className="rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] border border-white/10 bg-white/[0.06] p-2 sm:p-3 backdrop-blur">
                  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-1 sm:p-1.5 md:p-2">
                    <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg">
                      <img
                        src={imageSrc}
                        alt={`${person.name} — Anslation`}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-0.5 sm:px-1">
                    <div className="text-xs sm:text-sm">
                      <div className="font-semibold">Mindful pace, lasting impact</div>
                      <div className="text-white/60">Rituals for focus, community, growth</div>
                    </div>
                    <span className="self-start sm:self-auto rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-2.5 py-1 text-[10px] sm:text-xs font-semibold">
                      Wellbeing
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative shard */}
              <div
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rotate-12 opacity-50"
                style={{
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  background: "linear-gradient(135deg, rgba(125,211,252,.6), rgba(14,165,233,.3))",
                  filter: "blur(1px)",
                  animation: "bob 7s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-10 sm:mt-12 h-px w-full"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
