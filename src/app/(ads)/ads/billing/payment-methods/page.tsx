"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const methods = [
          { id: "1", method: "Visa ending 4242", type: "Credit card", last4: "4242", expiry: "12/27", isDefault: "Yes" },
          { id: "2", method: "Mastercard ending 8888", type: "Credit card", last4: "8888", expiry: "06/26", isDefault: "No" }
];

export default function PaymentMethodsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === methods.length ? new Set() : new Set(methods.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Payment Methods" description="Add and manage payment methods for your account." actions={<Link href="/ads/billing/payment-methods/add"><Button>Add Payment Method</Button></Link>} />

      <FilterBar searchPlaceholder="Search methods…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Set default", onClick: () => {} },
          { label: "Remove", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "method", label: "Method", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "last4", label: "Last 4" },
          { key: "expiry", label: "Expiry" },
          { key: "isDefault", label: "Default" }
        ]}
        data={methods}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
