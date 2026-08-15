"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const experiments = [
          { id: "1", name: "Summer CBO vs ABO test", type: "Split Test", status: "active", startDate: "Aug 1, 2026" },
          { id: "2", name: "Audio vs Video lift study", type: "Lift Study", status: "completed", startDate: "Jul 15, 2026" }
];

export default function ExperimentsAndStudiesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === experiments.length ? new Set() : new Set(experiments.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Experiments & Studies" description="Manage A/B tests, lift studies, and experiments." actions={<Link href="/ads/measure/experiments/create"><Button>Create Experiment</Button></Link>} />

      <FilterBar searchPlaceholder="Search experiments…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "End", onClick: () => {} },
          { label: "Archive", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Experiment", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "startDate", label: "Start" }
        ]}
        data={experiments}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
