"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, MetricCard, Button } from "@/components/ads/ui";

const keywords = [
  { id: "k1", keyword: "summer playlist", volume: "185K", competition: "High", bid: "$2.40", relevance: 95 },
  { id: "k2", keyword: "new music release", volume: "92K", competition: "Medium", bid: "$1.80", relevance: 88 },
  { id: "k3", keyword: "workout music", volume: "124K", competition: "High", bid: "$2.10", relevance: 72 },
  { id: "k4", keyword: "chill vibes", volume: "67K", competition: "Low", bid: "$0.90", relevance: 65 },
  { id: "k5", keyword: "indie discovery", volume: "28K", competition: "Low", bid: "$0.60", relevance: 82 },
  { id: "k6", keyword: "podcast comedy", volume: "51K", competition: "Medium", bid: "$1.40", relevance: 58 },
];

const columns = [
  { key: "keyword", label: "Keyword" },
  { key: "volume", label: "Monthly Volume" },
  { key: "competition", label: "Competition" },
  { key: "bid", label: "Suggested Bid" },
  { key: "relevance", label: "Relevance Score", render: (v: number) => (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 rounded-full bg-neutral-100"><div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${v}%` }} /></div>
      <span className="text-xs text-neutral-500">{v}%</span>
    </div>
  )},
];

export default function KeywordPlannerPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="Keyword Planner" description="Research keywords, view search volume, and discover new targeting opportunities." />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Keywords Researched" value="6" delta="in this session" deltaType="neutral" />
        <MetricCard label="Avg. Volume" value="91K" delta="monthly searches" deltaType="neutral" />
        <MetricCard label="Avg. Bid" value="$1.53" prefix="$" delta="suggested" deltaType="neutral" />
      </div>
      <FilterBar searchPlaceholder="Search keywords…" onSearch={setSearch} />
      <DataTable columns={columns} data={keywords} />
      <div className="mt-4 flex gap-2">
        <Button variant="secondary">Export Keywords</Button>
        <Button variant="secondary">Add to Campaign</Button>
      </div>
    </div>
  );
}
