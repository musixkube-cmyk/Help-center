import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findNode, findTrail, findRootSection } from "@/data/nav";
import { getDoc } from "@/data/docs";
import { NavLink } from "@/components/site/nav-link";
import { HelpCenterSidebar } from "@/components/site/help-center-sidebar";
import { DocContent } from "@/components/site/doc-content";
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
      ? `${node.label} on Musicosy — support, safety, rules and resources.`
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
  const rootSection = findRootSection(path);
  const doc = getDoc(path);

  // ── Center layout ────────────────────────────────────────────────────────
  // Every page that belongs to a root section (Safety & Security, Legal Center,
  // Support & Contact, Resources, Using Musicosy) renders with a persistent
  // sidebar showing the full section tree — so users can jump between siblings
  // without clicking back to the homepage.
  if (rootSection) {
    const isRootLanding = node.path === rootSection.path;
    return (
      <main className="w-full min-h-[calc(100vh-57px)] bg-white">
        <div className="mx-auto grid gap-0 px-6 lg:px-10 py-10 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-10">
          {/* Sidebar — persistent, shows the full root-section tree */}
          <aside className="mb-8 lg:mb-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:border-r lg:border-border lg:pr-6">
            <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {rootSection.label}
            </p>
            <HelpCenterSidebar sections={[rootSection]} />
          </aside>

          {/* Main content */}
          <div className="min-w-0">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <NavLink href="/" className="hover:text-accent">
                Home
              </NavLink>
              {trail.slice(0, -1).map((n) => (
                <span key={n.path} className="flex items-center gap-2">
                  <span>/</span>
                  <NavLink href={n.path} className="hover:text-accent">
                    {n.label}
                  </NavLink>
                </span>
              ))}
              <span>/</span>
              <span className="text-foreground">{node.label}</span>
            </nav>

            {/* Hero */}
            <h1 className="mt-6 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
              {node.label}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {node.blurb ??
                `Browse ${node.label} in the Musicosy Help Center. Use the sidebar to jump between topics.`}
            </p>

            {/* Children grid (section + sub-section pages) */}
            {node.children && node.children.length > 0 ? (
              <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-2">
                {node.children.map((child) => (
                  <NavLink
                    key={child.path}
                    href={child.path}
                    className="group flex flex-col"
                  >
                    <span className="font-display text-xl tracking-wide text-foreground transition-colors group-hover:text-accent">
                      {child.label}
                    </span>
                    <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {child.blurb ?? "Browse this section."}
                    </span>
                  </NavLink>
                ))}
              </div>
            ) : doc ? (
              /* Leaf document with written content */
              <DocContent doc={doc} />
            ) : (
              /* Leaf document — content placeholder + related actions */
              <div className="mt-10 border-t border-border pt-8">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  This page covers{" "}
                  <span className="text-foreground">{node.label}</span>. Use the
                  sidebar to jump to related topics, or reach out to support if
                  you need more help.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    className="rounded-none uppercase tracking-widest"
                    asChild
                  >
                    <NavLink href="/support/contact-us">Contact us</NavLink>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none uppercase tracking-widest"
                    asChild
                  >
                    <NavLink href="/support/sign-in">Sign in</NavLink>
                  </Button>
                </div>
              </div>
            )}

            {/* Root-landing CTA — only on the section's home page */}
            {isRootLanding && (
              <div className="mt-14 border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">
                  Looking for something else? Browse the full{" "}
                  <NavLink
                    href="/resources/help-center"
                    className="text-foreground underline-offset-4 hover:text-accent hover:underline"
                  >
                    Help Center
                  </NavLink>{" "}
                  or{" "}
                  <NavLink
                    href="/support/contact-us"
                    className="text-foreground underline-offset-4 hover:text-accent hover:underline"
                  >
                    contact support
                  </NavLink>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  // ── Standalone layout ────────────────────────────────────────────────────
  // Leaf pages that don't belong to any center (e.g. /about, /careers, /download)
  // render as a clean standalone page — no sidebar.
  return (
    <main className="w-full min-h-[calc(100vh-57px)] bg-white px-6 lg:px-10 py-16">
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

      <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] sm:text-7xl">
        {node.label}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        {node.blurb ??
          `Find guides, policies and answers about ${node.label} in the Musicosy Help Center.`}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="rounded-none uppercase tracking-widest" asChild>
          <NavLink href="/resources/help-center">Browse Help Center</NavLink>
        </Button>
        <Button
          variant="outline"
          className="rounded-none uppercase tracking-widest"
          asChild
        >
          <NavLink href="/support/contact-us">Contact us</NavLink>
        </Button>
      </div>

      {node.children && node.children.length > 0 && (
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
