"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

const documents = [
          { id: "1", name: "Business license", type: "Legal", date: "Aug 1, 2026" },
          { id: "2", name: "Tax certificate", type: "Tax", date: "Jul 15, 2026" },
          { id: "3", name: "Insurance certificate", type: "Compliance", date: "Jun 30, 2026" }
];

export default function DocumentsPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === documents.length ? new Set() : new Set(documents.map((item: any) => item.id))); };

  return (
    <div>
      <PageHeader title="Documents" description="Legal and compliance document library."  />

      <FilterBar searchPlaceholder="Search documents…" onSearch={setSearch} />


      <DataTable
        columns={[
          { key: "name", label: "Document", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "date", label: "Date" }
        ]}
        data={documents}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
      />
    </div>
  );
}
