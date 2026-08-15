"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, StatusBadge, Button } from "@/components/ads/ui";

const adGroups = [
  { id: "ag1", name: "Young Music Fans", campaign: "Summer Launch 2025", status: "active" as const, budget: "$1,500/day", impressions: "210K", clicks: "6.2K", ctr: "2.95%" },
  { id: "ag2", name: "Broad Reach — US", campaign: "Brand Awareness Q2", status: "active" as const, budget: "$3,000/day", impressions: "580K", clicks: "4.1K", ctr: "0.71%" },
  { id: "ag3", name: "Retargeting Pool", campaign: "Summer Launch 2025", status: "paused" as const, budget: "$500/day", impressions: "42K", clicks: "1.8K", ctr: "4.29%" },
  { id: "ag4", name: "Podcast Listeners 25-44", campaign: "Podcast Discovery", status: "active" as const, budget: "$800/day", impressions: "95K", clicks: "2.3K", ctr: "2.42%" },
];

const columns = [
  { key: "name", label: "Ad Group" },
  { key: "campaign", label: "Campaign" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "budget", label: "Budget" },
  { key: "impressions", label: "Impressions" },
  { key: "clicks", label: "Clicks" },
  { key: "ctr", label: "CTR" },
];

export default function AdGroupsPage() {
  const [search, setSearch] = useState("");
  const filtered = adGroups.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Ad Groups"
        description="Organize your campaigns with targeted ad groups."
        breadcrumbs={[{ label: "Ads Manager", href: "/ads/ads-manager" }, { label: "Ad Groups" }]}
        actions={<Button>+ Create Ad Group</Button>}
      />
      <FilterBar searchPlaceholder="Search ad groups…" onSearch={setSearch} />
      <DataTable columns={columns} data={filtered} />
    </div>
  );
}
