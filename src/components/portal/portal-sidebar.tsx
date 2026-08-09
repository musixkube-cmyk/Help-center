"use client";

import { useState, createElement } from "react";
import {
  Code2,
  Code,
  Terminal,
  LayoutGrid,
  Plug,
  SquareTerminal,
  BookOpen,
  Network,
  KeyRound,
  Bot,
  Handshake,
  FlaskConical,
  Package,
  Radio,
  Play,
  Wrench,
  Gauge,
  Webhook,
  Scissors,
  PlayCircle,
  Captions,
  SlidersHorizontal,
  Music,
  Podcast,
  Link2,
  Video,
  Briefcase,
  GitBranch,
  Upload,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PortalNode } from "@/data/portal-nav";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Code,
  Terminal,
  LayoutGrid,
  Plug,
  SquareTerminal,
  BookOpen,
  Network,
  KeyRound,
  Bot,
  Handshake,
  FlaskConical,
  Package,
  Radio,
  Play,
  Wrench,
  Gauge,
  Webhook,
  Scissors,
  PlayCircle,
  Captions,
  SlidersHorizontal,
  Music,
  Podcast,
  Link2,
  Video,
  Briefcase,
  GitBranch,
  Upload,
};

function iconFor(key: string): LucideIcon {
  return ICONS[key] ?? Code2;
}

function SidebarItem({
  node,
  depth,
  pathname,
}: {
  node: PortalNode;
  depth: number;
  pathname: string;
}) {
  const hasChildren = !!node.children?.length;
  const isExact = pathname === node.path;
  const isInTrail = pathname.startsWith(`${node.path}/`);
  const [open, setOpen] = useState(isInTrail || depth === 0);

  const Icon = iconFor(node.icon);

  if (depth === 0) {
    return (
      <div className="mb-1">
        <p className="px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {node.label}
        </p>
        {node.children && (
          <div className="space-y-0.5">
            {node.children.map((child) => (
              <SidebarItem key={child.path} node={child} depth={1} pathname={pathname} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1">
        <Link
          href={node.path}
          className={cn(
            "group flex min-w-0 flex-1 items-center gap-2.5 rounded-sm px-3 py-1.5 text-sm transition-colors",
            isExact
              ? "bg-accent/10 font-semibold text-accent"
              : isInTrail
                ? "text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
          )}
        >
          {createElement(Icon, {
            className: cn(
              "h-4 w-4 shrink-0",
              isExact ? "text-accent" : "text-muted-foreground/70 group-hover:text-foreground",
            ),
            strokeWidth: 1.6,
          })}
          <span className="truncate">{node.label}</span>
        </Link>
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
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
          </button>
        )}
      </div>
      {open && hasChildren && (
        <div className="ml-4 border-l border-border pl-2">
          {node.children!.map((child) => (
            <SidebarItem key={child.path} node={child} depth={depth + 1} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  );
}

export function PortalSidebar({ groups }: { groups: PortalNode[] }) {
  const pathname = usePathname();
  return (
    <aside className="sticky top-[57px] max-h-[calc(100vh-57px)] w-full overflow-y-auto border-r border-border bg-card/40 lg:w-64">
      <nav className="py-4">
        {groups.map((group) => (
          <SidebarItem key={group.path} node={group} depth={0} pathname={pathname} />
        ))}
      </nav>
    </aside>
  );
}
