"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { cn } from "@/lib/utils";

function SidebarItem({ node, depth = 0 }: { node: NavNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 1);
  const hasChildren = !!node.children?.length;

  return (
    <div>
      <div className="flex items-center gap-1">
        <NavLink
          href={node.path}
          className={cn(
            "min-w-0 flex-1 truncate py-1 transition-colors hover:text-accent",
            depth === 0
              ? "text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-foreground"
              : depth === 1
                ? "text-sm font-medium text-ink-foreground/90"
                : "text-xs leading-relaxed text-ink-foreground/55",
          )}
        >
          {node.label}
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
            className="shrink-0 p-0.5 text-ink-foreground/40 hover:text-accent"
          >
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
            />
          </button>
        )}
      </div>
      {open && hasChildren && (
        <div className="ml-3 border-l border-ink-foreground/15 pl-3">
          {node.children!.map((child) => (
            <SidebarItem key={child.path} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function HelpCenterSidebar({ sections }: { sections: NavNode[] }) {
  return (
    <nav className="space-y-5">
      {sections.map((section) => (
        <SidebarItem key={section.path} node={section} />
      ))}
    </nav>
  );
}
