"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function GMVMaxPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === 3 ? new Set() : new Set(["1","2","3"].map(String))); };

  return (
    <div>
      <PageHeader title="GMV Max" description="Maximize gross merchandise value with optimized campaign delivery." />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="GMV" value="$124K" delta="+18%" deltaType="positive" />
        <MetricCard label="ROAS" value="4.2x" delta="+0.3x" deltaType="positive" />
        <MetricCard label="Active campaigns" value="8" />
        <MetricCard label="Avg. order value" value="$31.20" delta="+$2.40" deltaType="positive" />
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
          { key: "gmv", label: "GMV" },
          { key: "roas", label: "ROAS" },
          { key: "spend", label: "Spend" }
        ]}
        data={[
            { id: "1", name: "GMV Max — Electronics", status: "active", gmv: "$52K", roas: "5.1x", spend: "$10.2K" },
            { id: "2", name: "GMV Max — Apparel", status: "active", gmv: "$38K", roas: "3.8x", spend: "$10K" },
            { id: "3", name: "GMV Max — Music Gear", status: "paused", gmv: "$34K", roas: "3.9x", spend: "$8.7K" },
        ]}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
