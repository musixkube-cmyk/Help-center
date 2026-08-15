"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const websiteleads = [
          { id: "1", source: "Homepage contact form", leads: "34", campaign: "Summer Launch 2026", status: "active" },
          { id: "2", source: "Pricing page form", leads: "18", campaign: "Brand Awareness Push", status: "active" }
];

export default function WebsiteFormsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === websiteleads.length ? new Set() : new Set(websiteleads.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Website Forms" description="Track leads from website form submissions."  />

      <FilterBar searchPlaceholder="Search websiteleads…" onSearch={setSearch} />


      <DataTable
        columns={[
          { key: "source", label: "Source", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "leads", label: "Leads" },
          { key: "campaign", label: "Campaign" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={websiteleads}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
