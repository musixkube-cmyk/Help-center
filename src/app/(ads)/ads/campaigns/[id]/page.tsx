"use client";

import Link from "next/link";
import { use, useState } from "react";
import { PageHeader, TabBar, MetricCard, StatusBadge, StatusToggle, DataTable, ActivityTimeline, Button, FormField } from "@/components/ads/ui";

const adGroups = [
  { id: "1", name: "Audio — Broad Audience", status: "active" as const, budget: "$50/day", spend: "$1,520", results: "842 clicks", optimization: "Maximize clicks" },
  { id: "2", name: "Video — Retarget", status: "active" as const, budget: "$50/day", spend: "$930", results: "388 clicks", optimization: "Maximize conversions" },
];

const ads = [
  { id: "1", name: "Summer Audio Spot", adGroup: "Audio — Broad Audience", status: "active" as const, type: "Audio", spend: "$820", results: "456 clicks" },
  { id: "2", name: "Companion Banner", adGroup: "Audio — Broad Audience", status: "active" as const, type: "Image", spend: "$700", results: "386 clicks" },
  { id: "3", name: "Video Retarget 15s", adGroup: "Video — Retarget", status: "active" as const, type: "Video", spend: "$930", results: "388 clicks" },
];

const activity = [
  { id: "1", action: "created this campaign", user: "You", time: "Jul 15, 2026", detail: "Objective: Conversions" },
  { id: "2", action: "increased daily budget", user: "You", time: "Jul 22, 2026", detail: "$80/day → $100/day" },
  { id: "3", action: "added Ad Group", user: "You", time: "Jul 23, 2026", detail: "Video — Retarget" },
  { id: "4", action: "published ad", user: "You", time: "Jul 24, 2026", detail: "Video Retarget 15s" },
];

export default function CampaignDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [tab, setTab] = useState(0);
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <PageHeader
        title="Summer Launch 2026"
        description="Conversions · Daily budget $100"
        breadcrumbs={[
          { label: "Campaigns", href: "/ads/campaigns" },
          { label: "Summer Launch 2026" },
        ]}
        actions={
          <>
            <StatusToggle active={isActive} onToggle={() => setIsActive(!isActive)} />
            <Button variant="secondary">Duplicate</Button>
            <Link href={`/ads/campaigns/${id}/edit`}><Button>Edit</Button></Link>
          </>
        }
      />

      <TabBar tabs={["Overview", "Ad Groups", "Ads", "Analytics", "Settings", "Activity"]} active={tab} onChange={setTab} />

      {/* Overview */}
      {tab === 0 && (
        <div>
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Spend" value="$2,450" />
            <MetricCard label="Impressions" value="89.2K" />
            <MetricCard label="Clicks" value="1,230" />
            <MetricCard label="Conversions" value="186" />
          </div>
          <div className="mb-6 rounded-xl border border-neutral-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Performance trend</h3>
            <div className="flex h-48 items-center justify-center text-sm text-neutral-400">Chart renders here — connect to analytics API</div>
          </div>
          <DataTable
            columns={[
              { key: "name", label: "Ad Group", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
              { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
              { key: "budget", label: "Budget" },
              { key: "spend", label: "Spend" },
              { key: "results", label: "Results" },
            ]}
            data={adGroups}
            rowHref={() => `/ads/campaigns/groups/1`}
          />
        </div>
      )}

      {/* Ad Groups */}
      {tab === 1 && (
        <div>
          <div className="mb-4 flex justify-end">
            <Button>Create Ad Group</Button>
          </div>
          <DataTable
            columns={[
              { key: "name", label: "Ad Group", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
              { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
              { key: "optimization", label: "Optimization" },
              { key: "budget", label: "Budget" },
              { key: "spend", label: "Spend" },
              { key: "results", label: "Results" },
            ]}
            data={adGroups}
            rowHref={() => `/ads/campaigns/groups/1`}
          />
        </div>
      )}

      {/* Ads */}
      {tab === 2 && (
        <div>
          <div className="mb-4 flex justify-end">
            <Button>Create Ad</Button>
          </div>
          <DataTable
            columns={[
              { key: "name", label: "Ad", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
              { key: "adGroup", label: "Ad Group" },
              { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
              { key: "type", label: "Type" },
              { key: "spend", label: "Spend" },
              { key: "results", label: "Results" },
            ]}
            data={ads}
          />
        </div>
      )}

      {/* Analytics */}
      {tab === 3 && (
        <div>
          <div className="mb-6 grid grid-cols-3 gap-4 lg:grid-cols-6">
            <MetricCard label="Spend" value="$2,450" />
            <MetricCard label="Impressions" value="89.2K" />
            <MetricCard label="Clicks" value="1,230" />
            <MetricCard label="CTR" value="1.38%" />
            <MetricCard label="CPA" value="$13.17" />
            <MetricCard label="ROAS" value="3.4x" />
          </div>
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Breakdown</h3>
            <div className="flex gap-2 mb-4">
              {["Placement", "Audience", "Device", "Time", "Creative"].map((b, i) => (
                <button key={b} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${i === 0 ? "bg-neutral-900 text-white" : "border border-neutral-200 text-neutral-600"}`}>{b}</button>
              ))}
            </div>
            <div className="flex h-48 items-center justify-center text-sm text-neutral-400">Breakdown chart</div>
          </div>
        </div>
      )}

      {/* Settings */}
      {tab === 4 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <FormField label="Campaign name"><input defaultValue="Summer Launch 2026" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none" /></FormField>
            <FormField label="Objective"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>Conversions</option><option>Awareness</option><option>Consideration</option></select></FormField>
            <FormField label="Daily budget"><input defaultValue="100" type="number" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Delivery type"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>Standard</option><option>Accelerated</option></select></FormField>
            <FormField label="Special ad category"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>None</option><option>Housing</option><option>Credit</option></select></FormField>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      )}

      {/* Activity */}
      {tab === 5 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <ActivityTimeline items={activity} />
        </div>
      )}
    </div>
  );
}
