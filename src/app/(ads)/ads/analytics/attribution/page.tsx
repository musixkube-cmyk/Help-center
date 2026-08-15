"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Attribution</h1>
          <p className="mt-1 text-sm text-neutral-500">Evaluate contribution and outcomes. Compare attribution windows and conversion events.</p>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-3 gap-4">
        {[
          { label: "7-day click", value: "186 conversions" },
          { label: "1-day view", value: "42 conversions" },
          { label: "28-day click", value: "214 conversions" },
        ].map((w) => (
          <div key={w.label} className="rounded-xl border border-neutral-100 bg-white p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{w.label}</p>
            <p className="mt-2 text-xl font-bold text-neutral-900">{w.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">Conversion paths</h3>
        <div className="flex h-48 items-center justify-center text-sm text-neutral-400">Attribution path visualization</div>
      </div>
    </div>
  );
}
