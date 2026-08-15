"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, FilterBar, DataTable, StatusBadge, BulkActionToolbar, Button } from "@/components/ads/ui";

const leads = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", source: "Instant Form", campaign: "Summer Launch 2026", status: "New", created: "Aug 12, 2026", value: "$120" },
  { id: "2", name: "Marcus Johnson", email: "marcus@example.com", source: "Direct Message", campaign: "Brand Awareness Push", status: "Contacted", created: "Aug 11, 2026", value: "$85" },
  { id: "3", name: "Emily Rodriguez", email: "emily@example.com", source: "Website Form", campaign: "Summer Launch 2026", status: "Qualified", created: "Aug 10, 2026", value: "$200" },
  { id: "4", name: "David Kim", email: "david@example.com", source: "Instant Form", campaign: "Summer Launch 2026", status: "New", created: "Aug 9, 2026", value: "$95" },
  { id: "5", name: "Priya Patel", email: "priya@example.com", source: "Direct Message", campaign: "Brand Awareness Push", status: "Disqualified", created: "Aug 8, 2026", value: "$0" },
];

const statusColor: Record<string, string> = { New: "bg-blue-50 text-blue-700", Contacted: "bg-amber-50 text-amber-700", Qualified: "bg-emerald-50 text-emerald-700", Disqualified: "bg-neutral-100 text-neutral-500" };

export default function LeadsCenterPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === leads.length ? new Set() : new Set(leads.map(l => l.id))); };

  return (
    <div>
      <PageHeader
        title="Leads Center"
        description="Filter, search, export, respond to, and qualify leads."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary">Export CSV</Button>
            <Link href="/ads/leads/instant-forms"><Button variant="secondary">Create Form</Button></Link>
          </div>
        }
      />

      <FilterBar
        searchPlaceholder="Search leads…"
        onSearch={setSearch}
        filters={[
          { label: "Status", options: ["New", "Contacted", "Qualified", "Disqualified"] },
          { label: "Source", options: ["Instant Form", "Direct Message", "Website Form"] },
          { label: "Campaign", options: ["Summer Launch 2026", "Brand Awareness Push"] },
        ]}
      />

      <BulkActionToolbar
        selectedCount={selected.size}
        actions={[
          { label: "Mark contacted", onClick: () => {} },
          { label: "Mark qualified", onClick: () => {} },
          { label: "Disqualify", onClick: () => {}, variant: "danger" },
          { label: "Export", onClick: () => {} },
        ]}
      />

      <DataTable
        columns={[
          { key: "name", label: "Lead", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "email", label: "Email" },
          { key: "source", label: "Source" },
          { key: "campaign", label: "Campaign" },
          { key: "status", label: "Status", render: (v: string) => <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[v] ?? "bg-neutral-100 text-neutral-500"}`}>{v}</span> },
          { key: "value", label: "Value", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "created", label: "Created", render: (v: string) => <span className="text-neutral-400">{v}</span> },
        ]}
        data={leads}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
        rowHref={(row) => `/ads/leads/${row.id}`}
      />
    </div>
  );
}
