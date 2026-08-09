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
         * Video hero.
         *
         * The original TanStack build played a Lovable-hosted MP4
         * (/__l5e/assets-v1/<id>/hero-disco.mp4) that only resolves inside
         * Lovable's preview and 404s externally, so no real .mp4 ships with
         * the project. To still deliver genuine motion (not a static poster),
         * the hero is composed of:
         *   1. the poster image (public/hero-disco.jpg) under a slow ken-burns
         *      zoom so the scene breathes;
         *   2. rotating disco light-beams + a hue-shifting colour wash that
         *      make the lights sweep and change colour over time;
         *   3. drifting bokeh sparkles for mirror-ball life;
         *   4. the existing disco-sheen sweep + ink gradient + vignette.
         *
         * To upgrade to true full-motion footage, drop a real /hero-disco.mp4
         * into public/ and replace the <img> below with:
         *   <video src="/hero-disco.mp4" poster="/hero-disco.jpg" autoPlay
         *          muted loop playsInline preload="metadata" aria-hidden="true"
         *          className="hero-kenburns absolute inset-0 h-full w-full
         *                     object-cover opacity-80" />
         * (drop the hero-kenburns class if you don't want the zoom on footage).
         */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-disco.jpg"
            alt=""
            aria-hidden="true"
            className="hero-kenburns absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
          />
          {/* rotating light beams */}
          <div
            aria-hidden="true"
            className="hero-beams absolute inset-0 opacity-60"
          />
          {/* hue-shifting colour wash */}
          <div
            aria-hidden="true"
            className="hero-huewash absolute inset-0"
          />
          {/* drifting mirror-ball sparkles */}
          <div aria-hidden="true" className="absolute inset-0">
            <span className="hero-bokeh" style={{ top: "12%", left: "18%", width: "120px", height: "120px", animationDelay: "0s" }} />
            <span className="hero-bokeh" style={{ top: "26%", left: "62%", width: "90px", height: "90px", animationDelay: "1.4s" }} />
            <span className="hero-bokeh" style={{ top: "44%", left: "38%", width: "70px", height: "70px", animationDelay: "2.8s" }} />
            <span className="hero-bokeh" style={{ top: "18%", left: "82%", width: "60px", height: "60px", animationDelay: "4.1s" }} />
            <span className="hero-bokeh" style={{ top: "56%", left: "12%", width: "80px", height: "80px", animationDelay: "5.3s" }} />
            <span className="hero-bokeh" style={{ top: "8%", left: "46%", width: "100px", height: "100px", animationDelay: "6.7s" }} />
          </div>
          {/* sheen sweep */}
          <div className="disco-sheen absolute inset-0" />
        </div>
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
