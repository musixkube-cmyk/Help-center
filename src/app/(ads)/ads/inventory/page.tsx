"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function PlacementsAndInventoryPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === 5 ? new Set() : new Set(["1","2","3","4","5"].map(String))); };

  return (
    <div>
      <PageHeader title="Placements & Inventory" description="Review placement performance and manage inventory allocation." />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Total impressions" value="142K" delta="+8%" deltaType="positive" />
        <MetricCard label="In-Feed Audio" value="68K" />
        <MetricCard label="In-Feed Video" value="42K" />
        <MetricCard label="Top Feed" value="32K" />
      </div>

      <FilterBar searchPlaceholder="Search…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
        { label: "Pause", onClick: () => {} },
        { label: "Resume", onClick: () => {} },
        { label: "Delete", onClick: () => {}, variant: "danger" as const },
      ]} />

      <DataTable
        columns={[
          { key: "placement", label: "Placement", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "impressions", label: "Impressions" },
          { key: "clicks", label: "Clicks" },
          { key: "ctr", label: "CTR" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={[
            { id: "1", placement: "In-Feed Audio", impressions: "68K", clicks: "890", ctr: "1.31%", status: "active" },
            { id: "2", placement: "In-Feed Video", impressions: "42K", clicks: "520", ctr: "1.24%", status: "active" },
            { id: "3", placement: "Top Feed", impressions: "32K", clicks: "410", ctr: "1.28%", status: "active" },
            { id: "4", placement: "Search Ads", impressions: "12K", clicks: "180", ctr: "1.50%", status: "active" },
            { id: "5", placement: "Catalog Ads", impressions: "8K", clicks: "95", ctr: "1.19%", status: "paused" },
        ]}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
