"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { cn } from "@/lib/utils";

function SidebarItem({
  node,
  depth = 0,
  pathname,
}: {
  node: NavNode;
  depth?: number;
  pathname: string;
}) {
  const hasChildren = !!node.children?.length;
  const isExact = pathname === node.path;
  const isInTrail = pathname.startsWith(`${node.path}/`);
  const [open, setOpen] = useState(isInTrail || depth === 0);

  // Top-level sections render as uppercase group labels (like the dev portal).
  if (depth === 0) {
    return (
      <div className="mb-1">
        <p className="px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {node.label}
        </p>
        {node.children && (
          <div className="space-y-0.5">
            {node.children.map((child) => (
              <SidebarItem
                key={child.path}
                node={child}
                depth={1}
                pathname={pathname}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1">
        <NavLink
          href={node.path}
          className={cn(
            "group flex min-w-0 flex-1 items-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors",
            isExact
              ? "bg-accent/10 font-semibold text-accent"
              : isInTrail
                ? "text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
          )}
        >
          <span className="truncate">{node.label}</span>
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            aria-label={open ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={open}
            className="shrink-0 p-1 text-muted-foreground/50 hover:text-accent"
          >
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                open && "rotate-180",
              )}
            />
          </button>
        )}
      </div>
      {open && hasChildren && (
        <div className="ml-4 border-l border-border pl-2">
          {node.children!.map((child) => (
            <SidebarItem
              key={child.path}
              node={child}
              depth={depth + 1}
              pathname={pathname}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function HelpCenterSidebar({ sections }: { sections: NavNode[] }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-4">
      {sections.map((section) => (
        <SidebarItem
          key={section.path}
          node={section}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}
