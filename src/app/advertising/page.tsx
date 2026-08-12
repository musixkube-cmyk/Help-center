import { ArrowUpRight } from "lucide-react";
import { adsHelpCenter } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

export default function AdvertisingHomePage() {
  const sections = adsHelpCenter.children ?? [];

  return (
    <div className="min-w-0">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
        </NavLink>
        <span>/</span>
        <span className="text-foreground">Ads Help Center</span>
      </nav>

      {/* Heading */}
      <div className="mt-6 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          adnote
        </p>
        <h1 className="mt-3 text-5xl leading-[0.95] sm:text-6xl">
          Ads Help Center
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {adsHelpCenter.blurb}
        </p>
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
      </div>

      {/* All 18 sections as cards */}
      <h2 className="mt-14 font-display text-3xl tracking-wide text-foreground">
        All sections
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {sections.length} topics covering everything from first setup to
        advanced optimization. Use the sidebar to navigate the full tree.
      </p>
      <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, i) => (
          <NavLink
            key={section.path}
            href={section.path}
            className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl tracking-wide text-foreground group-hover:text-accent">
                {section.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {section.children?.length ?? 0}{" "}
                {section.children?.length === 1 ? "topic" : "topics"}
              </p>
            </div>
            <span className="mt-6 flex items-center gap-1 text-xs uppercase tracking-widest text-accent">
              Open <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
