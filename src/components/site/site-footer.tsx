import { footerNav, footerUtilityBar, type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

/** Render a single footer link, with optional indented sub-links. */
function FooterLink({ node }: { node: NavNode }) {
  return (
    <li>
      <NavLink
        href={node.path}
        className="text-sm text-ink-foreground/80 transition-colors hover:text-accent"
      >
        {node.label}
      </NavLink>
      {node.children && node.children.length > 0 && (
        <ul className="mt-1.5 space-y-1 border-l border-ink-foreground/10 pl-3">
          {node.children.map((sub) => (
            <li key={sub.label + sub.path}>
              <NavLink
                href={sub.path}
                className="text-[0.8rem] leading-relaxed text-ink-foreground/55 transition-colors hover:text-accent"
              >
                {sub.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      {/* Eight-column nav grid */}
      <div className="w-full px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 xl:grid-cols-8">
          {footerNav.map((group) => (
            <div key={group.label + group.path}>
              <NavLink
                href={group.path}
                className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/50 transition-colors hover:text-accent"
              >
                {group.label}
              </NavLink>
              <ul className="mt-4 space-y-2.5">
                {(group.children ?? []).map((child) => (
                  <FooterLink key={child.label + child.path} node={child} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Logo above the dividing line, right-aligned — orange via CSS mask */}
      <div className="w-full px-6 lg:px-10 pb-6">
        <div className="flex justify-end">
          <div
            role="img"
            aria-label="Musicosy"
            className="h-9 w-[150px]"
            style={{
              backgroundColor: "var(--accent)",
              WebkitMaskImage: "url('/adnote-logo.png')",
              maskImage: "url('/adnote-logo.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "right center",
              maskPosition: "right center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </div>
      </div>

      {/* Utility bar — horizontal strip of quick links */}
      <div className="border-t border-ink-foreground/10 px-6 lg:px-10 py-4">
        <nav
          aria-label="Footer utility"
          className="flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {footerUtilityBar.map((item) => (
            <NavLink
              key={item.label + item.path}
              href={item.path}
              className="text-xs font-medium uppercase tracking-widest text-ink-foreground/60 transition-colors hover:text-accent"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Copyright row */}
      <div className="border-t border-ink-foreground/10 px-6 lg:px-10 py-5">
        <div className="flex flex-col gap-3 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Musicosy Corp.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <NavLink href="/legal-and-policies" className="transition-colors hover:text-ink-foreground">
              Cookies
            </NavLink>
            <NavLink href="/privacy-and-safety" className="transition-colors hover:text-ink-foreground">
              Privacy
            </NavLink>
            <NavLink href="/legal-and-policies" className="transition-colors hover:text-ink-foreground">
              Terms and conditions
            </NavLink>
            <NavLink href="/support/contact-us" className="transition-colors hover:text-ink-foreground">
              Affiliate
            </NavLink>
            <span className="cursor-pointer transition-colors hover:text-ink-foreground">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
