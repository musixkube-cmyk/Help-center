"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function ClientDetailPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Client Detail" description="View client account, campaigns, and performance." />
      <TabBar tabs={["Overview", "Campaigns", "Billing"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="grid grid-cols-2 gap-4">
          <MetricCard label="Monthly spend" value="$12K" />
          <MetricCard label="ROAS" value="4.2x" />
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Campaigns content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Billing content</p></div>
      )}
    </div>
  );
}
