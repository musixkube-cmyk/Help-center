"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const assets = [
          { id: "1", name: "Summer Audio 30s", type: "Audio", status: "active", tags: "summer, launch", updated: "Aug 10, 2026" },
          { id: "2", name: "Brand Companion 1200x628", type: "Image", status: "active", tags: "brand, banner", updated: "Aug 8, 2026" },
          { id: "3", name: "Holiday Promo Video", type: "Video", status: "draft", tags: "holiday, q4", updated: "Jul 30, 2026" }
];

export default function CreativeLibraryPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === assets.length ? new Set() : new Set(assets.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Creative Library" description="Store, search, tag, and version all your creative assets." actions={<Link href="/ads/assets/creative-studio"><Button>Create Asset</Button></Link>} />

      <FilterBar searchPlaceholder="Search assets…" onSearch={setSearch} filters={[
          { label: "Type", options: ["Audio", "Image", "Video"] },
          { label: "Status", options: ["Active", "Draft", "Archived"] }
      ]} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Tag", onClick: () => {} },
          { label: "Archive", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Asset", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "tags", label: "Tags" },
          { key: "updated", label: "Updated" }
        ]}
        data={assets}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
