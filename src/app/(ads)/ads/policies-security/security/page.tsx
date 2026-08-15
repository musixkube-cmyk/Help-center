"use client";

import { PageHeader, MetricCard, DataTable, StatusBadge, Button, FormField } from "@/components/ads/ui";

const securityEvents = [
  { id: "se1", event: "Login from new device", detail: "iPhone — San Francisco, CA", time: "2 hr ago", severity: "info" as const },
  { id: "se2", event: "API key rotated", detail: "Campaign Management API", time: "1 day ago", severity: "info" as const },
  { id: "se3", event: "Failed login attempt", detail: "Unknown IP — 192.168.1.45", time: "3 days ago", severity: "warning" as const },
];

const columns = [
  { key: "event", label: "Event" },
  { key: "detail", label: "Detail" },
  { key: "time", label: "Time" },
  { key: "severity", label: "Severity", render: (v: string) => (
    <span className={`text-xs font-medium ${v === "warning" ? "text-amber-600" : "text-blue-600"}`}>{v}</span>
  )},
];

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Security"
        description="Manage account security, API access, and review security events."
        breadcrumbs={[{ label: "Policies & Security", href: "/ads/policies-security" }, { label: "Security" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Security Score" value="A+" delta="All checks passed" deltaType="positive" />
        <MetricCard label="Two-Factor Auth" value="On" delta="for all team members" deltaType="positive" />
        <MetricCard label="API Keys" value="3" delta="active" deltaType="neutral" />
      </div>
      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Security Settings</h3>
          <div className="space-y-3">
            {[
              { setting: "Two-factor authentication", desc: "Require 2FA for all team members", enabled: true },
              { setting: "IP allowlist", desc: "Restrict access to approved IP ranges", enabled: false },
              { setting: "Session timeout", desc: "Auto-logout after 30 minutes of inactivity", enabled: true },
              { setting: "API key rotation", desc: "Require key rotation every 90 days", enabled: true },
            ].map((item) => (
              <div key={item.setting} className="flex items-center justify-between rounded-lg border border-neutral-50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-neutral-900">{item.setting}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
                <span className={`text-xs font-medium ${item.enabled ? "text-emerald-600" : "text-neutral-400"}`}>
                  {item.enabled ? "Enabled" : "Disabled"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-3">Recent Security Events</h3>
          <DataTable columns={columns} data={securityEvents} />
        </div>
      </div>
    </div>
  );
}
