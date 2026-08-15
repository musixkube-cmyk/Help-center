"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const adgroups = [
          { id: "1", name: "AG — Summer Launch", campaign: "Summer Launch 2026", status: "active", budget: "$50/day", results: "620 clicks" },
          { id: "2", name: "AG — Brand Push", campaign: "Brand Awareness Push", status: "active", budget: "$30/day", results: "22K impr." },
          { id: "3", name: "AG — Catalog Test", campaign: "Catalog Carousel Test", status: "paused", budget: "$20/day", results: "45 clicks" }
];

export default function AdGroupsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === adgroups.length ? new Set() : new Set(adgroups.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Ad Groups" description="Manage ad groups across all campaigns." actions={<Link href="/ads/campaigns/create"><Button>Create Ad Group</Button></Link>} />

      <FilterBar searchPlaceholder="Search adgroups…" onSearch={setSearch} filters={[
          { label: "Status", options: ["Active", "Paused", "Draft"] },
          { label: "Campaign", options: ["Summer Launch 2026", "Brand Awareness Push"] }
      ]} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Pause", onClick: () => {} },
          { label: "Resume", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Ad Group", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "campaign", label: "Campaign" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "budget", label: "Budget" },
          { key: "results", label: "Results" }
        ]}
        data={adgroups}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
