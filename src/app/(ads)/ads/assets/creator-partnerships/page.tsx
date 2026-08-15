"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function CreatorPartnershipsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Creator Partnerships" description="Collaborate with creators, manage projects, and sync relationships." />
      <TabBar tabs={["Overview", "Projects", "Creators"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <CardGrid cards={[
            { label: "Get started with creators", href: "/ads/assets/creator-partnerships", description: "Browse and connect with creators." },
            { label: "Active projects", href: "/ads/assets/creator-partnerships", description: "Manage ongoing collaborations." },
            { label: "Creator relationships", href: "/ads/assets/creator-partnerships", description: "View and sync direct relationships." },
          ]} />
        </div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Projects content</p></div>
      )},
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Creators content</p></div>
      )}
    </div>
  );
}
