"use client";

import { PageHeader, MetricCard, Button, FormField } from "@/components/ads/ui";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Privacy & Data Policies"
        description="Manage data collection, user consent, and privacy compliance for your advertising."
        breadcrumbs={[{ label: "Policies & Security", href: "/ads/policies-security" }, { label: "Privacy" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Consent Rate" value="94.2%" delta="+1.2% vs last month" deltaType="positive" />
        <MetricCard label="Data Retention" value="90 days" delta="default period" deltaType="neutral" />
        <MetricCard label="Active Data Sources" value="7" delta="connected" deltaType="neutral" />
      </div>
      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Data Collection Policies</h3>
          <div className="space-y-3">
            {[
              { policy: "First-party cookie consent", status: true },
              { policy: "Third-party tracking disclosure", status: true },
              { policy: "Retargeting opt-out compliance", status: true },
              { policy: "Cross-device identification consent", status: false },
              { policy: "Location data collection", status: true },
            ].map((item) => (
              <div key={item.policy} className="flex items-center justify-between rounded-lg border border-neutral-50 px-4 py-3">
                <span className="text-sm text-neutral-700">{item.policy}</span>
                <span className={`text-xs font-medium ${item.status ? "text-emerald-600" : "text-amber-600"}`}>
                  {item.status ? "Enabled" : "Disabled"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h3 className="text-sm font-semibold text-neutral-900 mb-4">Data Retention Settings</h3>
          <div className="space-y-3">
            <FormField label="User Data Retention Period">
              <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                <option>30 days</option><option>60 days</option><option>90 days</option><option>180 days</option><option>365 days</option>
              </select>
            </FormField>
            <FormField label="Audience Data Retention Period">
              <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                <option>30 days</option><option>60 days</option><option>90 days</option><option>180 days</option>
              </select>
            </FormField>
            <Button>Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
