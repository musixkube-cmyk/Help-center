"use client";

import { PageHeader, DataTable, StatusBadge, Button, MetricCard } from "@/components/ads/ui";

const vendors = [
  { id: "v1", name: "DoubleVerify", type: "Viewability & Fraud", status: "active" as const, lastSync: "2 hr ago", metrics: "Viewability: 92%, Fraud: 0.3%" },
  { id: "v2", name: "IAS", type: "Brand Safety", status: "active" as const, lastSync: "1 hr ago", metrics: "Safe: 99.1%, Risk: 0.9%" },
  { id: "v3", name: "Moat", type: "Attention Metrics", status: "active" as const, lastSync: "3 hr ago", metrics: "Attention: 4.2s, In-view: 88%" },
  { id: "v4", name: "Neustar", type: "Audience Verification", status: "paused" as const, lastSync: "2 days ago", metrics: "Paused" },
  { id: "v5", name: "Comscore", type: "Cross-Platform Reach", status: "active" as const, lastSync: "6 hr ago", metrics: "Deduped reach: 38M" },
];

const columns = [
  { key: "name", label: "Vendor" },
  { key: "type", label: "Measurement Type" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "lastSync", label: "Last Sync" },
  { key: "metrics", label: "Key Metrics" },
];

export default function ThirdPartyPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Third-Party Measurement"
        description="Integrate and manage third-party measurement vendors for independent verification."
        breadcrumbs={[{ label: "Analytics", href: "/ads/analytics" }, { label: "Third-Party" }]}
        actions={<Button>+ Add Vendor</Button>}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Active Vendors" value="4" delta="1 paused" deltaType="neutral" />
        <MetricCard label="Avg. Viewability" value="92%" delta="+2% vs last month" deltaType="positive" />
        <MetricCard label="Brand Safety Score" value="99.1%" delta="across all vendors" deltaType="neutral" />
      </div>
      <DataTable columns={columns} data={vendors} />
    </div>
  );
}
