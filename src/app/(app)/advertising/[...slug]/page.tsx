import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { adsHelpCenter, findNode, findTrail } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

type Params = { slug: string[] };

function resolvePath(params: Params): string {
  return `/advertising/${(params.slug ?? []).join("/")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const p = await params;
  const path = resolvePath(p);
  const node = findNode(path, [adsHelpCenter]);
  const title = node
    ? `${node.label} — Ads Help Center — Musicosy`
    : "Page not found — Musicosy";
  const description =
    node?.blurb ??
    (node
      ? `${node.label} — adnote Ads Help Center.`
      : "This page could not be found.");
  return {
    title,
    description,
    openGraph: { title, description },
    ...(node ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function AdvertisingSectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const p = await params;
  const path = resolvePath(p);
  const node = findNode(path, [adsHelpCenter]);
  if (!node) notFound();

  const trail = findTrail(path, [adsHelpCenter]);

  return (
    <div className="min-w-0">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
        </NavLink>
        <span>/</span>
        <NavLink href="/advertising" className="hover:text-accent">
          Ads Help Center
        </NavLink>
        {trail
          .filter((n) => n.path !== "/advertising")
          .map((n) => (
            <span key={n.path} className="flex items-center gap-2">
              <span>/</span>
              <NavLink href={n.path} className="hover:text-accent">
                {n.label}
              </NavLink>
            </span>
          ))}
      </nav>

      {/* Title */}
      <h1 className="mt-6 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
        {node.label}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        {node.blurb ??
          `${node.label} — part of the adnote Ads Help Center.`}
      </p>

      {/* Persistent CTA */}
      <div className="mt-6 flex flex-wrap gap-3">
        <NavLink
          href="/advertise"
          className="inline-flex items-center bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-90"
        >
          Get started with adnote
        </NavLink>
        <NavLink
          href="/support/sign-in"
          className="inline-flex items-center border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
        >
          Sign in
        </NavLink>
      </div>

      {/* Children grid */}
      {node.children && node.children.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-2xl tracking-wide text-foreground">
            {node.children.length}{" "}
            {node.children.length === 1 ? "topic" : "topics"} in {node.label}
          </h2>
          <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {node.children.map((child) => (
              <NavLink
                key={child.path}
                href={child.path}
                className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div>
                  <h3 className="font-display text-lg tracking-wide text-foreground group-hover:text-accent">
                    {child.label}
                  </h3>
                  {child.children?.length ? (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {child.children.length}{" "}
                      {child.children.length === 1 ? "article" : "articles"}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Article
                    </p>
                  )}
                </div>
                <span className="mt-6 flex items-center gap-1 text-xs uppercase tracking-widest text-accent">
                  Open <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Leaf article placeholder */}
      {!node.children?.length && (
        <div className="mt-12 border border-border bg-card p-8">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Article
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-wide text-foreground">
            {node.label}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This article is part of the adnote Ads Help Center. Full content is
            being prepared. Use the sidebar to browse related topics, or get
            started with adnote today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink
              href="/advertise"
              className="inline-flex items-center bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </NavLink>
            <NavLink
              href="/support/contact-us"
              className="inline-flex items-center border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              Contact support
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
