import type { Metadata } from "next";
import { NavLink } from "@/components/site/nav-link";

export const metadata: Metadata = {
  title: "adnote — Self-serve advertising on Musicosy",
  description:
    "adnote is Musicosy's self-serve ad platform. Targeting built on real listening behavior. Open adnote to get started.",
  openGraph: {
    title: "adnote — Self-serve advertising on Musicosy",
    description:
      "adnote is Musicosy's self-serve ad platform. Targeting built on real listening behavior.",
  },
};

const POINTS = [
  {
    title: "Targeting",
    body: "Reach listeners by genre, behavior and listening context — not just demographics.",
  },
  {
    title: "Formats",
    body: "Audio, video and in-feed placements that match the way people already use Musicosy.",
  },
  {
    title: "Reporting",
    body: "Real-time dashboards on reach, frequency and conversion — exportable to your stack.",
  },
];

export default function AdvertisePage() {
  return (
    <main className="w-full bg-white">
      {/* Gate hero */}
      <section className="w-full px-6 lg:px-10 pt-24 pb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          adnote
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
          Advertising, built on listening.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Self-serve ad campaigns built on real listening behavior. Set your
          budget, pick your audience, and launch in minutes.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <NavLink
            href="/advertising"
            className="inline-flex items-center bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-90"
          >
            Open adnote
          </NavLink>
          <NavLink
            href="/advertising"
            className="text-sm font-semibold uppercase tracking-widest text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Read the Ads Help Center
          </NavLink>
        </div>
      </section>

      {/* Key points — clean text columns, no icons */}
      <section className="w-full border-t border-border px-6 lg:px-10 py-16">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title}>
              <h2 className="font-display text-xl tracking-wide text-foreground">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full border-t border-border px-6 lg:px-10 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl tracking-wide text-foreground">
            Ready to launch?
          </h2>
          <NavLink
            href="/advertising"
            className="inline-flex items-center bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-90"
          >
            Open adnote
          </NavLink>
        </div>
      </section>
    </main>
  );
}
