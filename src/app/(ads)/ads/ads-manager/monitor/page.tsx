"use client";

import { useState } from "react";
import { PageHeader, TabBar, MetricCard, DataTable, StatusBadge } from "@/components/ads/ui";

const alerts = [
  { id: "al1", campaign: "Summer Launch 2025", type: "Delivery", message: "Spend pacing 15% below target", severity: "warning" as const, time: "2 min ago" },
  { id: "al2", campaign: "Brand Awareness Q2", type: "Budget", message: "Daily budget reached 90% threshold", severity: "warning" as const, time: "15 min ago" },
  { id: "al3", campaign: "New Artist Promo", type: "Creative", message: "Ad rejected — policy violation (misleading claims)", severity: "error" as const, time: "1 hr ago" },
  { id: "al4", campaign: "Podcast Discovery", type: "Audience", message: "Audience size decreased below 1,000", severity: "info" as const, time: "3 hr ago" },
];

const healthData = [
  { id: "h1", campaign: "Summer Launch 2025", status: "active" as const, pacing: "92%", delivery: "Good", cpm: "$7.50", trend: "Stable" },
  { id: "h2", campaign: "Brand Awareness Q2", status: "active" as const, pacing: "88%", delivery: "Good", cpm: "$10.20", trend: "Improving" },
  { id: "h3", campaign: "New Artist Promo", status: "paused" as const, pacing: "45%", delivery: "Under-delivering", cpm: "$14.30", trend: "Declining" },
  { id: "h4", campaign: "Podcast Discovery", status: "active" as const, pacing: "78%", delivery: "Fair", cpm: "$8.10", trend: "Stable" },
];

const healthColumns = [
  { key: "campaign", label: "Campaign" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "pacing", label: "Pacing" },
  { key: "delivery", label: "Delivery Health" },
  { key: "cpm", label: "CPM" },
  { key: "trend", label: "Trend" },
];

export default function MonitorPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Monitor"
        description="Track delivery health, performance alerts, and spend pacing across your campaigns."
        breadcrumbs={[{ label: "Ads Manager", href: "/ads/ads-manager" }, { label: "Monitor" }]}
      />

      <TabBar tabs={["Delivery Health", "Alerts", "Performance Links"]} active={tab} onChange={setTab} />

      {tab === 0 && (
        <div>
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MetricCard label="Healthy Campaigns" value="2" delta="of 4 total" deltaType="neutral" />
            <MetricCard label="Under-delivering" value="1" delta="New Artist Promo" deltaType="negative" />
            <MetricCard label="Avg. Pacing" value="76%" delta="+5% vs yesterday" deltaType="positive" />
          </div>
          <DataTable columns={healthColumns} data={healthData} />
        </div>
      )}

      {tab === 1 && (
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`rounded-lg border p-4 ${
              alert.severity === "error" ? "border-red-200 bg-red-50" : alert.severity === "warning" ? "border-amber-200 bg-amber-50" : "border-blue-200 bg-blue-50"
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium uppercase text-neutral-500">{alert.type}</span>
                  <p className="text-sm font-medium text-neutral-900">{alert.campaign}</p>
                  <p className="text-sm text-neutral-600">{alert.message}</p>
                </div>
                <span className="text-xs text-neutral-400">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 2 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Analytics Dashboard", desc: "Detailed performance metrics and trends", href: "/ads/analytics" },
            { label: "Attribution Reports", desc: "Understand your conversion paths", href: "/ads/analytics/attribution" },
            { label: "Audience Insights", desc: "Who is engaging with your ads", href: "/ads/analytics/audience" },
            { label: "Creative Performance", desc: "Compare ad creative effectiveness", href: "/ads/creatives" },
            { label: "Billing Overview", desc: "Spend, invoices, and payment details", href: "/ads/billing" },
            { label: "Experiments", desc: "A/B tests and lift studies", href: "/ads/analytics/experiments" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-900">{link.label}</h3>
              <p className="mt-1 text-xs text-neutral-500">{link.desc}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
