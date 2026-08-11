import type { Metadata } from "next";
import { ArrowUpRight, Headphones, Settings, ShieldCheck, Scale, BookOpen, Compass } from "lucide-react";
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
import { NavLink } from "@/components/site/nav-link";
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

const HELP_CARDS = [
  {
    icon: Headphones,
    label: "Using Musicosy",
    blurb: "Discover, play, collect and manage your music.",
    href: "/resources/help-center",
  },
  {
    icon: Settings,
    label: "Managing Your Account",
    blurb: "Account settings, billing, subscriptions and status.",
    href: "/support",
  },
  {
    icon: ShieldCheck,
    label: "Safety & Security",
    blurb: "How we collect, protect and respect your data.",
    href: "/privacy-and-safety",
  },
  {
    icon: Scale,
    label: "Rules & Policies",
    blurb: "Terms of use, copyright, IP and distribution agreements.",
    href: "/legal-and-policies",
  },
  {
    icon: BookOpen,
    label: "Resources",
    blurb: "Blog, guides, glossary and help center.",
    href: "/resources",
  },
  {
    icon: Compass,
    label: "Discover",
    blurb: "Trending, newly dropped, playlists and podcasts.",
    href: "/discover",
  },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Help center cards — the landing surface, routing to help center pages */}
      <section className="w-full px-6 lg:px-10 pt-12 pb-10">
        <h1 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
          Everything music. One place.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Fans listen and buy, creators ship and get paid, and every play settles
          back to the people who made it.
        </p>

        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {HELP_CARDS.map((card) => (
            <NavLink
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-accent">
                <card.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="font-display text-2xl tracking-wide text-foreground">
                {card.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {card.blurb}
              </span>
              <span className="mt-2 flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                Explore <ArrowUpRight className="h-3 w-3" />
              </span>
            </NavLink>
          ))}
        </div>
      </section>

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
    </main>
  );
}
