"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const invoices = [
          { id: "1", invoice: "INV-2026-08", date: "Aug 1, 2026", amount: "$3,680.00", status: "active", due: "Aug 15, 2026" },
          { id: "2", invoice: "INV-2026-07", date: "Jul 1, 2026", amount: "$2,140.00", status: "completed", due: "Jul 15, 2026" },
          { id: "3", invoice: "INV-2026-06", date: "Jun 1, 2026", amount: "$1,890.00", status: "completed", due: "Jun 15, 2026" }
];

export default function InvoicesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === invoices.length ? new Set() : new Set(invoices.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Invoices" description="View and download billing invoices."  />

      <FilterBar searchPlaceholder="Search invoices…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Download PDF", onClick: () => {} },
          { label: "Export CSV", onClick: () => {} }
      ]} />

      <DataTable
        columns={[
          { key: "invoice", label: "Invoice", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "date", label: "Date" },
          { key: "amount", label: "Amount" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "due", label: "Due date" }
        ]}
        data={invoices}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
