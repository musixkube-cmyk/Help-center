"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Automated Rules</h1>
          <p className="mt-1 text-sm text-neutral-500">Create rules that automatically adjust campaigns based on conditions.</p>
        </div>
                <Link
          href="#"
          className="flex h-9 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Create Rule
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Rule</th>
              <th className="px-4 py-3">Condition</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last triggered</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Pause low CTR</td>
                <td className="px-4 py-3 text-sm text-neutral-700">CTR &lt; 0.5% for 3 days</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Pause ad group</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 10, 2026</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Budget increase</td>
                <td className="px-4 py-3 text-sm text-neutral-700">CPA &lt; $10 and spend &gt; 80%</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Increase budget 20%</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Active</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 8, 2026</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
