"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const members = [
          { id: "1", name: "Jordan Lee", email: "jordan@agency.com", role: "Admin", status: "active" },
          { id: "2", name: "Sam Park", email: "sam@agency.com", role: "Member", status: "active" },
          { id: "3", name: "Alex Rivera", email: "alex@agency.com", role: "Viewer", status: "active" }
];

export default function AgencyTeamPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === members.length ? new Set() : new Set(members.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Agency Team" description="Manage agency users and roles." actions={<Link href="/ads/agency/team/invite"><Button>Invite Member</Button></Link>} />

      <FilterBar searchPlaceholder="Search members…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Remove", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Member", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={members}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
