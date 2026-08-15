"use client";

import { useState } from "react";
import { PageHeader, MetricCard, FilterBar, DataTable, StatusBadge, TabBar, BulkActionToolbar, Button } from "@/components/ads/ui";

export default function AnalyticsOverview() {
  const [view, setView] = useState(0);

  return (
    <div>
      <PageHeader title="Analytics Overview" description="Diagnose performance across campaigns, ad groups, ads, and audiences." />

      {/* Breakdown selector */}
      <div className="mb-6 flex gap-2">
        {["Campaign", "Ad Group", "Ad", "Audience", "Creative", "Delivery"].map((v, i) => (
          <button key={v} onClick={() => setView(i)} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${i === view ? "bg-neutral-900 text-white" : "border border-neutral-200 text-neutral-600 hover:bg-neutral-50"}`}>{v}</button>
        ))}
      </div>

      {/* Metric scorecards */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-6">
        <MetricCard label="Spend" value="$3,680" delta="+12%" deltaType="positive" />
        <MetricCard label="Impressions" value="142K" delta="+8%" deltaType="positive" />
        <MetricCard label="Clicks" value="1,824" delta="+5%" deltaType="positive" />
        <MetricCard label="CTR" value="1.28%" delta="+0.05%" deltaType="positive" />
        <MetricCard label="CPA" value="$19.78" delta="-$1.20" deltaType="positive" />
        <MetricCard label="ROAS" value="3.4x" delta="+0.2x" deltaType="positive" />
      </div>

      {/* Date + column controls */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <select className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700"><option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option></select>
          <select className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700"><option>Breakdown: None</option><option>By placement</option><option>By audience</option><option>By device</option><option>By time</option></select>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Customize columns</Button>
          <Button variant="secondary">Export</Button>
        </div>
      </div>

      {/* Performance table */}
      <DataTable
        columns={[
          { key: "name", label: "Campaign", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          { key: "spend", label: "Spend" },
          { key: "impressions", label: "Impressions" },
          { key: "clicks", label: "Clicks" },
          { key: "ctr", label: "CTR" },
          { key: "cpa", label: "CPA" },
          { key: "conversions", label: "Conversions" },
        ]}
        data={[
          { id: "1", name: "Summer Launch 2026", status: "active", spend: "$2,450", impressions: "89.2K", clicks: "1,230", ctr: "1.38%", cpa: "$13.17", conversions: "186" },
          { id: "2", name: "Brand Awareness Push", status: "active", spend: "$890", impressions: "45K", clicks: "520", ctr: "1.16%", cpa: "$21.20", conversions: "42" },
          { id: "3", name: "Catalog Carousel Test", status: "paused", spend: "$340", impressions: "7.8K", clicks: "89", ctr: "1.14%", cpa: "$24.50", conversions: "14" },
        ]}
        rowHref={(row) => `/ads/campaigns/${row.id}`}
      />
    </div>
  );
}
