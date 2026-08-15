"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const ads = [
          { id: "1", name: "Summer Audio Ad 1", campaign: "Summer Launch 2026", status: "active", type: "Audio", results: "340 clicks" },
          { id: "2", name: "Summer Companion Banner", campaign: "Summer Launch 2026", status: "active", type: "Companion", results: "280 clicks" },
          { id: "3", name: "Brand Push — Video", campaign: "Brand Awareness Push", status: "active", type: "Video", results: "22K impr." },
          { id: "4", name: "Catalog Carousel Ad", campaign: "Catalog Carousel Test", status: "paused", type: "Carousel", results: "45 clicks" }
];

export default function AdsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === ads.length ? new Set() : new Set(ads.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Ads" description="View and manage all ads across campaigns." actions={<Link href="/ads/campaigns/create"><Button>Create Ad</Button></Link>} />

      <FilterBar searchPlaceholder="Search ads…" onSearch={setSearch} filters={[
          { label: "Status", options: ["Active", "Paused", "Draft"] },
          { label: "Type", options: ["Audio", "Video", "Companion", "Carousel"] }
      ]} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Pause", onClick: () => {} },
          { label: "Resume", onClick: () => {} },
          { label: "Duplicate", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Ad", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "campaign", label: "Campaign" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "type", label: "Type" },
          { key: "results", label: "Results" }
        ]}
        data={ads}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
