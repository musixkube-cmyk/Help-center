import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, KeyRound, BookOpen, Code2 } from "lucide-react";
import { portalGroups } from "@/data/portal-nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Developer Platform — Musicosy",
  description:
    "Public REST & GraphQL APIs, SDKs, webhooks, embeds and the Agentic Hub — everything third-party integrators need to build on Musicosy.",
  openGraph: {
    title: "Developer Platform — Musicosy",
    description:
      "Public REST & GraphQL APIs, SDKs, webhooks, embeds and the Agentic Hub.",
  },
};

export default function DeveloperPortalHome() {
  return (
    <main className="px-6 py-10 lg:px-12 lg:py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
        </NavLink>
        <span>/</span>
        <span className="text-foreground">Developer Platform</span>
      </nav>

      {/* Hero */}
      <div className="mt-6 max-w-3xl">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
          Third-party integrator surfaces
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
          Developer Platform
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Public REST &amp; GraphQL APIs, official SDKs, real-time webhooks,
          embeddable players and the Agentic Hub &amp; MCP Server — all reading
          from the same catalog, audience and settlement layers as Musicosy
          itself.
        </p>
      </div>

      {/* CTA row */}
      <div className="mt-7 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest" asChild>
          <NavLink href="/developers/developers/keys">
            <KeyRound className="mr-2 h-4 w-4" /> Get API Keys
          </NavLink>
        </Button>
        <Button
          variant="outline"
          className="rounded-none uppercase tracking-widest"
          asChild
        >
          <NavLink href="/developers/developers/docs">
            <BookOpen className="mr-2 h-4 w-4" /> Read the Docs
          </NavLink>
        </Button>
      </div>

      {/* Quick-start code block */}
      <div className="mt-12 max-w-3xl">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Quick start
        </p>
        <pre className="mt-3 overflow-x-auto rounded-sm border border-border bg-ink p-5 text-sm leading-relaxed text-ink-foreground/90">
          <code>{`# Install the Musicosy SDK
bun add @musicosy/sdk

# Authenticate
export MUSICOSY_API_KEY="msy_live_…"

# Publish a track
curl -X POST https://api.musicosy.com/v1/publish/audio \\
  -H "Authorization: Bearer $MUSICOSY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "title": "Midnight Tape", "artist": "DELFA DISKZS" }'`}</code>
        </pre>
      </div>

      {/* Group overviews */}
      <div className="mt-16 space-y-12">
        {portalGroups.map((group) => (
          <section key={group.path}>
            <div className="flex items-end justify-between border-b border-border pb-3">
              <div>
                <h2 className="font-display text-3xl tracking-wide text-foreground">
                  {group.label}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <NavLink
                href={group.path}
                className="flex items-center gap-1 text-xs uppercase tracking-widest text-accent hover:underline"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>
            </div>
            <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {(group.children ?? []).map((child) => (
                <NavLink
                  key={child.path}
                  href={child.path}
                  className="group flex flex-col justify-between bg-card p-5 transition-colors hover:bg-secondary"
                >
                  <span className="font-display text-xl tracking-wide text-foreground">
                    {child.label}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {child.description}
                  </span>
                  <span className="mt-4 flex items-center gap-1 text-[0.62rem] uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                    Explore <ArrowUpRight className="h-3 w-3" />
                  </span>
                </NavLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
