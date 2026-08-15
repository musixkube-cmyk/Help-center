"use client";

import { PageHeader, Button, CardGrid } from "@/components/ads/ui";

export default function VideoEditorPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="Video Editor" description="Trim, crop, and enhance your video ads with our built-in editor." />
      <div className="rounded-xl border border-neutral-100 bg-white p-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 rounded-lg border border-dashed border-neutral-300 p-12">
            <p className="text-sm text-neutral-400">Drag & drop a video file or click to browse</p>
            <p className="mt-1 text-xs text-neutral-400">MP4, MOV, or AVI — Max 500MB</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {["Trim", "Crop", "Add Text", "Add Music"].map((tool) => (
              <button key={tool} className="rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                {tool}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button variant="secondary">Upload New</Button>
            <Button disabled>Select a file to begin</Button>
          </div>
        </div>
      </div>
      <h2 className="mt-8 mb-4 text-lg font-semibold text-neutral-900">Recent Edits</h2>
      <CardGrid cards={[
        { label: "Brand Story — 30s Cut", description: "Last edited 2 hours ago", href: "#" },
        { label: "Product Demo — Square", description: "Last edited yesterday", href: "#" },
        { label: "Summer Promo — Vertical", description: "Last edited 3 days ago", href: "#" },
      ]} />
    </div>
  );
}
