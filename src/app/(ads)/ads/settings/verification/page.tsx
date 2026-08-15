"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function VerificationPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Verification" description="Business verification status and eligibility." />
      <TabBar tabs={["Status", "Documents", "Start Verification"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-3">
          <div className="rounded-xl border border-neutral-100 bg-white p-5">
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">Verification status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-neutral-500">Business verification</span><StatusBadge status="active" /></div>
              <div className="flex justify-between"><span className="text-neutral-500">Creator-engagement eligibility</span><StatusBadge status="active" /></div>
              <div className="flex justify-between"><span className="text-neutral-500">Analytics eligibility</span><StatusBadge status="active" /></div>
              <div className="flex justify-between"><span className="text-neutral-500">Creator-payment eligibility</span><StatusBadge status="pending_review" /></div>
            </div>
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Documents content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Start Verification content</p></div>
      )}
    </div>
  );
}
