"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AgencyDashboardPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === 3 ? new Set() : new Set(["1","2","3"].map(String))); };

  return (
    <div>
      <PageHeader title="Agency Dashboard" description="Agency overview with client performance and billing summaries." />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Active clients" value="12" />
        <MetricCard label="Total spend" value="$48K" delta="+15%" deltaType="positive" />
        <MetricCard label="Avg. ROAS" value="3.8x" />
        <MetricCard label="Agency commission" value="$4,200" />
      </div>

      <FilterBar searchPlaceholder="Search…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
        { label: "Pause", onClick: () => {} },
        { label: "Resume", onClick: () => {} },
        { label: "Delete", onClick: () => {}, variant: "danger" as const },
      ]} />

      <DataTable
        columns={[
          { key: "client", label: "Client", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "spend", label: "Spend" },
          { key: "roas", label: "ROAS" },
          { key: "campaigns", label: "Campaigns" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={[
            { id: "1", client: "Acme Records", spend: "$12K", roas: "4.2x", campaigns: "8", status: "active" },
            { id: "2", client: "Vibe Music Group", spend: "$9K", roas: "3.5x", campaigns: "5", status: "active" },
            { id: "3", client: "SoundWave Inc.", spend: "$6K", roas: "3.9x", campaigns: "3", status: "active" },
        ]}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
