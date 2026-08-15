"use client";

import { useState } from "react";
import { PageHeader, FilterBar, DataTable, StatusBadge, Button, StatusToggle } from "@/components/ads/ui";

const rules = [
  { id: "r1", name: "Pause low CTR campaigns", trigger: "CTR < 0.5% for 3 days", action: "Pause campaign", status: "active" as const, appliesTo: "All campaigns", lastTriggered: "2 days ago" },
  { id: "r2", name: "Budget increase for high ROAS", trigger: "ROAS > 5x for 7 days", action: "Increase budget by 20%", status: "active" as const, appliesTo: "Sales campaigns", lastTriggered: "1 week ago" },
  { id: "r3", name: "Notify high CPA", trigger: "CPA > $50", action: "Send email notification", status: "paused" as const, appliesTo: "Lead gen campaigns", lastTriggered: "Never" },
  { id: "r4", name: "Frequency cap alert", trigger: "Frequency > 5 per week", action: "Send Slack notification", status: "active" as const, appliesTo: "Awareness campaigns", lastTriggered: "5 hours ago" },
  { id: "r5", name: "Auto-resume campaigns", trigger: "Paused by budget rule", action: "Resume at 12:00 AM", status: "active" as const, appliesTo: "All campaigns", lastTriggered: "Yesterday" },
];

const columns = [
  { key: "name", label: "Rule Name" },
  { key: "trigger", label: "Trigger Condition" },
  { key: "action", label: "Action" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "appliesTo", label: "Applies To" },
  { key: "lastTriggered", label: "Last Triggered" },
];

export default function AutomatedRulesPage() {
  const [search, setSearch] = useState("");
  const filtered = rules.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Automated Rules"
        description="Create rules that automatically adjust your campaigns based on performance conditions."
        actions={<Button>+ Create Rule</Button>}
      />
      <FilterBar searchPlaceholder="Search rules…" onSearch={setSearch} filters={[{ label: "Status", options: ["Active", "Paused"] }]} />
      <DataTable columns={columns} data={filtered} />
    </div>
  );
}
