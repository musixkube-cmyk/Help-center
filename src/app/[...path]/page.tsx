import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { findNode, findTrail } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

type Params = { path: string[] };

function resolvePath(params: Params): string {
  return `/${(params.path ?? []).join("/")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const p = await params;
  const path = resolvePath(p);
  const node = findNode(path);
  const title = node ? `${node.label} — Musicosy` : "Page not found — Musicosy";
  const description =
    node?.blurb ??
    (node
      ? `${node.label} on Musicosy — the platform where catalog, audience and settlement share one spine.`
      : "This Musicosy page could not be found.");
  return {
    title,
    description,
    openGraph: { title, description },
    ...(node ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const p = await params;
  const path = resolvePath(p);
  const node = findNode(path);
  if (!node) notFound();
  const trail = findTrail(path);

  return (
    <main className="w-full px-6 lg:px-10 py-16">
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
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

      <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] sm:text-7xl">{node.label}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        {node.blurb ??
          `${node.label} reads from the same catalog, audience and settlement layers as every other part of Musicosy — no re-entry, no second system.`}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest">Get started</Button>
      </div>

      {node.children && (
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {node.children.map((child) => (
            <NavLink
              key={child.path}
              href={child.path}
              className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span className="font-display text-2xl tracking-wide">{child.label}</span>
              <span className="mt-6 flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </main>
  );
}
