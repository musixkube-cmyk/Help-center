"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const reports = [
          { id: "1", name: "Weekly Campaign Summary", type: "Campaign", schedule: "Every Monday", status: "active", lastRun: "Aug 11, 2026" },
          { id: "2", name: "Monthly ROI Report", type: "Financial", schedule: "1st of month", status: "active", lastRun: "Aug 1, 2026" },
          { id: "3", name: "Ad Group Performance", type: "Ad Group", schedule: "Manual", status: "completed", lastRun: "Jul 28, 2026" }
];

export default function ReportsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === reports.length ? new Set() : new Set(reports.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Reports" description="Create, schedule, and export custom reports." actions={<Link href="/ads/measure/reports/create"><Button>Create Report</Button></Link>} />

      <FilterBar searchPlaceholder="Search reports…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Schedule", onClick: () => {} },
          { label: "Export CSV", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Report", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "schedule", label: "Schedule" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "lastRun", label: "Last run" }
        ]}
        data={reports}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
