"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Create Audience</h1>
          <p className="mt-1 text-sm text-neutral-500">Build a new reusable audience.</p>
        </div>
      </div>
      <div className="rounded-xl border border-neutral-100 bg-white p-6"><div className="space-y-4"><div><label className="block text-sm font-medium text-neutral-700 mb-1">Audience name</label><input placeholder="e.g. Past Purchasers" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900" /></div><div><label className="block text-sm font-medium text-neutral-700 mb-1">Type</label><select className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900"><option>Custom</option><option>Lookalike</option><option>Artist Affinity</option><option>Demographic</option></select></div></div><div className="mt-6 flex justify-end gap-3"><button className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700">Cancel</button><button className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white">Create</button></div></div>
    </div>
  );
}
