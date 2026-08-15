"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AudienceDetailPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Audience Detail" description="View audience definition, size, usage, and activity." />
      <TabBar tabs={["Overview", "Definition", "Usage", "Insights"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Estimated size" value="~42M" />
            <MetricCard label="Used in campaigns" value="3" />
            <MetricCard label="Type" value="Demographic" />
            <MetricCard label="Status" value="Active" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Definition content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Usage content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Insights content</p></div>
      )}
    </div>
  );
}
