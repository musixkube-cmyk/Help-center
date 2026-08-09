import type { Metadata } from "next";
import { Play, Heart, Repeat2, ArrowUpRight } from "lucide-react";
import { trending, newlyDropped, type Track } from "@/data/releases";
import { megaMenu } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Musicosy — Stream, Sell, Settle. One Platform.",
  description:
    "Musicosy is where listening, catalog, commerce and royalties share one spine. Discover what's trending, hear what just dropped, and run your release from studio to payout.",
  openGraph: {
    title: "Musicosy — Stream, Sell, Settle. One Platform.",
    description:
      "Trending tracks, fresh drops, and the full creator stack: distribution, studio tools, merch, rights and royalties.",
  },
};

function TrackCard({ track, index }: { track: Track; index?: number }) {
  return (
    <div className="group relative bg-card p-4 transition-colors hover:bg-secondary">
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(145deg, oklch(0.35 0.09 ${track.hue}), oklch(0.72 0.18 ${track.hue + 12}))`,
        }}
      >
        <div className="disco-sheen absolute inset-0" />
        {index !== undefined && (
          <span className="absolute left-2 top-1 font-display text-6xl leading-none text-ink/25">
            {index + 1}
          </span>
        )}
        <button
          aria-label={`Play ${track.title}`}
          className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-ink text-ink-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Play className="h-4 w-4 fill-current" />
        </button>
      </div>
      <p className="mt-3 truncate font-semibold">{track.title}</p>
      <p className="truncate text-sm text-muted-foreground">{track.artist}</p>
      <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
        <span>{track.meta}</span>
        <span className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Heart className="h-3.5 w-3.5" />
          <Repeat2 className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        {/*
         * Brand-video hero.
         *
         * The original TanStack build played hero-disco.mp4 — a Lovable-R2-
         * hosted asset referenced only by src/assets/hero-disco.mp4.asset.json
         * (never committed to git, only a JSON pointer). The Lovable project
         * has since been deleted, so the R2-hosted mp4 returns 404 on every
         * CDN pattern and is irretrievable. hero-disco.jpg (the disco ball)
         * was only ever the POSTER for that video, not the brand hero itself.
         *
         * Per the user's screenshot, the actual brand video showed an animated
         * 3D "Musicosy" wordmark on a dark stage. This recreates that brand
         * hero as genuine looping 3D motion: an extruded wordmark that slowly
         * turns on Y (real 3D, always moving), lit by the rotating disco beams
         * + hue wash, with a pulsing accent glow. True motion, no static image.
         *
         * If a real /hero-disco.mp4 is ever dropped into public/, swap the
         * .brand-stage block for:
         *   <video src="/hero-disco.mp4" autoPlay muted loop playsInline
         *          preload="auto" aria-hidden="true"
         *          className="absolute inset-0 h-full w-full object-cover opacity-80" />
         */}
        {/* rotating light beams */}
        <div
          aria-hidden="true"
          className="hero-beams absolute inset-0 opacity-70"
        />
        {/* hue-shifting colour wash */}
        <div
          aria-hidden="true"
          className="hero-huewash absolute inset-0"
        />
        {/* 3D animated brand wordmark */}
        <div
          aria-hidden="true"
          className="brand-stage absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            <div
              className="brand-glow absolute left-1/2 top-1/2 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2"
            />
            <span
              className="brand-wordmark relative block select-none text-[22vw] leading-none sm:text-[20vw] lg:text-[18vw] xl:text-[16rem]"
            >
              <span className="text-accent">M</span>usicosy
            </span>
          </div>
        </div>
        {/* sheen sweep */}
        <div className="disco-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div className="relative flex h-[92vh] min-h-[620px] w-full flex-col justify-end px-6 pb-16 pt-28 lg:px-10">

          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Stream · Sell · Settle
          </p>
          <h1 className="mt-4 max-w-4xl text-6xl leading-[0.88] sm:text-8xl lg:text-9xl">
            The floor is <span className="text-accent">open</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">
            One platform where fans listen and buy, creators ship and get paid, and every
            play settles back to the people who made it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-none bg-accent uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <NavLink href="/discover">Start listening</NavLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-ink-foreground/40 bg-transparent uppercase tracking-widest text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
              asChild
            >
              <NavLink href="/for-creators">Upload your music</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-border bg-stone-deep py-2">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Distribution</span>
              <span className="text-accent">·</span>
              <span>Studio &amp; AI</span>
              <span className="text-accent">·</span>
              <span>Merch &amp; ticketing</span>
              <span className="text-accent">·</span>
              <span>Rights &amp; sync</span>
              <span className="text-accent">·</span>
              <span>Royalties &amp; payouts</span>
              <span className="text-accent">·</span>
              <span>Podcast hosting</span>
              <span className="text-accent">·</span>
              <span>Adnote targeting</span>
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Trending */}
      <section className="w-full px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl">Trending this week</h2>
            <p className="mt-2 text-muted-foreground">
              Ranked by real plays, reposts and saves — not playlist politics.
            </p>
          </div>
          <NavLink
            href="/discover"
            className="hidden items-center gap-1 text-xs uppercase tracking-widest text-accent sm:flex"
          >
            See all <ArrowUpRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8">
          {trending.map((t, i) => (
            <TrackCard key={t.title} track={t} index={i} />
          ))}
        </div>
      </section>

      {/* Newly dropped */}
      <section className="border-y border-border bg-secondary/60">
        <div className="w-full px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl sm:text-5xl">Newly dropped</h2>
              <p className="mt-2 text-muted-foreground">
                Straight off distribution — releases published in the last 72 hours.
              </p>
            </div>
            <NavLink
              href="/discover"
              className="hidden items-center gap-1 text-xs uppercase tracking-widest text-accent sm:flex"
            >
              See all <ArrowUpRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8">
            {newlyDropped.map((t) => (
              <TrackCard key={t.title} track={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Routes into the platform */}
      <section className="w-full px-6 lg:px-10 py-20">
        <h2 className="text-4xl sm:text-5xl">Pick your lane</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Fans, creators, labels and brands all work off the same catalog, the same
          audience and the same ledger.
        </p>
        <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {megaMenu
            .filter((n) => n.path !== "/discover")
            .map((node) => (
              <NavLink
                key={node.path}
                href={node.path}
                className="group flex flex-col justify-between bg-card p-7 transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <div>
                  <h3 className="font-display text-3xl tracking-wide">{node.label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-ink-foreground/70">
                    {node.blurb}
                  </p>
                </div>
                <span className="mt-8 flex items-center gap-1 text-xs uppercase tracking-widest text-accent">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </NavLink>
            ))}
        </div>
      </section>
    </main>
  );
}
