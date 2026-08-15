"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const forms = [
          { id: "1", name: "Summer Lead Form", campaign: "Summer Launch 2026", submissions: "48", status: "active", created: "Jul 15, 2026" },
          { id: "2", name: "Brand Interest Form", campaign: "Brand Awareness Push", submissions: "22", status: "active", created: "Aug 1, 2026" }
];

export default function InstantFormsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === forms.length ? new Set() : new Set(forms.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Instant Forms" description="Create and manage lead-generation forms." actions={<Link href="/ads/leads/instant-forms/create"><Button>Create Form</Button></Link>} />

      <FilterBar searchPlaceholder="Search forms…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Preview", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Form", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "campaign", label: "Campaign" },
          { key: "submissions", label: "Submissions" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "created", label: "Created" }
        ]}
        data={forms}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
