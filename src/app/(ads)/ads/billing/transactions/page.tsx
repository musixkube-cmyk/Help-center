"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const transactions = [
          { id: "1", txn: "TXN-8924", type: "Charge", amount: "$120.00", date: "Aug 12, 2026", status: "active" },
          { id: "2", txn: "TXN-8923", type: "Charge", amount: "$95.00", date: "Aug 11, 2026", status: "active" },
          { id: "3", txn: "TXN-8922", type: "Refund", amount: "$15.00", date: "Aug 10, 2026", status: "completed" }
];

export default function TransactionsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === transactions.length ? new Set() : new Set(transactions.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Transactions" description="Full transaction history for your account."  />

      <FilterBar searchPlaceholder="Search transactions…" onSearch={setSearch} />


      <DataTable
        columns={[
          { key: "txn", label: "Transaction", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "amount", label: "Amount" },
          { key: "date", label: "Date" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={transactions}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
