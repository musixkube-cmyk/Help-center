"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function MediaInsightsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Media Insights" description="Video and audio scorecards, engagement charts, creative drilldowns." />
      <TabBar tabs={["Video Insights", "Audio Engagement", "Video Engagement", "Streams", "SVI", "Creative Inspiration"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Video views" value="24K" delta="+15%" deltaType="positive" />
            <MetricCard label="Avg. watch time" value="8.2s" />
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Audio Engagement content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Video Engagement content</p></div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Streams content</p></div>
      )},
      {tab === 4 && (
        <p className="text-sm text-neutral-500 mb-4">Synchronized Visual Impressions</p>
      )},
      {tab === 5 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Creative Inspiration content</p></div>
      )}
    </div>
  );
}
