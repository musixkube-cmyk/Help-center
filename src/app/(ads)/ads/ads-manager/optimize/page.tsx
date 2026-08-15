"use client";

import { useState } from "react";
import { PageHeader, TabBar, MetricCard, Button } from "@/components/ads/ui";

export default function OptimizePage() {
  const [tab, setTab] = useState(0);

  const recommendations = {
    budget: [
      { id: "b1", campaign: "Summer Launch 2025", action: "Increase daily budget by 20%", reason: "Campaign is pacing 92% with strong ROAS of 4.2x", impact: "High" },
      { id: "b2", campaign: "Brand Awareness Q2", action: "Shift budget to weekends", reason: "Weekend CPM is 30% lower with similar reach", impact: "Medium" },
      { id: "b3", campaign: "Podcast Discovery", action: "Reduce budget by 10%", reason: "CPA has increased 25% over last 7 days", impact: "Medium" },
    ],
    delivery: [
      { id: "d1", campaign: "New Artist Promo", action: "Expand audience targeting", reason: "Current audience too narrow — delivery limited", impact: "High" },
      { id: "d2", campaign: "Summer Launch 2025", action: "Add podcast placements", reason: "Untapped inventory with low competition", impact: "Medium" },
    ],
    audience: [
      { id: "a1", campaign: "Brand Awareness Q2", action: "Add 25-34 age segment", reason: "Best performing segment not fully captured", impact: "High" },
      { id: "a2", campaign: "Podcast Discovery", action: "Include lookalike audience", reason: "Similar users convert 2x better than broad", impact: "High" },
    ],
    creative: [
      { id: "c1", campaign: "Summer Launch 2025", action: "Test video variant", reason: "Audio-only ads underperforming vs video in this segment", impact: "High" },
      { id: "c2", campaign: "Brand Awareness Q2", action: "Refresh companion image", reason: "Current creative showing fatigue — 14 days live", impact: "Medium" },
    ],
  };

  const currentRecs = tab === 0 ? recommendations.budget : tab === 1 ? recommendations.delivery : tab === 2 ? recommendations.audience : recommendations.creative;

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Optimize"
        description="AI-powered recommendations to improve campaign performance."
        breadcrumbs={[{ label: "Ads Manager", href: "/ads/ads-manager" }, { label: "Optimize" }]}
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <MetricCard label="Budget" value="3" delta="recommendations" deltaType="neutral" />
        <MetricCard label="Delivery" value="2" delta="recommendations" deltaType="neutral" />
        <MetricCard label="Audience" value="2" delta="recommendations" deltaType="neutral" />
        <MetricCard label="Creative" value="2" delta="recommendations" deltaType="neutral" />
      </div>

      <TabBar tabs={["Budget", "Delivery", "Audience", "Creative"]} active={tab} onChange={setTab} />

      <div className="space-y-4">
        {currentRecs.map((rec) => (
          <div key={rec.id} className="rounded-xl border border-neutral-100 bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-neutral-400">{rec.campaign}</span>
                <p className="mt-1 text-sm font-semibold text-neutral-900">{rec.action}</p>
                <p className="mt-1 text-sm text-neutral-500">{rec.reason}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  rec.impact === "High" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                }`}>
                  {rec.impact} impact
                </span>
                <Button variant="secondary" onClick={() => {}}>Apply</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
