import { footerNav } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      {/* Five columns: Using Musicosy · X Platform · Help Center · Developer resources · Business resources */}
      <div className="w-full px-6 lg:px-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerNav.map((group) => (
            <div key={group.label + group.path}>
              <NavLink
                href={group.path}
                className="text-xs font-semibold uppercase tracking-widest text-ink-foreground/50 transition-colors hover:text-accent"
              >
                {group.label}
              </NavLink>
              <ul className="mt-4 space-y-2.5">
                {(group.children ?? []).map((child) => (
                  <li key={child.label + child.path}>
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

      {/* Logo above the dividing line, right-aligned */}
      <div className="w-full px-6 lg:px-10 pb-6">
        <div className="flex justify-end">
          <img
            src="/adnote-logo.png"
            alt="Musicosy"
            className="h-9 w-auto"
          />
        </div>
      </div>

      {/* Copyright row — bottom rail */}
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
