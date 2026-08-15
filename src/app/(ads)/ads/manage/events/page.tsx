"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function EventsManagerPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === 3 ? new Set() : new Set(["1","2","3"].map(String))); };

  return (
    <div>
      <PageHeader title="Events Manager" description="Configure conversion events and data sources." />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Active events" value="12" />
        <MetricCard label="Data sources" value="4" />
        <MetricCard label="Conversions (7d)" value="1,240" delta="+22%" deltaType="positive" />
        <MetricCard label="Attribution window" value="7 days" />
      </div>

      <FilterBar searchPlaceholder="Search…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
        { label: "Pause", onClick: () => {} },
        { label: "Resume", onClick: () => {} },
        { label: "Delete", onClick: () => {}, variant: "danger" as const },
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Event", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "source", label: "Source" },
          { key: "conversions", label: "Conversions (7d)" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={[
            { id: "1", name: "Purchase", source: "Website pixel", conversions: "680", status: "active" },
            { id: "2", name: "Add to cart", source: "App SDK", conversions: "340", status: "active" },
            { id: "3", name: "Lead", source: "CRM", conversions: "220", status: "active" },
        ]}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
