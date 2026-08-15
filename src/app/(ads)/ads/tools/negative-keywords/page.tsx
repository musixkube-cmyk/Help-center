"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, Button, FormField } from "@/components/ads/ui";

const negativeKeywords = [
  { id: "nk1", keyword: "free music download", matchType: "Broad", campaign: "All campaigns", addedBy: "System", date: "Jan 15, 2025" },
  { id: "nk2", keyword: "pirated", matchType: "Exact", campaign: "Brand Awareness Q2", addedBy: "Manual", date: "Feb 1, 2025" },
  { id: "nk3", keyword: "illegal streaming", matchType: "Phrase", campaign: "All campaigns", addedBy: "System", date: "Jan 15, 2025" },
  { id: "nk4", keyword: "mp3 converter", matchType: "Broad", campaign: "Summer Launch 2025", addedBy: "Manual", date: "Mar 10, 2025" },
];

const columns = [
  { key: "keyword", label: "Keyword" },
  { key: "matchType", label: "Match Type" },
  { key: "campaign", label: "Campaign" },
  { key: "addedBy", label: "Added By" },
  { key: "date", label: "Date Added" },
];

export default function NegativeKeywordsPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="Negative Keywords" description="Prevent your ads from showing for irrelevant or harmful search terms." actions={<Button>+ Add Negative Keyword</Button>} />
      <FilterBar searchPlaceholder="Search negative keywords…" onSearch={setSearch} filters={[{ label: "Match Type", options: ["Broad", "Exact", "Phrase"] }]} />
      <DataTable columns={columns} data={negativeKeywords} selectable selected={new Set()} />
      <div className="mt-6 rounded-xl border border-neutral-100 bg-white p-6">
        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Add Negative Keywords</h3>
        <div className="space-y-3">
          <FormField label="Keywords" description="Enter one keyword per line">
            <textarea rows={3} placeholder="free music download\npirated\nillegal streaming" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Match Type">
              <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                <option>Broad</option><option>Exact</option><option>Phrase</option>
              </select>
            </FormField>
            <FormField label="Apply To">
              <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                <option>All campaigns</option><option>Selected campaigns</option>
              </select>
            </FormField>
          </div>
          <Button>Add Keywords</Button>
        </div>
      </div>
    </div>
  );
}
