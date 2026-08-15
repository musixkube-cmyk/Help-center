"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const clients = [
          { id: "1", name: "Acme Records", spend: "$12K", campaigns: "8", status: "active" },
          { id: "2", name: "Vibe Music Group", spend: "$9K", campaigns: "5", status: "active" },
          { id: "3", name: "SoundWave Inc.", spend: "$6K", campaigns: "3", status: "active" }
];

export default function ClientsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === clients.length ? new Set() : new Set(clients.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Clients" description="Manage agency clients and their ad accounts." actions={<Link href="/ads/agency/clients/add"><Button>Add Client</Button></Link>} />

      <FilterBar searchPlaceholder="Search clients…" onSearch={setSearch} />

      <BulkActionToolbar selectedCount={selected.size} actions={[
          { label: "Archive", onClick: () => {}, variant: "danger" as const }
      ]} />

      <DataTable
        columns={[
          { key: "name", label: "Client", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "spend", label: "Monthly spend" },
          { key: "campaigns", label: "Campaigns" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> }
        ]}
        data={clients}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
