"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AdsPlansAndSubscriptionsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Ads Plans & Subscriptions" description="Manage your flat-rate ad plans, media plans, and subscriptions." />
      <TabBar tabs={["Current Plan", "Available Plans", "History"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">Social Scroll — Medium</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div><span className="text-neutral-500">Monthly commitment</span><p className="font-medium text-neutral-900">$2,400/mo</p></div>
              <div><span className="text-neutral-500">Renewal date</span><p className="font-medium text-neutral-900">Sep 1, 2026</p></div>
              <div><span className="text-neutral-500">Status</span><p className="font-medium text-emerald-600">Active</p></div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Upgrade</Button>
            <Button variant="secondary">Downgrade</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Available Plans content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">History content</p></div>
      )}
    </div>
  );
}
