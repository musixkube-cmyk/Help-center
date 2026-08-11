import { footerNav, footerUtilityLinks } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      {/* Utility row — horizontal link strip (X-platform style) */}
      <nav className="border-b border-ink-foreground/10 px-6 lg:px-10 py-4">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-foreground/60">
          {footerUtilityLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                href={link.path}
                className="transition-colors hover:text-ink-foreground"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Three columns: Help Center / Developer resources / Business resources */}
      <div className="w-full px-6 lg:px-10 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.path}>
              <NavLink
                href={group.path}
                className="text-xs font-semibold uppercase tracking-widest text-ink-foreground/50 transition-colors hover:text-accent"
              >
                {group.label}
              </NavLink>
              <ul className="mt-4 space-y-2.5">
                {(group.children ?? []).map((child) => (
                  <li key={child.path}>
                    <NavLink
                      href={child.path}
                      className="text-sm text-ink-foreground/80 transition-colors hover:text-accent"
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-ink-foreground/10 px-6 lg:px-10 py-5">
        <div className="flex flex-col gap-3 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg tracking-widest text-ink-foreground">
              MUSI<span className="text-accent">COSY</span>
            </span>
            <span>© 2026 Musicosy, Inc.</span>
          </div>
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
            <span className="cursor-pointer transition-colors hover:text-ink-foreground">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
