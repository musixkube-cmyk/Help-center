"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, StatusBadge, Button } from "@/components/ads/ui";

const ads = [
  { id: "a1", name: "Summer Anthem — Audio", adGroup: "Young Music Fans", type: "Audio", status: "active" as const, impressions: "120K", clicks: "3.5K", ctr: "2.92%" },
  { id: "a2", name: "Brand Story — Video", adGroup: "Broad Reach — US", type: "Video", status: "active" as const, impressions: "340K", clicks: "2.1K", ctr: "0.62%" },
  { id: "a3", name: "New Release Display", adGroup: "Retargeting Pool", type: "Display", status: "paused" as const, impressions: "42K", clicks: "1.8K", ctr: "4.29%" },
  { id: "a4", name: "Podcast Promo — Audio", adGroup: "Podcast Listeners 25-44", type: "Audio", status: "active" as const, impressions: "78K", clicks: "1.9K", ctr: "2.44%" },
  { id: "a5", name: "Holiday Sale — Companion", adGroup: "Young Music Fans", type: "Companion", status: "draft" as const, impressions: "—", clicks: "—", ctr: "—" },
];

const columns = [
  { key: "name", label: "Ad" },
  { key: "adGroup", label: "Ad Group" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "impressions", label: "Impressions" },
  { key: "clicks", label: "Clicks" },
  { key: "ctr", label: "CTR" },
];

export default function AdsListPage() {
  const [search, setSearch] = useState("");
  const filtered = ads.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Ads"
        description="Manage all your ad creatives and their delivery."
        breadcrumbs={[{ label: "Ads Manager", href: "/ads/ads-manager" }, { label: "Ads" }]}
        actions={<Button>+ Create Ad</Button>}
      />
      <FilterBar
        searchPlaceholder="Search ads…"
        onSearch={setSearch}
        filters={[
          { label: "Type", options: ["Audio", "Video", "Display", "Companion"] },
          { label: "Status", options: ["Active", "Paused", "Draft"] },
        ]}
      />
      <DataTable columns={columns} data={filtered} />
    </div>
  );
}
