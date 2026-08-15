"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, MetricCard, DataTable, StatusBadge, FilterBar, BulkActionToolbar, Button } from "@/components/ads/ui";

const creatives = [
  { id: "1", name: "Summer Hero Image", type: "Image", format: "1200×628", status: "approved" as const, campaign: "Summer Launch 2026", updated: "Aug 10, 2026", tags: "summer, hero" },
  { id: "2", name: "Brand Audio 30s", type: "Audio", format: "30s MP3", status: "approved" as const, campaign: "Brand Awareness Push", updated: "Aug 8, 2026", tags: "brand, audio" },
  { id: "3", name: "Carousel Product 1", type: "Image", format: "1080×1080", status: "approved" as const, campaign: "Catalog Carousel Test", updated: "Aug 6, 2026", tags: "product, carousel" },
  { id: "4", name: "Companion Banner — Retarget", type: "Image", format: "300×250", status: "in_review" as const, campaign: "Retargeting — Site Visitors", updated: "Aug 5, 2026", tags: "retarget, companion" },
  { id: "5", name: "Video Teaser 15s", type: "Video", format: "15s MP4", status: "approved" as const, campaign: "Summer Launch 2026", updated: "Aug 4, 2026", tags: "video, teaser" },
  { id: "6", name: "Logo — White BG", type: "Image", format: "200×200", status: "approved" as const, campaign: "—", updated: "Jul 30, 2026", tags: "logo" },
];

export default function CreativesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const toggleSelect = (id: string) => { const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); setSelected(n); };
  const toggleAll = () => { setSelected(selected.size === creatives.length ? new Set() : new Set(creatives.map(c => c.id))); };

  return (
    <div>
      <PageHeader
        title="Creative Management"
        description="Upload, preview, and manage all ad creatives — images, audio, video, and companion assets."
        breadcrumbs={[{ label: "Ad Center" }, { label: "Creatives" }]}
        actions={
          <div className="flex gap-2">
            <Link href="/ads/creatives/create"><Button>Create Creative</Button></Link>
            <Link href="/ads/creatives/library"><Button variant="secondary">Open Library</Button></Link>
          </div>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard label="Total Creatives" value="6" />
        <MetricCard label="Approved" value="5" deltaType="positive" />
        <MetricCard label="In Review" value="1" deltaType="neutral" />
        <MetricCard label="Rejected" value="0" deltaType="positive" />
      </div>

      <FilterBar
        searchPlaceholder="Search creatives…"
        onSearch={setSearch}
        filters={[
          { label: "Type", options: ["Image", "Audio", "Video"] },
          { label: "Status", options: ["Approved", "In Review", "Rejected"] },
        ]}
      />

      <BulkActionToolbar
        selectedCount={selected.size}
        actions={[
          { label: "Download", onClick: () => {} },
          { label: "Add to Campaign", onClick: () => {} },
          { label: "Archive", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" },
        ]}
      />

      <DataTable
        columns={[
          { key: "name", label: "Creative", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
          { key: "type", label: "Type" },
          { key: "format", label: "Format" },
          { key: "status", label: "Status", render: (_: string, row: any) => <StatusBadge status={row.status} /> },
          { key: "campaign", label: "Campaign" },
          { key: "tags", label: "Tags", render: (v: string) => <span className="text-xs text-neutral-400">{v}</span> },
          { key: "updated", label: "Updated", render: (v: string) => <span className="text-neutral-400">{v}</span> },
        ]}
        data={creatives}
        selectable
        selected={selected}
        onToggleSelect={toggleSelect}
        onToggleAll={toggleAll}
        rowHref={(row) => `/ads/creatives/library/${row.id}`}
      />

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Audio Upload", description: "Upload and manage audio ad files", href: "/ads/creatives/audio" },
          { label: "Companion Images", description: "Manage companion banner assets", href: "/ads/creatives/companion" },
          { label: "Logo Management", description: "Upload and manage brand logos", href: "/ads/creatives/logo" },
          { label: "CTA Selector", description: "Choose call-to-action buttons", href: "/ads/creatives/cta" },
          { label: "Ad Preview", description: "Preview your ad across placements", href: "/ads/creatives/preview" },
          { label: "AI Creative Gen", description: "Generate creatives with AI", href: "/ads/creatives/ai" },
          { label: "Creator Partnerships", description: "Collaborate with creators", href: "/ads/creatives/partnerships" },
          { label: "Creative Studio", description: "Design and edit creatives", href: "/ads/creatives/studio" },
          { label: "Destination URLs", description: "Manage landing page URLs", href: "/ads/creatives/destination" },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-neutral-100 bg-white p-4 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
            <p className="mt-1 text-xs text-neutral-500">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
