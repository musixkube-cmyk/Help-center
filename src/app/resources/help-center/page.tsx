import type { Metadata } from "next";
import { LifeBuoy, ShieldCheck, Scale, Headphones, Megaphone } from "lucide-react";
import { helpCenterSections } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { HelpCenterSidebar } from "@/components/site/help-center-sidebar";

export const metadata: Metadata = {
  title: "Help Center — Musicosy",
  description:
    "Support, privacy, safety, legal and advertising resources — all in one place.",
  openGraph: {
    title: "Help Center — Musicosy",
    description:
      "Support, privacy, safety, legal and advertising resources — all in one place.",
  },
};

const OVERVIEW_CARDS = [
  {
    icon: Headphones,
    label: "Support & Account Management",
    blurb: "Get help with your account, billing and subscriptions.",
    href: "/support/support-and-account-management",
  },
  {
    icon: LifeBuoy,
    label: "Using Musicosy",
    blurb: "Discover, play, collect and manage your music.",
    href: "/support/using-musicosy",
  },
  {
    icon: ShieldCheck,
    label: "Privacy & Safety",
    blurb: "How we collect, protect and respect your data — plus safety controls.",
    href: "/privacy-and-safety",
  },
  {
    icon: Scale,
    label: "Legal & Policies",
    blurb: "Terms of use, copyright, IP and distribution agreements.",
    href: "/legal-and-policies",
  },
  {
    icon: Megaphone,
    label: "Advertising Hub",
    blurb: "Create and manage ad campaigns on Musicosy.",
    href: "/support/advertising-hub",
  },
];

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
          Support, privacy, safety, legal and advertising resources — all in one
          place. Use the sidebar to navigate, or start with one of the sections
          below.
        </p>
      </div>

      {/* Sidebar + content layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
        {/* Sidebar */}
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
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {OVERVIEW_CARDS.map((card) => (
              <NavLink
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-3 border border-border bg-card p-6 transition-colors hover:border-accent/50 hover:bg-secondary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-accent">
                  <card.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-display text-xl tracking-wide text-foreground">
                  {card.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {card.blurb}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Quick links to each major section */}
          <h2 className="mt-12 font-display text-3xl tracking-wide text-foreground">
            All sections
          </h2>
          <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
            {helpCenterSections.map((section) => (
              <NavLink
                key={section.path}
                href={section.path}
                className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
              >
                <span className="font-display text-2xl tracking-wide text-foreground">
                  {section.label}
                </span>
                <span className="mt-3 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                  {section.children?.length ?? 0} categories
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
