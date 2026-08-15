"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Video & Audio Insights</h1>
          <p className="mt-1 text-sm text-neutral-500">Evaluate media-format engagement — video views, completion, streams, audio engagement, SVI.</p>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Video views", value: "28.4K" },
          { label: "Video completion", value: "67%" },
          { label: "Audio streams", value: "14.2K" },
          { label: "SVI", value: "1.8" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-neutral-100 bg-white p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
