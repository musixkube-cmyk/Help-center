"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Brand Safety</h1>
        <p className="mt-1 text-sm text-neutral-500">Central policy and control center for brand safety and suitability.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Blocklists</h3>
            <p className="mt-1 text-xs text-neutral-500">Manage content and publisher blocklists</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Suitability</h3>
            <p className="mt-1 text-xs text-neutral-500">Set brand suitability tiers and controls</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Content controls</h3>
            <p className="mt-1 text-xs text-neutral-500">Control what content your ads appear alongside</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Inventory filter</h3>
            <p className="mt-1 text-xs text-neutral-500">Filter available inventory by safety rating</p>
          </Link>

      </div>
    </div>
  );
}
