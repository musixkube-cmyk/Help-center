import { ArrowRight } from "lucide-react";
import type { Doc, DocBlock, DocListItem } from "@/data/docs";
import { findNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

function ListItem({ item }: { item: DocListItem }) {
  return (
    <li className="flex gap-3 text-base leading-relaxed text-foreground/90">
      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <span>
        {item.lead && (
          <span className="font-semibold text-foreground">{item.lead} </span>
        )}
        {item.text}
      </span>
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
    <li className="flex gap-3 text-base leading-relaxed text-foreground/90">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
        {index + 1}
      </span>
      <span className="pt-0.5">
        {item.lead && (
          <span className="font-semibold text-foreground">{item.lead} </span>
        )}
        {item.text}
      </span>
    </li>
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
