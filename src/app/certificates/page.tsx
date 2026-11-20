import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Certificates | Vishwateja Gorumanthula",
  description: "Licenses and certifications earned by Vishwateja Gorumanthula.",
};

export default function Certificates() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-zinc-900 focus:p-3 focus:text-white" href="#certificates">Skip to content</a>
      <SiteHeader certificates />
      <main id="certificates" className="mx-auto min-h-[calc(100svh-76px)] max-w-7xl px-5 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Continuous learning</p>
        <h1 className="section-title mt-4">Licenses &amp; Certifications</h1>
        <article className="responsibility-card mt-10 max-w-3xl sm:p-8" aria-labelledby="ai-aware-title">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 text-amber-400" aria-hidden="true">
              <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                <circle cx="16" cy="12" r="8" />
                <path d="m11 18-2 11 7-4 7 4-2-11M12 12l3 3 5-6" />
              </svg>
            </span>
            <div className="min-w-0">
              <h2 id="ai-aware-title" className="text-xl font-bold leading-8 text-white sm:text-2xl">AI Aware Badge - AI For All</h2>
              <p className="mt-2 text-base font-medium text-zinc-300">CBSE and Intel</p>
              <p className="mt-3 text-sm text-zinc-400">Issued <time dateTime="2025-08">August 2025</time></p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
