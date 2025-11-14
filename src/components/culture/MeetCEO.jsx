import React from "react";
import Panel from "./Panel";
import ceoPhoto from "../../assets/ceo.jpeg";

export default function MeetCEO({
  ceoSrc = ceoPhoto,     
  name = "Alex Carter",
  title = "Chief Executive Officer",
}) {
  return (
   <section className="relative overflow-hidden text-white">

      {/* Aurora blobs (soft, layered) */}
      <div className="pointer-events-none absolute -top-40 -left-40 hidden h-[30rem] w-[30rem] -z-20 rounded-full blur-3xl opacity-30 sm:block
                      bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.5),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 hidden h-[36rem] w-[36rem] -z-20 rounded-full blur-3xl opacity-25 sm:block
                      bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.45),transparent_55%)]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 hidden h-[24rem] w-[24rem] -translate-x-1/2 -z-20 rounded-full blur-3xl opacity-20
                      bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-10 2xl:py-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2">
          {/* Copy */}
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.01em] sm:text-3xl lg:text-4xl xl:text-5xl">
              Meet the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CEO
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-white/70 text-[0.95rem] sm:text-base lg:text-lg">
              At Anslation, growth thrives on transparent communication and a
              product mindset. We encourage ownership, speed with precision, and
              a deep care for users—so every release moves the needle.
            </p>

            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3.5 text-white/85 text-[0.95rem] sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Conscious culture that rewards initiative & learning.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Open dialogue, data-informed decisions, and craft excellence.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Building products that people love—together.
              </li>
            </ul>
          </div>

          {/* CEO gradient-card */}
          <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Gradient border wrapper */}
            <div className="rounded-[1.25rem] p-[1px] bg-gradient-to-br from-sky-500/50 via-blue-500/30 to-indigo-500/40 sm:rounded-[1.5rem]">
              <Panel className="rounded-[1.25rem] bg-white/[0.06] backdrop-blur border-0 p-2.5  sm:rounded-[1.5rem] sm:p-3">
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-1.5">
                  <div className="aspect-[5/4] sm:aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={ceoSrc}
                      alt={`${name} portrait`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-white/60">Leadership</p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold">{title}</p>
                    <p className="text-sm text-white/60">{name}</p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-2.5 py-1 text-xs sm:text-sm font-semibold">
                    CEO
                  </span>
                </div>
              </Panel>
            </div>

            {/* Soft glow behind card */}
            <div className="pointer-events-none absolute -inset-4 sm:-inset-6 -z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-blue-500/10 blur-xl sm:blur-2xl" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 sm:mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
