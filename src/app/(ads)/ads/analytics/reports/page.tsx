"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Reports</h1>
          <p className="mt-1 text-sm text-neutral-500">Create distributable performance reports. Custom columns, breakdowns, schedule.</p>
        </div>
                <Link
          href="/ads/analytics/reports/create"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Create Report
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Report</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Schedule</th>
              <th className="px-4 py-3">Last run</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Weekly Campaign Summary</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Scheduled</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Every Monday</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 7, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Monthly ROAS Deep Dive</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Scheduled</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1st of month</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 1, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Q2 Performance Report</td>
                <td className="px-4 py-3 text-sm text-neutral-700">One-time</td>
                <td className="px-4 py-3 text-sm text-neutral-700">—</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Jul 1, 2026</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Completed</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
