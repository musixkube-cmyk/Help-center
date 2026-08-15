"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Add Payment Method</h1>
          <p className="mt-1 text-sm text-neutral-500">Securely add a new payment method.</p>
        </div>
      </div>
      <div className="mx-auto max-w-lg rounded-xl border border-neutral-100 bg-white p-6">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-neutral-700 mb-1">Card number</label><input placeholder="4242 4242 4242 4242" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-neutral-700 mb-1">Expiry</label><input placeholder="MM/YY" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900" /></div>
            <div><label className="block text-sm font-medium text-neutral-700 mb-1">CVC</label><input placeholder="123" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900" /></div>
          </div>
          <div><label className="block text-sm font-medium text-neutral-700 mb-1">Billing address</label><input placeholder="123 Main St" className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900" /></div>
        </div>
        <button className="mt-6 w-full rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white">Add Payment Method</button>
      </div>
    </div>
  );
}
