"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const audiences = [
          { id: "1", name: "Broad US 18-55", type: "Demographic", size: "~42M", status: "active", updated: "Aug 10, 2026" },
          { id: "2", name: "Custom — Past Purchasers", type: "Custom", size: "~12K", status: "active", updated: "Aug 8, 2026" },
          { id: "3", name: "Lookalike — Purchasers 1%", type: "Lookalike", size: "~2.1M", status: "active", updated: "Aug 5, 2026" },
          { id: "4", name: "Artist Affinity — EDM", type: "Artist Affinity", size: "~890K", status: "active", updated: "Aug 1, 2026" }
];

export default function AudiencesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === audiences.length ? new Set() : new Set(audiences.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Audiences" description="Create and manage reusable audiences — custom, lookalike, artist affinity, demographics." actions={<Link href="/ads/assets/audiences/create"><Button>Create Audience</Button></Link>} />

      <FilterBar searchPlaceholder="Search audiences…" onSearch={setSearch} filters={[
          { label: "Type", options: ["Custom", "Lookalike", "Demographic", "Artist Affinity", "Music Behavior", "Exclusion"] }
      ]} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Create lookalike", onClick: () => {} },
          { label: "Export", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Audience", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "size", label: "Size" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "updated", label: "Updated" }
        ]}
        data={audiences}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
