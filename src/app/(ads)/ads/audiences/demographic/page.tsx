"use client";

import { PageHeader, MetricCard, Button, FormField } from "@/components/ads/ui";

export default function DemographicTargetingPage() {
  const ageGroups = ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
  const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Demographic Targeting"
        description="Define audience segments based on age, gender, and other demographic attributes."
        breadcrumbs={[{ label: "Audiences", href: "/ads/audiences" }, { label: "Demographics" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Reachable Audience" value="42.8M" delta="with current settings" deltaType="neutral" />
        <MetricCard label="Age Segments" value="5" delta="selected" deltaType="neutral" />
        <MetricCard label="Gender" value="All" delta="selected" deltaType="neutral" />
      </div>
      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Age Range</h3>
          <div className="flex flex-wrap gap-3">
            {ageGroups.map((age) => (
              <label key={age} className="flex items-center gap-2 rounded-lg border border-neutral-100 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                <input type="checkbox" defaultChecked={["18-24", "25-34", "35-44"].includes(age)} className="h-4 w-4 rounded border-neutral-300" />
                {age}
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Gender</h3>
          <div className="flex flex-wrap gap-3">
            {genders.map((g) => (
              <label key={g} className="flex items-center gap-2 rounded-lg border border-neutral-100 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" />
                {g}
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Household Income</h3>
          <div className="flex flex-wrap gap-3">
            {["Top 10%", "10-20%", "20-30%", "30-40%", "40-50%", "50-60%", "60-70%", "70-80%", "80-90%", "Bottom 10%"].map((inc) => (
              <label key={inc} className="flex items-center gap-2 rounded-lg border border-neutral-100 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />
                {inc}
              </label>
            ))}
          </div>
        </div>
        <Button>Save Demographic Targeting</Button>
      </div>
    </div>
  );
}
