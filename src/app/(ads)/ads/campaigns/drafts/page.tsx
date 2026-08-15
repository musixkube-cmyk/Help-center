"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const drafts = [
          { id: "1", name: "Artist Spotlight Q3", objective: "Consideration", status: "draft", modified: "Aug 10, 2026" },
          { id: "2", name: "Holiday Promo 2026", objective: "Conversions", status: "draft", modified: "Aug 8, 2026" }
];

export default function DraftsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === drafts.length ? new Set() : new Set(drafts.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Drafts" description="Resume or discard campaign drafts."  />

      <FilterBar searchPlaceholder="Search drafts…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Resume editing", onClick: () => {} },
          { label: "Discard", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Draft", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "objective", label: "Objective" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "modified", label: "Modified" }
        ]}
        data={drafts}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
