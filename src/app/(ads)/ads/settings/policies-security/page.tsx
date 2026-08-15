"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function PoliciesAndSecurityPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Policies & Security" description="Advertising policies, content guidelines, privacy, and security settings." />
      <TabBar tabs={["Advertising Policy", "Audio Content Guidelines", "Privacy Practices", "Security", "Brand Safety"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Advertising Policy content</p></div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Audio Content Guidelines content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Privacy Practices content</p></div>
      )},
      {tab === 3 && (
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-100 bg-white p-5 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-900">Security overview</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-neutral-500">Two-factor authentication</span><span className="text-emerald-600 font-medium">Enabled</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Session timeout</span><span className="text-neutral-700">30 minutes</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">IP allowlist</span><span className="text-neutral-700">Not configured</span></div>
            </div>
          </div>
        </div>
      )},
      {tab === 4 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Brand Safety content</p></div>
      )}
    </div>
  );
}
