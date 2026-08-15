"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Edit Campaign</h1>
          <p className="mt-1 text-sm text-neutral-500">Modify campaign settings, budget, and targeting.</p>
        </div>
      </div>
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Campaign name</label>
            <input defaultValue="Summer Launch 2026" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Objective</label>
            <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none">
              <option>Conversions</option><option>Awareness</option><option>Consideration</option><option>Traffic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Daily budget</label>
            <input defaultValue="100" type="number" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Delivery type</label>
            <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none">
              <option>Standard</option><option>Accelerated</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700">Cancel</button>
          <button className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white">Save</button>
        </div>
      </div>
    </div>
  );
}
