import { footerNav } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="w-full px-6 lg:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {footerNav.map((group) => (
            <div key={group.path}>
              <h3 className="font-display text-xl tracking-widest text-accent">{group.label}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.children?.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      href={child.path}
                      className="text-sm text-ink-foreground/70 transition-colors hover:text-accent"
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs uppercase tracking-widest text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-2xl tracking-widest text-ink-foreground">
            MUSI<span className="text-accent">COSY</span>
          </span>
          <span>One spine. Catalog, audience, settlement.</span>
        </div>
      </div>
    </footer>
  );
}
