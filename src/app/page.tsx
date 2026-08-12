import type { Metadata } from "next";
import { NavLink } from "@/components/site/nav-link";

export const metadata: Metadata = {
  title: "Musicosy Help Center — Support, safety and policies",
  description:
    "Musicosy is a support and documentation hub. Find guides on using your account, safety and security, rules and policies, developer resources and business tools.",
  openGraph: {
    title: "Musicosy Help Center — Support, safety and policies",
    description:
      "Find guides on using your account, safety and security, rules and policies, developer resources and business tools.",
  },
};

const HELP_CARDS = [
  {
    label: "Using Musicosy",
    blurb: "Guides on discovering, playing, collecting and managing your account.",
    href: "/resources/help-center",
  },
  {
    label: "Safety & Security",
    blurb: "Privacy controls, reporting, account safety and community rules.",
    href: "/privacy-and-safety",
  },
  {
    label: "Legal Center",
    blurb: "Terms of use, copyright, IP, distribution agreements and policies.",
    href: "/legal-and-policies",
  },
  {
    label: "Support & Contact",
    blurb: "How to get help, contact us, sign in and manage your account status.",
    href: "/support",
  },
  {
    label: "Resources",
    blurb: "Guides, glossary, new-user FAQ and accessibility.",
    href: "/resources",
  },
  {
    label: "Ads Help Center",
    blurb: "Setup, targeting, formats, measurement, billing and policies for adnote.",
    href: "/advertising",
  },
];

const QUICK_LINKS = [
  { label: "New user FAQ", href: "/resources/new-user-faq" },
  { label: "Glossary", href: "/resources/glossary" },
  { label: "Accessibility", href: "/resources/accessibility" },
  { label: "Contact us", href: "/support/contact-us" },
  { label: "Developer docs", href: "/developers" },
  { label: "Advertise", href: "/advertise" },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="w-full px-6 lg:px-10 pt-20 pb-14">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Musicosy Help Center
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
          How can we help you?
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Everything you need to use Musicosy safely — account guides, safety
          controls, rules and policies, developer docs and business resources.
        </p>

        {/* Quick links — plain text, no chips */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {QUICK_LINKS.map((q) => (
            <NavLink
              key={q.href}
              href={q.href}
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {q.label}
            </NavLink>
          ))}
        </div>
      </section>

      {/* Support cards — clean grid, no grid lines, no icons */}
      <section className="w-full px-6 lg:px-10 pb-24">
        <div className="grid gap-x-8 gap-y-12 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_CARDS.map((card) => (
            <NavLink key={card.href} href={card.href} className="group flex flex-col">
              <span className="font-display text-2xl tracking-wide text-foreground transition-colors group-hover:text-accent">
                {card.label}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.blurb}
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Contact strip — clean, no icon, no fill */}
      <section className="w-full border-t border-border px-6 lg:px-10 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-foreground">
              Still need a hand?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach our support team directly — we&apos;ll get you sorted.
            </p>
          </div>
          <NavLink
            href="/support/contact-us"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Contact support
          </NavLink>
        </div>
      </section>
    </main>
  );
}
