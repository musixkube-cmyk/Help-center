import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  findPortalNode,
  findPortalTrail,
} from "@/data/portal-nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

type Params = { slug: string[] };

function resolvePath(params: Params): string {
  return `/developers/${(params.slug ?? []).join("/")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const p = await params;
  const path = resolvePath(p);
  const node = findPortalNode(path);
  const title = node
    ? `${node.label} — Developer Platform — Musicosy`
    : "Page not found — Musicosy";
  const description =
    node?.description ??
    "This Musicosy Developer Platform page could not be found.";
  return {
    title,
    description,
    openGraph: { title, description },
    ...(node ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function PortalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const p = await params;
  const path = resolvePath(p);
  const node = findPortalNode(path);

  if (!node) notFound();

  const trail = findPortalTrail(path);

  return (
    <main className="px-6 py-10 lg:px-12 lg:py-14">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
        </NavLink>
        <span>/</span>
        <NavLink href="/developers" className="hover:text-accent">
          Developer Platform
        </NavLink>
        {trail.map((n) => (
          <span key={n.path} className="flex items-center gap-2">
            <span>/</span>
            <NavLink href={n.path} className="hover:text-accent">
              {n.label}
            </NavLink>
          </span>
        ))}
      </nav>

      {/* Heading */}
      <div className="mt-6 max-w-3xl">
        <h1 className="font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl">
          {node.label}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {node.description}
        </p>
      </div>

      {/* Action row */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest" asChild>
          <NavLink href="/developers/developers/keys">Get API Keys</NavLink>
        </Button>
        <Button
          variant="outline"
          className="rounded-none uppercase tracking-widest"
          asChild
        >
          <NavLink href="/developers/developers/docs">Read the Docs</NavLink>
        </Button>
      </div>

      {/* If the node has children, render a grid of child cards */}
      {node.children && node.children.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-2xl tracking-wide text-foreground">
            {node.label === "Developers" ||
            node.label === "Embed" ||
            node.label === "API"
              ? "Sections"
              : "In this section"}
          </h2>
          <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {node.children.map((child) => (
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
        </div>
      )}

      {/* Endpoint reference for API leaf nodes */}
      {!node.children && node.path.startsWith("/developers/api/") && (
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl tracking-wide text-foreground">
            Endpoint
          </h2>
          <div className="mt-4 overflow-hidden rounded-sm border border-border">
            <div className="flex items-center gap-3 border-b border-border bg-card px-5 py-3">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-accent">
                POST
              </span>
              <code className="text-sm text-foreground">
                {node.path.replace("/developers", "")}
              </code>
            </div>
            <pre className="overflow-x-auto bg-ink p-5 text-sm leading-relaxed text-ink-foreground/90">
              <code>{`curl -X POST https://api.musicosy.com${node.path.replace("/developers", "")} \\
  -H "Authorization: Bearer $MUSICOSY_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Generic content card for leaf nodes */}
      {!node.children && !node.path.startsWith("/developers/api/") && (
        <div className="mt-12 max-w-3xl">
          <div className="border border-border bg-card p-6">
            <h2 className="font-display text-xl tracking-wide text-foreground">
              About {node.label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {node.description}. This surface reads from the same catalog,
              audience and settlement layers as every other part of Musicosy —
              no re-entry, no second system.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <NavLink
                href="/developers/developers/docs"
                className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Read the docs <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                href="/developers/developers/keys"
                className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Manage API keys <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Sibling navigation */}
      {trail.length >= 2 && (
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            More in {trail[trail.length - 2].label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(trail[trail.length - 2].children ?? [])
              .filter((sib) => sib.path !== node.path)
              .map((sib) => (
                <NavLink
                  key={sib.path}
                  href={sib.path}
                  className="border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-secondary"
                >
                  {sib.label}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
