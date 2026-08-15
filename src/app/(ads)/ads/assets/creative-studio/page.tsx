"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function CreativeStudioPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Creative Studio" description="Build, preview, and manage creative assets." />
      <TabBar tabs={["Audio", "Companion Images", "AI Tools", "Preview"]} active={tab} onChange={setTab} />
      {tab === 0 && (
        <div className="space-y-4">
          <div className="flex justify-end"><Button>Upload Audio</Button></div>
          <div className="rounded-xl border-2 border-dashed border-neutral-200 p-12 text-center text-sm text-neutral-400">
            Drag and drop audio files here, or click to browse
          </div>
        </div>
      )},
      {tab === 1 && (
        <div className="space-y-4">
          <div className="flex justify-end"><Button>Upload Image</Button></div>
          <div className="rounded-xl border-2 border-dashed border-neutral-200 p-12 text-center text-sm text-neutral-400">
            Drag and drop companion images here
          </div>
        </div>
      )},
      {tab === 2 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-200 p-5"><h3 className="text-sm font-semibold text-neutral-900">AI Script Generator</h3><p className="mt-1 text-xs text-neutral-500">Generate ad copy from a brief.</p></div>
            <div className="rounded-xl border border-neutral-200 p-5"><h3 className="text-sm font-semibold text-neutral-900">AI Voiceover</h3><p className="mt-1 text-xs text-neutral-500">Select a voice and generate audio.</p></div>
            <div className="rounded-xl border border-neutral-200 p-5"><h3 className="text-sm font-semibold text-neutral-900">AI Video</h3><p className="mt-1 text-xs text-neutral-500">Create short-form video from assets.</p></div>
            <div className="rounded-xl border border-neutral-200 p-5"><h3 className="text-sm font-semibold text-neutral-900">Background Music</h3><p className="mt-1 text-xs text-neutral-500">Browse and select background tracks.</p></div>
          </div>
        </div>
      )},
      {tab === 3 && (
        <div className="rounded-xl border border-neutral-100 bg-white p-6"><p className="text-sm text-neutral-500">Preview content</p></div>
      )}
    </div>
  );
}
