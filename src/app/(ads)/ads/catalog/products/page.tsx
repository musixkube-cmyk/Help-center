"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Products</h1>
          <p className="mt-1 text-sm text-neutral-500">Manage products in your catalog.</p>
        </div>
        
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-100 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Availability</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Last updated</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Premium Headphones</td>
                <td className="px-4 py-3 text-sm text-neutral-700">$299.99</td>
                <td className="px-4 py-3 text-sm text-neutral-700">In stock</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Electronics</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 10, 2026</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Wireless Earbuds</td>
                <td className="px-4 py-3 text-sm text-neutral-700">$79.99</td>
                <td className="px-4 py-3 text-sm text-neutral-700">In stock</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Electronics</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 8, 2026</td>
            </tr>
            <tr className="border-b border-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700">Concert Tee</td>
                <td className="px-4 py-3 text-sm text-neutral-700">$34.99</td>
                <td className="px-4 py-3 text-sm text-neutral-700">In stock</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Merch</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Aug 5, 2026</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
