"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function PlanningToolsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Planning Tools" description="Keyword research, negative keywords, and campaign planning." />
      <TabBar tabs={["Keyword Planner", "Negative Keywords"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Keyword Planner content</p></div>
      )},
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Negative Keywords content</p></div>
      )}
    </div>
  );
}
