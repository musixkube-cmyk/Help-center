"use client";

import { PageHeader, CardGrid, MetricCard } from "@/components/ads/ui";

export default function AdsManagerPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Ads Manager"
        description="Launch campaigns, manage resources, monitor data, and optimize performance."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Active Campaigns" value="24" delta="+3 this week" deltaType="positive" />
        <MetricCard label="Total Spend" value="$12,840" delta="$2,100 today" deltaType="neutral" prefix="$" />
        <MetricCard label="Impressions" value="1.2M" delta="+12% vs last period" deltaType="positive" />
        <MetricCard label="Avg. CPM" value="$10.70" delta="-0.5% vs last period" deltaType="positive" prefix="$" />
      </div>

      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Quick Actions</h2>
      <CardGrid
        cards={[
          { label: "Campaigns", description: "View, create, and manage all your advertising campaigns", href: "/ads/ads-manager/campaigns" },
          { label: "Ad Groups", description: "Organize your ads by audience, placement, and targeting", href: "/ads/ads-manager/ad-groups" },
          { label: "Ads", description: "Manage individual ad creatives and their configurations", href: "/ads/ads-manager/ads" },
          { label: "Monitor", description: "Track delivery health, spend pacing, and performance alerts", href: "/ads/ads-manager/monitor" },
          { label: "Optimize", description: "Get budget, audience, placement, and creative recommendations", href: "/ads/ads-manager/optimize" },
          { label: "Create Campaign", description: "Launch a new campaign with the guided 7-step wizard", href: "/ads/ads-manager/campaigns/create" },
        ]}
      />
    </div>
  );
}
