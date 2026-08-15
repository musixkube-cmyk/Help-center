"use client";

import { PageHeader, MetricCard, DataTable, Button, FormField } from "@/components/ads/ui";

const blocklist = [
  { id: "bl1", category: "Violence & Gore", action: "Block", campaigns: "All", items: 24 },
  { id: "bl2", category: "Hate Speech", action: "Block", campaigns: "All", items: 18 },
  { id: "bl3", category: "Adult Content", action: "Block", campaigns: "All", items: 31 },
  { id: "bl4", category: "Illegal Drugs", action: "Block", campaigns: "All", items: 12 },
  { id: "bl5", category: "Political Content", action: "Flag", campaigns: "Awareness only", items: 8 },
  { id: "bl6", category: "Misinformation", action: "Block", campaigns: "All", items: 15 },
];

const columns = [
  { key: "category", label: "Category" },
  { key: "action", label: "Action" },
  { key: "campaigns", label: "Applies To" },
  { key: "items", label: "Blocked Items" },
];

export default function BrandSafetyPolicyPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Brand Safety Controls"
        description="Configure content adjacency rules, blocklists, and brand suitability settings."
        breadcrumbs={[{ label: "Policies & Security", href: "/ads/policies-security" }, { label: "Brand Safety" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Blocked Categories" value="5" delta="fully blocked" deltaType="neutral" />
        <MetricCard label="Flagged Categories" value="1" delta="requires review" deltaType="neutral" />
        <MetricCard label="Safety Score" value="98%" delta="across all placements" deltaType="positive" />
      </div>
      <DataTable columns={columns} data={blocklist} />
      <div className="mt-6 rounded-xl border border-neutral-100 bg-white p-6">
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Custom Blocklist</h3>
        <FormField label="URLs or Keywords" description="Add specific URLs or keywords to block your ads from appearing alongside">
          <textarea rows={3} placeholder="example.com/bad-content\nproblematic-keyword" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <Button className="mt-3">Add to Blocklist</Button>
      </div>
    </div>
  );
}
