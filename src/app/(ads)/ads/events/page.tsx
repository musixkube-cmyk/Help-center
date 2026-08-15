"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Events Manager</h1>
          <p className="mt-1 text-sm text-neutral-500">Configure conversion events and data sources for tracking.</p>
        </div>
                <Link
          href="#"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Add Event
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Count (7d)</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last received</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Purchase</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Website pixel</td>
                <td className="px-4 py-3 text-sm text-neutral-700">186</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">2 min ago</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Add to Cart</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Website pixel</td>
                <td className="px-4 py-3 text-sm text-neutral-700">412</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">5 min ago</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Lead</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Instant Form</td>
                <td className="px-4 py-3 text-sm text-neutral-700">234</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1 hour ago</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">App Install</td>
                <td className="px-4 py-3 text-sm text-neutral-700">SDK</td>
                <td className="px-4 py-3 text-sm text-neutral-700">89</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">3 hours ago</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
