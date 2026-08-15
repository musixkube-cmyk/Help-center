"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Creative Library</h1>
          <p className="mt-1 text-sm text-neutral-500">Store and reuse approved creative assets. Search, tag, and manage versions.</p>
        </div>
                <Link
          href="/ads/creatives/studio"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Upload Asset
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Asset</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last updated</th>
              <th className="px-4 py-3">Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Summer Hero Image</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Image</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1200×628</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Approved</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 10, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">summer, hero</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Brand Audio 30s</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Audio</td>
                <td className="px-4 py-3 text-sm text-neutral-700">30s</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Approved</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 8, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">brand, audio</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Product Video 15s</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Video</td>
                <td className="px-4 py-3 text-sm text-neutral-700">15s</td>
                <td className="px-4 py-3 text-sm text-neutral-700">In review</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 5, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">product, video</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Logo Dark</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Image</td>
                <td className="px-4 py-3 text-sm text-neutral-700">200×200</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Approved</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Jul 30, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">logo</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
