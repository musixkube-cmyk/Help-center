"use client";

import { PageHeader, DataTable, StatusBadge, Button, MetricCard } from "@/components/ads/ui";

const integrations = [
  { id: "i1", name: "Google Analytics", type: "Analytics", status: "active" as const, connected: "Jan 10, 2025", dataFlow: "Bidirectional" },
  { id: "i2", name: "Shopify", type: "Commerce", status: "active" as const, connected: "Dec 5, 2024", dataFlow: "Import" },
  { id: "i3", name: "Slack", type: "Notifications", status: "active" as const, connected: "Feb 14, 2025", dataFlow: "Export" },
  { id: "i4", name: "Salesforce", type: "CRM", status: "paused" as const, connected: "Nov 20, 2024", dataFlow: "Bidirectional" },
  { id: "i5", name: "Segment", type: "CDP", status: "active" as const, connected: "Mar 1, 2025", dataFlow: "Export" },
  { id: "i6", name: "Meta Ads", type: "Cross-Platform", status: "pending_review" as const, connected: "Pending", dataFlow: "—" },
];

const columns = [
  { key: "name", label: "Integration" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "connected", label: "Connected" },
  { key: "dataFlow", label: "Data Flow" },
];

export default function ToolsIntegrationsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="Integrations" description="Connect external tools and platforms to enhance your advertising workflow." actions={<Button>+ Add Integration</Button>} />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Active" value="4" delta="integrations" deltaType="neutral" />
        <MetricCard label="Paused" value="1" delta="integration" deltaType="neutral" />
        <MetricCard label="Pending" value="1" delta="integration" deltaType="neutral" />
      </div>
      <DataTable columns={columns} data={integrations} />
    </div>
  );
}
