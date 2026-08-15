"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function ProductDetailPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Product Detail" description="View and edit product information." />
      <TabBar tabs={["Overview", "Details", "Edit"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Price" value="$29.99" />
            <MetricCard label="Availability" value="In stock" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Details content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Edit content</p></div>
      )}
    </div>
  );
}
