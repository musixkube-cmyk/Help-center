"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AudienceInsightsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Audience Insights" description="Segment visualizations and demographic breakdowns." />
      <TabBar tabs={["Age", "Gender", "Genre", "Location"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <p className="text-sm text-neutral-500">Age distribution chart renders here.</p>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Gender content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Genre content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Location content</p></div>
      )}
    </div>
  );
}
