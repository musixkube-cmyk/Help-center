"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AssetDetailPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Asset Detail" description="View asset details, versions, and usage." />
      <TabBar tabs={["Overview", "Versions", "Tags", "Usage"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <div className="flex h-48 items-center justify-center text-sm text-neutral-400">Asset preview</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Used in campaigns" value="3" />
            <MetricCard label="Performance score" value="8.2/10" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Versions content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Tags content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Usage content</p></div>
      )}
    </div>
  );
}
