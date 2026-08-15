"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">CRM Integrations</h1>
        <p className="mt-1 text-sm text-neutral-500">Sync leads to your CRM system.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">HubSpot</h3>
            <p className="mt-1 text-xs text-neutral-500">Sync leads and contacts to HubSpot</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Salesforce</h3>
            <p className="mt-1 text-xs text-neutral-500">Push leads to Salesforce CRM</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Zapier</h3>
            <p className="mt-1 text-xs text-neutral-500">Connect to 5,000+ apps via Zapier</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Custom Webhook</h3>
            <p className="mt-1 text-xs text-neutral-500">Set up a custom webhook endpoint</p>
          </Link>

      </div>
    </div>
  );
}
