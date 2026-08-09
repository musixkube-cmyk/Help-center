import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { findNode, findTrail, type NavNode } from "@/data/nav";
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

/* A leaf card (a node with no children) */
function LeafCard({ node }: { node: NavNode }) {
  return (
    <NavLink
      href={node.path}
      className="group flex items-center justify-between gap-3 bg-card p-5 transition-colors hover:bg-secondary"
    >
      <span className="text-sm font-medium leading-tight text-foreground">
        {node.label}
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
    </NavLink>
  );
}

/* A category block: heading + grid of its leaves */
function CategoryBlock({ node }: { node: NavNode }) {
  const leaves = node.children ?? [];
  return (
    <div>
      <NavLink
        href={node.path}
        className="group/head inline-flex items-center gap-2 border-b border-border pb-3 font-display text-2xl tracking-wide text-foreground transition-colors hover:text-accent"
      >
        <span>{node.label}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover/head:text-accent" />
      </NavLink>
      {leaves.length > 0 && (
        <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leaves.map((leaf) => (
            <LeafCard key={leaf.path} node={leaf} />
          ))}
        </div>
      )}
    </div>
  );
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

  // Split children into direct leaves (no sub-children) and categories (have children)
  const children = node.children ?? [];
  const directLeaves = children.filter((c) => !c.children?.length);
  const categories = children.filter((c) => !!c.children?.length);

  return (
    <main className="w-full px-6 lg:px-10 py-16">
      {/* Breadcrumb */}
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

      {/* Heading */}
      <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] sm:text-7xl">{node.label}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        {node.blurb ??
          `${node.label} reads from the same catalog, audience and settlement layers as every other part of Musicosy — no re-entry, no second system.`}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest">Get started</Button>
      </div>

      {/* Full tree: parent → child → leaf */}
      {children.length > 0 && (
        <div className="mt-16 space-y-12">
          {/* Direct leaves first (if any) */}
          {directLeaves.length > 0 && (
            <div>
              <h2 className="border-b border-border pb-3 font-display text-2xl tracking-wide text-foreground">
                Browse
              </h2>
              <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {directLeaves.map((leaf) => (
                  <LeafCard key={leaf.path} node={leaf} />
                ))}
              </div>
            </div>
          )}

          {/* Categories with their leaves */}
          {categories.map((cat) => (
            <CategoryBlock key={cat.path} node={cat} />
          ))}
        </div>
      )}
    </main>
  );
}
