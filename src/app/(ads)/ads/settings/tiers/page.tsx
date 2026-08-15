"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function PlanAndTierStatusPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Plan & Tier Status" description="View account tier status and upgrade requirements." />
      <TabBar tabs={["Current Tier", "Requirements", "History"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Tier 2 — Growth</h3>
                <p className="mt-1 text-xs text-neutral-500">Increased limits and priority support</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">Active</span>
            </div>
          </div>
          <Button variant="secondary">View upgrade requirements</Button>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Requirements content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">History content</p></div>
      )}
    </div>
  );
}
