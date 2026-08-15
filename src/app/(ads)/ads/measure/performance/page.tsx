"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function PerformanceMetricsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Performance Metrics" description="Drill into campaign, ad group, and ad-level performance." />
      <TabBar tabs={["Campaigns", "Ad Groups", "Ads", "Delivery"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="CPC" value="$2.09" delta="-$0.15" deltaType="positive" />
            <MetricCard label="CPM" value="$8.45" />
            <MetricCard label="CPA" value="$2.99" delta="-$0.21" deltaType="positive" />
            <MetricCard label="ROAS" value="3.4x" delta="+0.2x" deltaType="positive" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Ad Groups content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Ads content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Delivery content</p></div>
      )}
    </div>
  );
}
