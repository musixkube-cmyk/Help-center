import type { Metadata } from "next";
import { helpCenterSections } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { HelpCenterSidebar } from "@/components/site/help-center-sidebar";

export const metadata: Metadata = {
  title: "Help Center — Musicosy",
  description:
    "Support, safety, legal and account guides — all in one place.",
  openGraph: {
    title: "Help Center — Musicosy",
    description:
      "Support, safety, legal and account guides — all in one place.",
  },
};

export default function HelpCenterPage() {
  return (
    <main className="w-full min-h-[calc(100vh-57px)] bg-white px-6 lg:px-10 py-12">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <NavLink href="/" className="hover:text-accent">
          Home
        </NavLink>
        <span>/</span>
        <NavLink href="/resources" className="hover:text-accent">
          Resources
        </NavLink>
        <span>/</span>
        <span className="text-foreground">Help Center</span>
      </nav>

      {/* Heading */}
      <div className="mt-6 max-w-3xl">
        <h1 className="text-5xl leading-[0.95] sm:text-6xl">Help Center</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to use Musicosy safely — account guides, safety
          controls, legal policies and support. Use the sidebar to navigate the
          full tree, or start with a section below.
        </p>
      </div>

      {/* Sidebar + content layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
        {/* Sidebar — persistent, shows the full tree */}
        <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-r lg:border-border lg:pr-6">
          <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Browse all topics
          </p>
          <HelpCenterSidebar sections={helpCenterSections} />
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          <h2 className="font-display text-3xl tracking-wide text-foreground">
            Start here
          </h2>
          <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
            {helpCenterSections.map((section) => (
              <NavLink
                key={section.path}
                href={section.path}
                className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div>
                  <span className="font-display text-2xl tracking-wide text-foreground group-hover:text-accent">
                    {section.label}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {section.blurb}
                  </p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                  {section.children?.length ?? 0}{" "}
                  {section.children?.length === 1 ? "category" : "categories"}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Ads Help Center — separate hub */}
          <h2 className="mt-12 font-display text-3xl tracking-wide text-foreground">
            Advertising
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Running ads on Musicosy? The Ads Help Center has its own dedicated
            hub with 18 sections covering everything from setup to optimization.
          </p>
          <div className="mt-5 border border-border bg-card p-6 transition-colors hover:bg-secondary">
            <NavLink
              href="/advertising"
              className="group flex flex-col"
            >
              <span className="font-display text-2xl tracking-wide text-foreground group-hover:text-accent">
                Ads Help Center
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                Setup, targeting, formats, measurement, billing and policies for
                adnote.
              </p>
              <span className="mt-4 text-xs uppercase tracking-widest text-accent">
                Open Ads Help Center →
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
