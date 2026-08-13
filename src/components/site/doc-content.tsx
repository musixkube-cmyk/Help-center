import { ArrowRight, Info, AlertTriangle } from "lucide-react";
import type { Doc, DocBlock, DocListItem } from "@/data/docs";
import { findNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { cn } from "@/lib/utils";

function ListItem({ item }: { item: DocListItem }) {
  return (
    <li className="flex flex-col gap-1">
      <div className="flex gap-3 text-base leading-relaxed text-foreground/90">
        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <span>
          {item.lead && (
            <span className="font-semibold text-foreground">{item.lead} </span>
          )}
          {item.text}
        </span>
      </div>
      {item.children && item.children.length > 0 && (
        <ul className="ml-7 space-y-1.5 border-l border-border pl-4">
          {item.children.map((child, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
              <span>{child.text}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function OrderedListItem({
  item,
  index,
}: {
  item: DocListItem;
  index: number;
}) {
  return (
    <li className="flex flex-col gap-1">
      <div className="flex gap-3 text-base leading-relaxed text-foreground/90">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
          {index + 1}
        </span>
        <span className="pt-0.5">
          {item.lead && (
            <span className="font-semibold text-foreground">{item.lead} </span>
          )}
          {item.text}
        </span>
      </div>
      {item.children && item.children.length > 0 && (
        <ul className="ml-9 space-y-1.5 border-l border-border pl-4">
          {item.children.map((child, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
              <span>{child.text}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function CalloutBlock({
  variant = "note",
  title,
  text,
}: {
  variant?: "note" | "warning";
  title?: string;
  text: string;
}) {
  const isWarning = variant === "warning";
  return (
    <div
      className={cn(
        "mt-5 flex gap-3 border-l-2 p-4",
        isWarning
          ? "border-destructive bg-destructive/5"
          : "border-accent bg-accent/5",
      )}
    >
      {isWarning ? (
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      ) : (
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      )}
      <div className="min-w-0">
        {title && (
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground">
            {title}
          </p>
        )}
        <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
      </div>
    </div>
  );
}

function TableBlock({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-border last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-4 py-3 align-top text-foreground/90",
                    ci === 0 && "font-medium text-foreground",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mt-4 text-base leading-relaxed text-foreground/90">
          {block.text}
        </p>
      );
    case "heading": {
      const level = block.level ?? 2;
      return level === 2 ? (
        <h2 className="mt-12 mb-1 text-2xl tracking-wide text-foreground">
          {block.text}
        </h2>
      ) : (
        <h3 className="mt-8 mb-1 text-xl tracking-wide text-foreground">
          {block.text}
        </h3>
      );
    }
    case "list":
      return (
        <ul className="mt-4 space-y-2.5 pl-1">
          {block.items.map((item, i) =>
            block.ordered ? (
              <OrderedListItem key={i} item={item} index={i} />
            ) : (
              <ListItem key={i} item={item} />
            ),
          )}
        </ul>
      );
    case "callout":
      return (
        <CalloutBlock
          variant={block.variant}
          title={block.title}
          text={block.text}
        />
      );
    case "table":
      return <TableBlock headers={block.headers} rows={block.rows} />;
    default:
      return null;
  }
}

function RelatedArticles({ paths }: { paths: string[] }) {
  const items = paths
    .map((path) => ({ path, node: findNode(path) }))
    .filter((x): x is { path: string; node: NonNullable<typeof x.node> } =>
      Boolean(x.node),
    );

  if (items.length === 0) return null;

  return (
    <section className="mt-14 border-t border-border pt-8">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        Related articles
      </p>
      <ul className="mt-4 divide-y divide-border border-y border-border">
        {items.map(({ path, node }) => (
          <li key={path}>
            <NavLink
              href={path}
              className="group flex items-center justify-between gap-3 py-3.5 text-base text-foreground transition-colors hover:text-accent"
            >
              <span className="font-medium">{node.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DocContent({ doc }: { doc: Doc }) {
  return (
    <article className="mt-2 max-w-2xl">
      {doc.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
      {doc.related && doc.related.length > 0 && (
        <RelatedArticles paths={doc.related} />
      )}
    </article>
  );
}
