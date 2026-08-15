"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Catalogs</h1>
          <p className="mt-1 text-sm text-neutral-500">Manage product data for catalog ads — feeds, manual entry, Shopify sync.</p>
        </div>
                <Link
          href="/ads/catalog/feed"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Import Feed
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Catalog</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Feed status</th>
              <th className="px-4 py-3">Last synced</th>
              <th className="px-4 py-3">Format</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Main Product Catalog</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1,240</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Healthy</td>
                <td className="px-4 py-3 text-sm text-neutral-700">2 hours ago</td>
                <td className="px-4 py-3 text-sm text-neutral-700">DPA</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Holiday Collection</td>
                <td className="px-4 py-3 text-sm text-neutral-700">86</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Healthy</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1 day ago</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Carousel</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Shopify Sync</td>
                <td className="px-4 py-3 text-sm text-neutral-700">3,100</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Warning: 12 errors</td>
                <td className="px-4 py-3 text-sm text-neutral-700">3 hours ago</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Shoppable</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
