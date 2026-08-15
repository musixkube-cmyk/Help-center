"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Integrations</h1>
        <p className="mt-1 text-sm text-neutral-500">Manage external connections — pixels, SDKs, MMPs, and data partners.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Website Pixel</h3>
            <p className="mt-1 text-xs text-neutral-500">Install and manage the Musicosy pixel</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Mobile SDK</h3>
            <p className="mt-1 text-xs text-neutral-500">Integrate the iOS/Android SDK</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">MMP Partners</h3>
            <p className="mt-1 text-xs text-neutral-500">Connect measurement partners (AppsFlyer, Branch)</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Data Partners</h3>
            <p className="mt-1 text-xs text-neutral-500">Third-party data enrichment connections</p>
          </Link>
          <Link
            href="/ads/leads/crm"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">CRM Sync</h3>
            <p className="mt-1 text-xs text-neutral-500">Bidirectional CRM integrations</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">SSP / Exchange</h3>
            <p className="mt-1 text-xs text-neutral-500">Programmatic exchange connections</p>
          </Link>

      </div>
    </div>
  );
}
