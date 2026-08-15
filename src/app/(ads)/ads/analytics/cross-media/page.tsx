"use client";

import { useState } from "react";
import { PageHeader, TabBar, MetricCard, DataTable } from "@/components/ads/ui";

const channelData = [
  { id: "ch1", channel: "Audio Ads", reach: "28.4M", frequency: "3.2", incrementalReach: "8.1M", deDupedReach: "20.3M" },
  { id: "ch2", channel: "Video Ads", reach: "15.6M", frequency: "2.1", incrementalReach: "5.2M", deDupedReach: "10.4M" },
  { id: "ch3", channel: "Display", reach: "22.1M", frequency: "4.8", incrementalReach: "3.9M", deDupedReach: "18.2M" },
  { id: "ch4", channel: "Podcast", reach: "6.8M", frequency: "1.5", incrementalReach: "4.1M", deDupedReach: "2.7M" },
];

const columns = [
  { key: "channel", label: "Channel" },
  { key: "reach", label: "Total Reach" },
  { key: "frequency", label: "Avg. Frequency" },
  { key: "incrementalReach", label: "Incremental Reach" },
  { key: "deDupedReach", label: "De-duped Reach" },
];

export default function CrossMediaPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Cross-Media Measurement"
        description="Measure reach and frequency across channels with de-duplicated audience insights."
        breadcrumbs={[{ label: "Analytics", href: "/ads/analytics" }, { label: "Cross-Media" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <MetricCard label="Total Reach" value="52.9M" delta="across all channels" deltaType="neutral" />
        <MetricCard label="De-duped Reach" value="38.4M" delta="27% overlap" deltaType="neutral" />
        <MetricCard label="Avg. Frequency" value="2.9" delta="across channels" deltaType="neutral" />
        <MetricCard label="Incremental Reach" value="21.3M" delta="from secondary channels" deltaType="positive" />
      </div>
      <TabBar tabs={["Channel Comparison", "Overlap Analysis", "Reach Curves"]} active={tab} onChange={setTab} />
      {tab === 0 && <DataTable columns={columns} data={channelData} />}
      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Channel Overlap</h3>
          <div className="space-y-3">
            {[
              { pair: "Audio × Video", overlap: "18%", sharedReach: "5.1M" },
              { pair: "Audio × Display", overlap: "24%", sharedReach: "6.8M" },
              { pair: "Video × Display", overlap: "12%", sharedReach: "1.9M" },
              { pair: "Audio × Podcast", overlap: "8%", sharedReach: "2.2M" },
            ].map((item) => (
              <div key={item.pair} className="flex items-center justify-between rounded-lg border border-neutral-50 px-4 py-3">
                <span className="text-sm font-medium text-neutral-900">{item.pair}</span>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-neutral-500">Overlap: <span className="font-medium text-neutral-700">{item.overlap}</span></span>
                  <span className="text-neutral-500">Shared: <span className="font-medium text-neutral-700">{item.sharedReach}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Reach Curves</h3>
          <p className="text-sm text-neutral-500">Reach curve visualization shows marginal reach gains per dollar spent across channels. Contact your analytics team for the full interactive report.</p>
        </div>
      )}
    </div>
  );
}
