"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AdGroupDetailPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Ad Group Detail" description="View and manage this ad group." />
      <TabBar tabs={["Overview", "Audience", "Placements", "Delivery", "Analytics", "Activity"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Budget" value="$50/day" />
            <MetricCard label="Spend" value="$1,240" />
            <MetricCard label="Results" value="620 clicks" />
            <MetricCard label="CTR" value="1.8%" delta="+0.2%" deltaType="positive" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Audience content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Placements content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Delivery content</p></div>
      )},
      {tab === 4 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Analytics content</p></div>
      )},
      {tab === 5 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Activity content</p></div>
      )}
    </div>
  );
}
