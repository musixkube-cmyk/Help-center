import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  trending,
  newlyDropped,
  showsToTry,
  discoverPodcasts,
  popularArtists,
  recommendedForYou,
  newSingles,
  albumTrendingPlaylists,
} from "@/data/releases";
import { megaMenu } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { Hero } from "@/components/site/hero";
import { SectionCarousel } from "@/components/site/section-carousel";

export const metadata: Metadata = {
  title: "Musicosy — One Platform.",
  description:
    "Musicosy is where listening, catalog, commerce and royalties share one spine. Discover what's trending, hear what just dropped, and run your release from studio to payout.",
  openGraph: {
    title: "Musicosy — One Platform.",
    description:
      "Trending tracks, fresh drops, and the full creator stack: distribution, studio tools, merch, rights and royalties.",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Trending this week */}
      <SectionCarousel
        title="Trending this week"
        items={trending.map((t) => ({
          title: t.title,
          subtitle: t.artist,
          meta: t.meta,
          hue: t.hue,
        }))}
      />

      {/* Newly dropped */}
      <SectionCarousel
        title="Newly dropped"
        items={newlyDropped.map((t) => ({
          title: t.title,
          subtitle: t.artist,
          meta: t.meta,
          hue: t.hue,
        }))}
      />

      {/* Shows to try */}
      <SectionCarousel
        title="Shows to try"
        items={showsToTry.map((s) => ({
          title: s.title,
          subtitle: s.artist,
          meta: s.meta,
          hue: s.hue,
        }))}
      />

      {/* Discover podcast */}
      <SectionCarousel
        title="Discover podcast"
        items={discoverPodcasts.map((p) => ({
          title: p.title,
          subtitle: p.artist,
          meta: p.meta,
          hue: p.hue,
        }))}
      />

      {/* Popular artist */}
      <SectionCarousel
        title="Popular artist"
        items={popularArtists.map((a) => ({
          title: a.name,
          subtitle: a.genre,
          meta: a.meta,
          hue: a.hue,
        }))}
      />

      {/* Recommended for you */}
      <SectionCarousel
        title="Recommended for you"
        items={recommendedForYou.map((r) => ({
          title: r.title,
          subtitle: r.artist,
          meta: r.meta,
          hue: r.hue,
        }))}
      />

      {/* New Single releases */}
      <SectionCarousel
        title="New Single releases"
        items={newSingles.map((s) => ({
          title: s.title,
          subtitle: s.artist,
          meta: s.meta,
          hue: s.hue,
        }))}
      />

      {/* The album trending playlist */}
      <SectionCarousel
        title="The album trending playlist"
        items={albumTrendingPlaylists.map((p) => ({
          title: p.title,
          subtitle: p.curator,
          meta: p.meta,
          hue: p.hue,
        }))}
      />

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
