import type { Metadata } from "next";
import {
  ArrowUpRight,
  Headphones,
  Settings,
  ShieldCheck,
  Scale,
  BookOpen,
  LifeBuoy,
  Compass,
} from "lucide-react";
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
    icon: Headphones,
    label: "Using Musicosy",
    blurb: "Guides on discovering, playing, collecting and managing your music.",
    href: "/resources/help-center/using-musicosy",
  },
  {
    icon: Settings,
    label: "Managing Your Account",
    blurb: "Account settings, billing, subscriptions and account status.",
    href: "/support/managing-your-account",
  },
  {
    icon: ShieldCheck,
    label: "Safety & Security",
    blurb: "How we collect, protect and respect your data — plus safety controls.",
    href: "/privacy-and-safety",
  },
  {
    icon: Scale,
    label: "Rules & Policies",
    blurb: "Terms of use, copyright, IP and distribution agreements.",
    href: "/legal-and-policies",
  },
  {
    icon: BookOpen,
    label: "Resources",
    blurb: "Guides, glossary, new-user FAQ and accessibility.",
    href: "/resources",
  },
  {
    icon: Compass,
    label: "Help Center",
    blurb: "Browse every support topic, policy and safety article in one place.",
    href: "/resources/help-center",
  },
];

const QUICK_LINKS = [
  { label: "New user FAQ", href: "/resources/new-user-faq" },
  { label: "Glossary", href: "/resources/glossary" },
  { label: "Accessibility", href: "/resources/accessibility" },
  { label: "Contact us", href: "/support/contact-us" },
  { label: "Developer docs", href: "/developers" },
  { label: "Ads Help Center", href: "/advertising" },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Support hero */}
      <section className="w-full px-6 lg:px-10 pt-14 pb-10">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Musicosy Help Center
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
          How can we help you?
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Everything you need to use Musicosy safely — account guides, safety
          controls, rules and policies, developer docs and business resources.
        </p>

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {QUICK_LINKS.map((q) => (
            <NavLink
              key={q.href}
              href={q.href}
              className="border border-border bg-card px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              {q.label}
            </NavLink>
          ))}
        </div>
      </section>

      {/* Support cards — the landing surface, routing to help center pages */}
      <section className="w-full px-6 lg:px-10 pb-16">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {HELP_CARDS.map((card) => (
            <NavLink
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-accent">
                <card.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="font-display text-2xl tracking-wide text-foreground">
                {card.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {card.blurb}
              </span>
              <span className="mt-2 flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent">
                Explore <ArrowUpRight className="h-3 w-3" />
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="w-full border-t border-border bg-card px-6 lg:px-10 py-12">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border bg-background text-accent">
              <LifeBuoy className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div>
              <h2 className="font-display text-2xl tracking-wide text-foreground">
                Still need a hand?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Reach our support team directly — we&apos;ll get you sorted.
              </p>
            </div>
          </div>
          <NavLink
            href="/support/contact-us"
            className="inline-flex items-center gap-1.5 border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact support <ArrowUpRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
