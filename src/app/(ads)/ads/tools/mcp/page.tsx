"use client";

import { PageHeader, DataTable, StatusBadge, Button, MetricCard, FormField } from "@/components/ads/ui";

const servers = [
  { id: "s1", name: "Analytics MCP Server", version: "1.2.0", status: "active" as const, tools: 12, lastPing: "2 min ago" },
  { id: "s2", name: "Campaign Manager MCP", version: "2.0.1", status: "active" as const, tools: 8, lastPing: "30 sec ago" },
  { id: "s3", name: "Creative Tools MCP", version: "1.0.0", status: "active" as const, tools: 5, lastPing: "1 min ago" },
  { id: "s4", name: "Audience MCP Server", version: "1.1.3", status: "paused" as const, tools: 6, lastPing: "Offline" },
];

const columns = [
  { key: "name", label: "Server" },
  { key: "version", label: "Version" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "tools", label: "Available Tools" },
  { key: "lastPing", label: "Last Ping" },
];

export default function MCPPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="MCP Server Installation" description="Manage Model Context Protocol servers for AI-powered advertising tools." actions={<Button>+ Install Server</Button>} />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Active Servers" value="3" delta="1 paused" deltaType="neutral" />
        <MetricCard label="Total Tools" value="31" delta="available" deltaType="neutral" />
        <MetricCard label="Uptime" value="99.8%" delta="last 30 days" deltaType="positive" />
      </div>
      <DataTable columns={columns} data={servers} />
      <div className="mt-8 rounded-xl border border-neutral-100 bg-white p-6">
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Install New MCP Server</h3>
        <div className="space-y-3">
          <FormField label="Server URL or Package Name">
            <input placeholder="e.g., @ads/mcp-analytics or https://mcp.example.com" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>
          <FormField label="Configuration (JSON)">
            <textarea rows={4} placeholder='{"apiKey": "...", "region": "us"}' className="w-full rounded-lg border border-neutral-200 px-3 py-2 font-mono text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>
          <Button>Install Server</Button>
        </div>
      </div>
    </div>
  );
}
