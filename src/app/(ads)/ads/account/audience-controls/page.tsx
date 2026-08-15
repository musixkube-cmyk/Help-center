"use client";

import { PageHeader, MetricCard, Button, FormField } from "@/components/ads/ui";

export default function AudienceControlsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Audience Controls"
        description="Manage account-level audience restrictions, exclusions, and privacy controls."
        breadcrumbs={[{ label: "Account", href: "/ads/account" }, { label: "Audience Controls" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Excluded Segments" value="3" delta="active exclusions" deltaType="neutral" />
        <MetricCard label="Restricted Categories" value="2" delta="age-restricted" deltaType="neutral" />
        <MetricCard label="Custom Exclusions" value="1.2M" delta="users excluded" deltaType="neutral" />
      </div>
      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Account-Level Exclusions</h3>
          <div className="space-y-3">
            {[
              { label: "Exclude existing customers", desc: "Don\'t show ads to users who have already purchased", enabled: true },
              { label: "Exclude app users", desc: "Don\'t retarget users who already have your app installed", enabled: false },
              { label: "Age restriction: 18+", desc: "All campaigns restricted to users 18 and older", enabled: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-neutral-50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
                <button className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent transition-colors ${item.enabled ? "bg-emerald-500" : "bg-neutral-200"}`}>
                  <span className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${item.enabled ? "translate-x-4" : "translate-x-0"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-3">Upload Exclusion List</h3>
          <FormField label="Upload a list of user IDs or emails to exclude from all campaigns">
            <div className="rounded-lg border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-400">
              Drag & drop CSV file or click to browse
            </div>
          </FormField>
          <Button className="mt-3">Upload List</Button>
        </div>
      </div>
    </div>
  );
}
