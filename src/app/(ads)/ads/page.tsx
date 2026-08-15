"use client";

import Link from "next/link";
import { MetricCard, StatusBadge, DataTable, PageHeader, FilterBar, BulkActionToolbar } from "@/components/ads/ui";
import { useState } from "react";

const campaigns = [
  { id: "1", name: "Summer Launch 2026", status: "active" as const, objective: "Conversions", spend: "$2,450", results: "1,230 clicks", resultsNum: 1230, date: "Jul 15 – Aug 12", budget: "$100/day", delivery: "On track" },
  { id: "2", name: "Brand Awareness Push", status: "active" as const, objective: "Awareness", spend: "$890", results: "45K impressions", resultsNum: 45000, date: "Aug 1 – Aug 31", budget: "$30/day", delivery: "On track" },
  { id: "3", name: "Catalog Carousel Test", status: "paused" as const, objective: "Conversions", spend: "$340", results: "89 clicks", resultsNum: 89, date: "Jun 20 – Jul 5", budget: "$20/day", delivery: "Paused" },
  { id: "4", name: "Artist Spotlight Q3", status: "draft" as const, objective: "Consideration", spend: "$0", results: "—", resultsNum: 0, date: "Not set", budget: "Not set", delivery: "—" },
  { id: "5", name: "Holiday Promo 2025", status: "completed" as const, objective: "Sales", spend: "$12,400", results: "4,200 purchases", resultsNum: 4200, date: "Dec 1 – Dec 31", budget: "$400/day", delivery: "Completed" },
];

export default function AdsDashboard() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const toggleAll = () => {
    if (selected.size === campaigns.length) setSelected(new Set());
    else setSelected(new Set(campaigns.map(c => c.id)));
  };

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Monitor account health and jump into optimization."
        actions={
          <Link href="/ads/campaigns/create" className="flex h-10 items-center gap-2 rounded-lg bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
            Create Campaign
          </Link>
        }
      />

      {/* KPI row */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Spend" value="$3,680" delta="+12% vs last period" deltaType="positive" />
        <MetricCard label="Impressions" value="142K" delta="+8%" deltaType="positive" />
        <MetricCard label="CTR" value="1.24%" delta="+0.05%" deltaType="positive" />
        <MetricCard label="CPA" value="$2.99" delta="-$0.21" deltaType="positive" />
      </div>

      {/* Delivery health */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <MetricCard label="Active campaigns" value="2" />
        <MetricCard label="Total results" value="1,319" delta="+6%" deltaType="positive" />
        <MetricCard label="ROAS" value="3.4x" delta="+0.2x" deltaType="positive" />
      </div>

      {/* Bulk actions */}
      <BulkActionToolbar
        selectedCount={selected.size}
        actions={[
          { label: "Pause", onClick: () => {} },
          { label: "Resume", onClick: () => {} },
          { label: "Duplicate", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" },
        ]}
      />

      {/* Campaign table */}
      <DataTable
        columns={[
          { key: "name", label: "Campaign", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "objective", label: "Objective" },
          { key: "budget", label: "Budget" },
          { key: "spend", label: "Spend", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "results", label: "Results" },
          { key: "delivery", label: "Delivery", render: (v: string) => <span className={v === "On track" ? "text-emerald-600" : "text-neutral-500"}>{v}</span> },
        ]}
        data={campaigns}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
        rowHref={(row) => `/ads/campaigns/${row.id}`}
      />
    </div>
  );
}
