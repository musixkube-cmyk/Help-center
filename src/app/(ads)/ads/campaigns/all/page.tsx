"use client";
import { useState } from "react";
import Link from "next/link";
import { PageHeader, MetricCard, DataTable, StatusBadge, FilterBar, BulkActionToolbar, Button } from "@/components/ads/ui";

const rows = [{"id": "1", "name": "Item 1", "status": "active" as const, "updated": "Aug 10, 2026"}, {"id": "2", "name": "Item 2", "status": "active" as const, "updated": "Aug 8, 2026"}, {"id": "3", "name": "Item 3", "status": "draft" as const, "updated": "Aug 6, 2026"}];

export default function Page() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === rows.length ? new Set() : new Set(rows.map(r => r.id))); };
  return (
    <div>
      <PageHeader title="All" description="Manage and configure all." breadcrumbs={[{ label: "Ad Center", href: "/ads" }, { label: "Src", href: "/ads/src" }, { label: "App", href: "/ads/src/app" }, { label: "Ads", href: "/ads/src/app/ads" }, { label: "Campaigns", href: "/ads/src/app/ads/campaigns" }, { label: "All" }]} actions={<Link href="/ads"><Button variant="secondary">Create</Button></Link>} />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <MetricCard label="Total" value="3" />
        <MetricCard label="Active" value="2" />
        <MetricCard label="Updated" value="Today" />
      </div>
      <FilterBar searchPlaceholder="Search…" filters={[{ label: "Status", options: ["Active", "Draft", "Paused"] }]} />
      <BulkActionToolbar selectedCount={selected.size} actions={[{ label: "Edit", onClick: () => {} }, { label: "Archive", onClick: () => {} }, { label: "Delete", onClick: () => {}, variant: "danger" }]} />
      <DataTable
        columns={[
          { key: "name", label: "Name", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "status", label: "Status", render: (_: string, row: any) => <StatusBadge status={row.status} /> },
          { key: "updated", label: "Updated", render: (v: string) => <span className="text-neutral-400">{v}</span> },
        ]}
        data={rows} selectable selected={selected} onToggleSelect={toggleSelect} onToggleAll={toggleAll}
      />
    </div>
  );
}