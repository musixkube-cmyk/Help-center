"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const catalogs = [
          { id: "1", name: "Main Product Catalog", products: "1,240", feed: "Healthy", status: "active", updated: "Aug 10, 2026" },
          { id: "2", name: "Holiday Collection", products: "86", feed: "2 warnings", status: "active", updated: "Aug 5, 2026" }
];

export default function CatalogManagerPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === catalogs.length ? new Set() : new Set(catalogs.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Catalog Manager" description="Manage product catalogs, feeds, and inventory." actions={<Link href="/ads/assets/catalogs/create"><Button>Create Catalog</Button></Link>} />

      <FilterBar searchPlaceholder="Search catalogs…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Sync feed", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Catalog", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "products", label: "Products" },
          { key: "feed", label: "Feed health" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "updated", label: "Updated" }
        ]}
        data={catalogs}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
