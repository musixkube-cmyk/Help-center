"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const credits = [
          { id: "1", name: "Welcome credit", type: "Promotional", amount: "$500.00", expires: "Dec 31, 2026", status: "active" },
          { id: "2", name: "Spend match Q3", type: "Match", amount: "$250.00", expires: "Sep 30, 2026", status: "active" },
          { id: "3", name: "Rebate — Q2 overperformance", type: "Rebate", amount: "$75.00", expires: "No expiry", status: "completed" }
];

export default function CreditsRebatesAndPromotionsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === credits.length ? new Set() : new Set(credits.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Credits, Rebates & Promotions" description="View ad credits, rebate offers, and promotional balances."  />

      <FilterBar searchPlaceholder="Search credits…" onSearch={setSearch} />


      <DataTable
        columns={[
          { key: "name", label: "Credit", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "amount", label: "Amount" },
          { key: "expires", label: "Expires" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={credits}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
