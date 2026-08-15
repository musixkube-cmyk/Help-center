"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AnalyticsOverviewPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === 3 ? new Set() : new Set(["1","2","3"].map(String))); };

  return (
    <div>
      <PageHeader title="Analytics Overview" description="High-level performance across all campaigns and ad groups." />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Spend" value="$3,680" delta="+12%" deltaType="positive" />
        <MetricCard label="Impressions" value="142K" delta="+8%" deltaType="positive" />
        <MetricCard label="Clicks" value="1,760" delta="+5%" deltaType="positive" />
        <MetricCard label="Conversions" value="124" delta="+18%" deltaType="positive" />
      </div>

      <FilterBar searchPlaceholder="Search…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
        { label: "Pause", onClick: () => {} },
        { label: "Resume", onClick: () => {} },
        { label: "Delete", onClick: () => {}, variant: "danger" as const },
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Campaign", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "impressions", label: "Impressions" },
          { key: "clicks", label: "Clicks" },
          { key: "ctr", label: "CTR" },
          { key: "cpa", label: "CPA" }
        ]}
        data={[
            { id: "1", name: "Summer Launch 2026", status: "active", impressions: "68K", clicks: "890", ctr: "1.31%", cpa: "$2.75" },
            { id: "2", name: "Brand Awareness Push", status: "active", impressions: "42K", clicks: "520", ctr: "1.24%", cpa: "$1.71" },
            { id: "3", name: "Catalog Carousel Test", status: "paused", impressions: "32K", clicks: "350", ctr: "1.09%", cpa: "$3.40" },
        ]}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
