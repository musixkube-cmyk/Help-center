"use client";

import { useState } from "react";
import { PageHeader, TabBar, Button, FormField, DataTable, StatusBadge, EmptyState } from "@/components/ads/ui";

const members = [
  { id: "1", name: "You", email: "you@acme.com", role: "Admin", status: "active" as const, added: "Jun 1, 2026" },
  { id: "2", name: "Sarah Chen", email: "sarah@acme.com", role: "Editor", status: "active" as const, added: "Jul 15, 2026" },
  { id: "3", name: "Marcus Johnson", email: "marcus@acme.com", role: "Viewer", status: "pending_review" as const, added: "Aug 10, 2026" },
];

export default function TeamPermissionsPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Team & Permissions" description="Invite members, manage roles, and control access levels." actions={<Button>Invite Member</Button>} />

      <TabBar tabs={["Members", "Roles", "Invite"]} active={tab} onChange={setTab} />

      {tab === 0 && (
        <DataTable
          columns={[
            { key: "name", label: "Member", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
            { key: "added", label: "Added" },
          ]}
          data={members}
        />
      )}

      {tab === 1 && (
        <div className="space-y-4">
          {[
            { role: "Admin", desc: "Full access to all features, billing, and team management", count: 1 },
            { role: "Editor", desc: "Create, edit, and manage campaigns and creatives", count: 1 },
            { role: "Viewer", desc: "Read-only access to campaigns and analytics", count: 1 },
            { role: "Analyst", desc: "Access to analytics and reports only", count: 0 },
          ].map((r) => (
            <div key={r.role} className="flex items-center justify-between rounded-xl border border-neutral-100 bg-white px-5 py-4">
              <div><p className="text-sm font-medium text-neutral-900">{r.role}</p><p className="text-xs text-neutral-500">{r.desc}</p></div>
              <span className="text-sm text-neutral-400">{r.count} member{r.count !== 1 ? "s" : ""}</span>
            </div>
          ))}
        </div>
      )}

      {tab === 2 && (
        <div className="mx-auto max-w-lg rounded-xl border border-neutral-100 bg-white p-6">
          <div className="space-y-4">
            <FormField label="Email address"><input placeholder="colleague@company.com" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900" /></FormField>
            <FormField label="Role"><select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900"><option>Admin</option><option>Editor</option><option>Viewer</option><option>Analyst</option></select></FormField>
            <FormField label="Message (optional)"><textarea placeholder="Welcome to the team!" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 h-24 resize-none" /></FormField>
          </div>
          <Button className="mt-6 w-full">Send Invitation</Button>
        </div>
      )}
    </div>
  );
}
