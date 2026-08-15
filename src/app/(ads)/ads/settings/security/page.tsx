"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Security & Documents</h1>
        <p className="mt-1 text-sm text-neutral-500">Manage account security, uploaded documents, and compliance.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Two-Factor Auth</h3>
            <p className="mt-1 text-xs text-neutral-500">Enable or manage 2FA settings</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Sessions</h3>
            <p className="mt-1 text-xs text-neutral-500">View and manage active sessions</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Uploaded Documents</h3>
            <p className="mt-1 text-xs text-neutral-500">Business licenses, tax forms, IDs</p>
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Audit Log</h3>
            <p className="mt-1 text-xs text-neutral-500">Account activity and change history</p>
          </Link>

      </div>
    </div>
  );
}
