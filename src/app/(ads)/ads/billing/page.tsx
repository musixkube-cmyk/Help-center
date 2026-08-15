"use client";

import Link from "next/link";
import { PageHeader, MetricCard, DataTable, StatusBadge, Button, TabBar, FormField } from "@/components/ads/ui";
import { useState } from "react";

export default function BillingOverview() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <PageHeader title="Billing" description="Manage payment, invoices, and billing identity." />

      <TabBar tabs={["Overview", "Payment Methods", "Invoices", "Transactions", "Credits"]} active={tab} onChange={setTab} />

      {tab === 0 && (
        <div>
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Account balance" value="$4,320" />
            <MetricCard label="Current spend" value="$3,680" />
            <MetricCard label="Next invoice" value="Aug 15" />
            <MetricCard label="Payment method" value="Visa ····4242" />
          </div>
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Spending trend</h3>
            <div className="flex h-48 items-center justify-center text-sm text-neutral-400">Spend chart renders here</div>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div>
          <div className="mb-4 flex justify-end">
            <Link href="/ads/billing/payment-methods/add"><Button>Add Payment Method</Button></Link>
          </div>
          <DataTable
            columns={[
              { key: "method", label: "Method", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
              { key: "type", label: "Type" },
              { key: "last4", label: "Last 4" },
              { key: "expiry", label: "Expiry" },
              { key: "default", label: "Default" },
            ]}
            data={[
              { id: "1", method: "Visa ending 4242", type: "Credit card", last4: "4242", expiry: "12/27", default: "Yes" },
              { id: "2", method: "Mastercard ending 8888", type: "Credit card", last4: "8888", expiry: "06/26", default: "No" },
            ]}
          />
        </div>
      )}

      {tab === 2 && (
        <DataTable
          columns={[
            { key: "invoice", label: "Invoice", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
            { key: "date", label: "Date" },
            { key: "amount", label: "Amount" },
            { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
            { key: "due", label: "Due date" },
          ]}
          data={[
            { id: "1", invoice: "INV-2026-08", date: "Aug 1, 2026", amount: "$3,680.00", status: "active", due: "Aug 15, 2026" },
            { id: "2", invoice: "INV-2026-07", date: "Jul 1, 2026", amount: "$2,140.00", status: "completed", due: "Jul 15, 2026" },
            { id: "3", invoice: "INV-2026-06", date: "Jun 1, 2026", amount: "$1,890.00", status: "completed", due: "Jun 15, 2026" },
          ]}
        />
      )}

      {tab === 3 && (
        <DataTable
          columns={[
            { key: "txn", label: "Transaction", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
            { key: "type", label: "Type" },
            { key: "amount", label: "Amount" },
            { key: "date", label: "Date" },
            { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          ]}
          data={[
            { id: "1", txn: "TXN-8924", type: "Charge", amount: "$120.00", date: "Aug 12, 2026", status: "active" },
            { id: "2", txn: "TXN-8923", type: "Charge", amount: "$95.00", date: "Aug 11, 2026", status: "active" },
            { id: "3", txn: "TXN-8922", type: "Refund", amount: "$15.00", date: "Aug 10, 2026", status: "completed" },
          ]}
        />
      )}

      {tab === 4 && (
        <DataTable
          columns={[
            { key: "credit", label: "Credit", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> },
            { key: "type", label: "Type" },
            { key: "amount", label: "Amount" },
            { key: "expires", label: "Expires" },
            { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v as any} /> },
          ]}
          data={[
            { id: "1", credit: "Welcome credit", type: "Promotional", amount: "$500.00", expires: "Dec 31, 2026", status: "active" },
            { id: "2", credit: "Spend match Q3", type: "Match", amount: "$250.00", expires: "Sep 30, 2026", status: "active" },
          ]}
        />
      )}
    </div>
  );
}
