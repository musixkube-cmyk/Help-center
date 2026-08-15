"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Exchange</h1>
        <p className="mt-1 text-sm text-neutral-500">Programmatic exchange connections.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/ads/exchange/open-auction"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Open Auction</h3>
            <p className="mt-1 text-xs text-neutral-500">Open auction inventory</p>
          </Link>
          <Link
            href="/ads/exchange/pmp"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">PMP</h3>
            <p className="mt-1 text-xs text-neutral-500">Private marketplace deals</p>
          </Link>
          <Link
            href="/ads/exchange/programmatic-guaranteed"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Programmatic Guaranteed</h3>
            <p className="mt-1 text-xs text-neutral-500">Guaranteed delivery deals</p>
          </Link>
          <Link
            href="/ads/exchange/partners"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Partners</h3>
            <p className="mt-1 text-xs text-neutral-500">Connected DSPs and SSPs</p>
          </Link>

      </div>
    </div>
  );
}
