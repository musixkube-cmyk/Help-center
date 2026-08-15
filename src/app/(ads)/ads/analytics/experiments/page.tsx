"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Experiments</h1>
          <p className="mt-1 text-sm text-neutral-500">Measure incremental impact with split tests and lift studies.</p>
        </div>
                <Link
          href="#"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Create Experiment
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Experiment</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Budget A/B Test</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Split test</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Running</td>
                <td className="px-4 py-3 text-sm text-neutral-700">72%</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Day 7 of 14</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Creative Lift Study</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Lift study</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Completed</td>
                <td className="px-4 py-3 text-sm text-neutral-700">95%</td>
                <td className="px-4 py-3 text-sm text-neutral-700">14 days</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
