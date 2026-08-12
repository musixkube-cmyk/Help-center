import type { Metadata } from "next";
import { adsHelpCenter } from "@/data/nav";
import { HelpCenterSidebar } from "@/components/site/help-center-sidebar";
import { NavLink } from "@/components/site/nav-link";

export const metadata: Metadata = {
  title: "Ads Help Center — adnote — Musicosy",
  description:
    "Everything you need to run ads on Musicosy with adnote — setup, targeting, formats, measurement, billing and policies.",
};

export default function AdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-[calc(100vh-57px)] bg-white">
      {/* Ads sub-header — adnote branding + Sign in / Sign up CTA */}
      <div className="border-b border-border bg-ink px-6 lg:px-10 py-4 text-ink-foreground">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <NavLink
              href="/advertising"
              className="font-display text-xl tracking-widest text-ink-foreground hover:text-accent"
            >
              adnote <span className="text-ink-foreground/40">Ads Help Center</span>
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <NavLink
              href="/support/sign-in"
              className="border border-ink-foreground/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Sign in
            </NavLink>
            <NavLink
              href="/advertise"
              className="bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>

      {/* Sidebar + content */}
      <div className="mx-auto grid gap-0 px-6 lg:px-10 py-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-10">
        <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:border-r lg:border-border lg:pr-6">
          <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Browse all topics
          </p>
          <HelpCenterSidebar sections={[adsHelpCenter]} />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </main>
  );
}
