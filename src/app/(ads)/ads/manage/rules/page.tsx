"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, FilterBar, DataTable, StatusBadge, BulkActionToolbar, Button, StatusToggle } from "@/components/ads/ui";

const rules = [
  { id: "1", name: "Pause low CTR campaigns", condition: "CTR < 0.5% for 3 days", action: "Pause campaign", status: "active" as const, triggers: "14" },
  { id: "2", name: "Budget increase for winners", condition: "ROAS > 4x for 7 days", action: "Increase budget 20%", status: "active" as const, triggers: "8" },
  { id: "3", name: "Notify on spend spike", condition: "Daily spend > 2× average", action: "Send notification", status: "paused" as const, triggers: "3" },
];

export default function AutomatedRulesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === rules.length ? new Set() : new Set(rules.map(r => r.id))); };

  return (
    <div>
      <PageHeader title="Automated Rules" description="Create rules that automatically optimize your campaigns." actions={<Link href="/ads/manage/rules/create"><Button>Create Rule</Button></Link>} />
      <FilterBar searchPlaceholder="Search rules…" />
      <BulkActionToolbar selectedCount={selected.size} actions={[{ label: "Pause", onClick: () => {} }, { label: "Resume", onClick: () => {} }, { label: "Delete", onClick: () => {}, variant: "danger" as const }]} />
      <DataTable
        columns={[
          { key: "name", label: "Rule", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "condition", label: "Condition" },
          { key: "action", label: "Action" },
          { key: "triggers", label: "Triggers" },
          { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
        ]}
        data={rules}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
