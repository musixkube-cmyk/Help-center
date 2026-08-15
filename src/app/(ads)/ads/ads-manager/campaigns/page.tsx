"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, StatusBadge, Button, BulkActionToolbar } from "@/components/ads/ui";

const campaigns = [
  { id: "c1", name: "Summer Launch 2025", objective: "Traffic", status: "active" as const, budget: "$5,000", spend: "$3,210", impressions: "428K", clicks: "12.4K", ctr: "2.9%" },
  { id: "c2", name: "Brand Awareness Q2", objective: "Reach", status: "active" as const, budget: "$10,000", spend: "$7,840", impressions: "1.2M", clicks: "8.1K", ctr: "0.7%" },
  { id: "c3", name: "New Artist Promo", objective: "Video Views", status: "paused" as const, budget: "$2,500", spend: "$1,100", impressions: "89K", clicks: "3.2K", ctr: "3.6%" },
  { id: "c4", name: "Holiday Retargeting", objective: "Sales", status: "draft" as const, budget: "$8,000", spend: "$0", impressions: "—", clicks: "—", ctr: "—" },
  { id: "c5", name: "Podcast Discovery", objective: "Music Streams", status: "active" as const, budget: "$3,000", spend: "$2,490", impressions: "310K", clicks: "9.7K", ctr: "3.1%" },
  { id: "c6", name: "Lead Gen - Newsletter", objective: "Lead Generation", status: "in_review" as const, budget: "$1,500", spend: "$0", impressions: "—", clicks: "—", ctr: "—" },
];

const columns = [
  { key: "name", label: "Campaign" },
  { key: "objective", label: "Objective" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "budget", label: "Budget" },
  { key: "spend", label: "Spend" },
  { key: "impressions", label: "Impressions" },
  { key: "clicks", label: "Clicks" },
  { key: "ctr", label: "CTR" },
];

export default function CampaignsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");

  const filtered = campaigns.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === filtered.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filtered.map((c) => c.id)));
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Campaigns"
        description="View and manage all your advertising campaigns."
        breadcrumbs={[{ label: "Ads Manager", href: "/ads/ads-manager" }, { label: "Campaigns" }]}
        actions={
          <Button onClick={() => window.location.href = "/ads/ads-manager/campaigns/create"}>
            + Create Campaign
          </Button>
        }
      />

      <FilterBar
        searchPlaceholder="Search campaigns…"
        onSearch={setSearch}
        filters={[
          { label: "Status", options: ["Active", "Paused", "Draft", "In Review"] },
          { label: "Objective", options: ["Reach", "Traffic", "Video Views", "Sales", "Music Streams", "Lead Generation"] },
        ]}
      />

      <BulkActionToolbar
        selectedCount={selected.size}
        actions={[
          { label: "Pause", onClick: () => {} },
          { label: "Resume", onClick: () => {} },
          { label: "Duplicate", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" },
        ]}
      />

      <DataTable
        columns={columns}
        data={filtered}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
        rowHref={(row) => `/ads/campaigns/${row.id}`}
      />
    </div>
  );
}
