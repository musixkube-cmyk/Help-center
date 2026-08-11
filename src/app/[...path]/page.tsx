import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    <main className="!bg-white w-full min-h-[calc(100vh-57px)] px-6 lg:px-10 py-16">
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
          `Find guides, policies and answers about ${node.label} in the Musicosy Help Center.`}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest" asChild>
          <NavLink href="/resources/help-center">Browse Help Center</NavLink>
        </Button>
      </div>

      {node.children && (
        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {node.children.map((child) => (
            <NavLink
              key={child.path}
              href={child.path}
              className="group flex flex-col"
            >
              <span className="font-display text-2xl tracking-wide text-foreground transition-colors group-hover:text-accent">
                {child.label}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {child.blurb ?? "Browse this section."}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </main>
  );
}
