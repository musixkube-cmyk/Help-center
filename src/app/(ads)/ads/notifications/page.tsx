"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const notifications = [
          { id: "1", title: "Campaign budget depleted", type: "Issue", status: "active", date: "Aug 12, 2026" },
          { id: "2", title: "New feature: AI Creative Studio", type: "Feature", status: "draft", date: "Aug 11, 2026" },
          { id: "3", title: "Invoice INV-2026-08 ready", type: "Announcement", status: "completed", date: "Aug 10, 2026" },
          { id: "4", title: "Policy violation on Ad #4321", type: "Issue", status: "rejected", date: "Aug 9, 2026" }
];

export default function NotificationCenterPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === notifications.length ? new Set() : new Set(notifications.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Notification Center" description="View and manage all account notifications and alerts."  />

      <FilterBar searchPlaceholder="Search notifications…" onSearch={setSearch} filters={[
          { label: "Type", options: ["Issue", "Announcement", "Feature", "Ticket", "Promotion"] }
      ]} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Mark read", onClick: () => {} },
          { label: "Dismiss", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "title", label: "Notification", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "date", label: "Date" }
        ]}
        data={notifications}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
