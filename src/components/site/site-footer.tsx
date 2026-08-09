import { footerNav, type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { cn } from "@/lib/utils";

/* A list of leaf links under a sub-category */
function FooterLeafList({ leaves }: { leaves: NavNode[] }) {
  return (
    <ul className="mt-1 space-y-0.5">
      {leaves.map((leaf) => (
        <li key={leaf.path}>
          <NavLink
            href={leaf.path}
            className="text-xs leading-relaxed text-ink-foreground/60 transition-colors hover:text-accent"
          >
            {leaf.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

/* A sub-category: bold name link + its leaves */
function FooterSubCategory({ node }: { node: NavNode }) {
  const leaves = node.children ?? [];
  return (
    <div>
      <NavLink
        href={node.path}
        className="text-sm font-semibold text-ink-foreground transition-colors hover:text-accent"
      >
        {node.label}
      </NavLink>
      {leaves.length > 0 && <FooterLeafList leaves={leaves} />}
    </div>
  );
}

/* Simple group: heading + direct leaf links (e.g. Platform, Solutions) */
function SimpleGroup({ group }: { group: NavNode }) {
  const children = group.children ?? [];
  return (
    <div>
      <h3 className="font-display text-xl tracking-widest text-accent">{group.label}</h3>
      <ul className="mt-3 space-y-1.5">
        {children.map((child) => (
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
  );
}

/* Comprehensive group: heading + sub-categories in a sub-grid, each with leaves */
function ComprehensiveGroup({
  group,
  subGridClass,
}: {
  group: NavNode;
  subGridClass: string;
}) {
  const children = group.children ?? [];
  return (
    <div>
      <h3 className="font-display text-xl tracking-widest text-accent">{group.label}</h3>
      <div className={cn("mt-3 grid gap-x-6 gap-y-4", subGridClass)}>
        {children.map((child) => (
          <FooterSubCategory key={child.path} node={child} />
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  // Simple groups: children are all direct leaves (Platform, Solutions, Developers, Advertising, Resources)
  const simpleGroups = footerNav.filter(
    (g) => !g.children?.some((c) => c.children?.length),
  );
  // Comprehensive groups: at least one child is a sub-category with its own leaves
  // (Privacy & Safety, Legal & Policies, Support Center)
  const comprehensiveGroups = footerNav.filter((g) =>
    g.children?.some((c) => c.children?.length),
  );

  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="w-full px-6 lg:px-10 py-16">
        {/* Simple groups — direct leaves */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {simpleGroups.map((group) => (
            <SimpleGroup key={group.path} group={group} />
          ))}
        </div>

        {/* Comprehensive groups — sub-categories with their leaves */}
        <div className="mt-12 grid gap-10 border-t border-ink-foreground/15 pt-12 lg:grid-cols-5">
          {comprehensiveGroups.map((group) => {
            let spanClass = "lg:col-span-1";
            let subGridClass = "sm:grid-cols-1";
            if (group.label === "Privacy & Safety") {
              // 6 sub-categories — give it 2 cols and a 3-col sub-grid
              spanClass = "lg:col-span-2";
              subGridClass = "sm:grid-cols-2 lg:grid-cols-3";
            } else if (group.label === "Legal & Policies") {
              // 2 sub-categories (Terms of Use, Copyright & IP) — 2 cols, side-by-side
              spanClass = "lg:col-span-2";
              subGridClass = "sm:grid-cols-2";
            }
            // Support Center: span 1, stacked (default)
            return (
              <div key={group.path} className={spanClass}>
                <ComprehensiveGroup group={group} subGridClass={subGridClass} />
              </div>
            );
          })}
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
