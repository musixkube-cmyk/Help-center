import { footerNav, footerUtilityBar } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      {/* Six-column nav grid — flat, no nesting */}
      <div className="w-full px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
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

      {/* Logo — right-aligned, above the utility bar */}
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

      {/* Utility bar — dense quick-access strip below the logo */}
      <div className="border-t border-ink-foreground/10 px-6 lg:px-10 py-4">
        <nav
          aria-label="Footer utility"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {footerUtilityBar.map((item) => (
            <NavLink
              key={item.label + item.path}
              href={item.path}
              className="text-xs font-medium uppercase tracking-wider text-ink-foreground/60 transition-colors hover:text-accent"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Copyright bottom rail — just the copyright + language, no link duplicates
          (Cookies/Privacy/Terms already live in the utility bar above) */}
      <div className="border-t border-ink-foreground/10 px-6 lg:px-10 py-5">
        <div className="flex flex-col gap-3 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Musicosy Corp.</span>
          <span className="cursor-pointer transition-colors hover:text-ink-foreground">English</span>
        </div>
      </div>
    </footer>
  );
}
