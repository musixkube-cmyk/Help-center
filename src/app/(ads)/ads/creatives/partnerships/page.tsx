"use client";

import { PageHeader, DataTable, StatusBadge, Button, MetricCard } from "@/components/ads/ui";

const partners = [
  { id: "p1", name: "Creative Studio X", type: "Production", status: "active" as const, campaigns: 8, lastActive: "2 days ago" },
  { id: "p2", name: "SoundDesign Co.", type: "Audio Production", status: "active" as const, campaigns: 3, lastActive: "1 week ago" },
  { id: "p3", name: "VidCraft Agency", type: "Video Production", status: "pending_review" as const, campaigns: 0, lastActive: "Pending approval" },
  { id: "p4", name: "Influencer Connect", type: "Creator Partnership", status: "active" as const, campaigns: 12, lastActive: "Today" },
];

const columns = [
  { key: "name", label: "Partner" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "campaigns", label: "Active Campaigns" },
  { key: "lastActive", label: "Last Active" },
];

export default function CreativePartnershipsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Creative Partnerships"
        description="Manage partnerships with creative agencies, production studios, and content creators."
        breadcrumbs={[{ label: "Creatives", href: "/ads/creatives" }, { label: "Partnerships" }]}
        actions={<Button>+ Add Partner</Button>}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Active Partners" value="3" delta="1 pending approval" deltaType="neutral" />
        <MetricCard label="Partner Campaigns" value="23" delta="+5 this month" deltaType="positive" />
        <MetricCard label="Total Partner Spend" value="$48,200" prefix="$" delta="this month" deltaType="neutral" />
      </div>
      <DataTable columns={columns} data={partners} />
    </div>
  );
}
