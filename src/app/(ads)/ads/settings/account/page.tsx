"use client";

import { useState } from "react";
import { PageHeader, TabBar, Button, FormField, DataTable, StatusBadge } from "@/components/ads/ui";

export default function AccountBusinessPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Account & Business" description="Manage your advertiser account and business information." />

      <TabBar tabs={["Business Info", "Advertiser Account", "Account Health", "Documents"]} active={tab} onChange={setTab} />

      {tab === 0 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <FormField label="Business name"><input defaultValue="Acme Music Group" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Industry"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>Music &amp; Entertainment</option><option>Technology</option><option>Retail</option><option>Finance</option></select></FormField>
            <FormField label="Business type"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>LLC</option><option>Corporation</option><option>Sole proprietor</option><option>Partnership</option></select></FormField>
            <FormField label="Tax ID"><input placeholder="XX-XXXXXXX" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Country/Region"><input defaultValue="United States" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Website"><input defaultValue="https://acmemusic.com" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Business address"><input defaultValue="123 Main St, Los Angeles, CA 90001" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 lg:col-span-2" /></FormField>
          </div>
          <div className="mt-6 flex justify-end"><Button>Save</Button></div>
        </div>
      )}

      {tab === 1 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <FormField label="Account name"><input defaultValue="Acme Ads" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Account ID"><input defaultValue="ACT-20260715" readOnly className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-400 bg-neutral-50" /></FormField>
            <FormField label="Time zone"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>America/Chicago (CDT)</option><option>America/New_York (EDT)</option><option>America/Los_Angeles (PDT)</option><option>UTC</option></select></FormField>
            <FormField label="Currency"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>USD</option><option>EUR</option><option>GBP</option><option>CAD</option></select></FormField>
          </div>
          <div className="mt-6 flex justify-end"><Button>Save</Button></div>
        </div>
      )}

      {tab === 2 && (
        <div className="space-y-4">
          {[
            { label: "Payment status", value: "Good standing", status: "active" as const },
            { label: "Verification", value: "Verified", status: "active" as const },
            { label: "Spend limit", value: "$10,000/day", status: "active" as const },
            { label: "Creative policy", value: "No violations", status: "active" as const },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-xl border border-neutral-100 bg-white px-5 py-4">
              <div><p className="text-sm font-medium text-neutral-900">{item.label}</p><p className="text-xs text-neutral-500">{item.value}</p></div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      )}

      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="mb-4 flex justify-end"><Button variant="secondary">Upload document</Button></div>
          <DataTable
            columns={[
              { key: "name", label: "Document", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
              { key: "type", label: "Type" },
              { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
              { key: "date", label: "Uploaded" },
            ]}
            data={[
              { id: "1", name: "business_license.pdf", type: "Business License", status: "active", date: "Jun 1, 2026" },
              { id: "2", name: "tax_id.pdf", type: "Tax ID", status: "active", date: "Jun 1, 2026" },
            ]}
          />
        </div>
      )}
    </div>
  );
}
