"use client";

import { PageHeader, DataTable, StatusBadge, Button, MetricCard } from "@/components/ads/ui";

const reviews = [
  { id: "cr1", campaign: "Summer Launch 2025", ad: "Summer Anthem — Audio", status: "approved" as const, reviewer: "Policy Team", date: "Mar 20, 2025", notes: "All checks passed" },
  { id: "cr2", campaign: "Brand Awareness Q2", ad: "Brand Story — Video", status: "in_review" as const, reviewer: "Policy Team", date: "Mar 22, 2025", notes: "Under review" },
  { id: "cr3", campaign: "Lead Gen - Newsletter", ad: "Sign Up Form", status: "rejected" as const, reviewer: "Policy Team", date: "Mar 18, 2025", notes: "Misleading claims in headline" },
];

const columns = [
  { key: "campaign", label: "Campaign" },
  { key: "ad", label: "Ad" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status === "approved" ? "active" : row.status} /> },
  { key: "reviewer", label: "Reviewer" },
  { key: "date", label: "Date" },
  { key: "notes", label: "Notes" },
];

export default function CustomerReviewPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Customer Review"
        description="Track the review status of your ads through our policy and quality review process."
        breadcrumbs={[{ label: "Account", href: "/ads/account" }, { label: "Customer Review" }]}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Approved" value="1" delta="ad" deltaType="neutral" />
        <MetricCard label="In Review" value="1" delta="ad" deltaType="neutral" />
        <MetricCard label="Rejected" value="1" delta="ad" deltaType="negative" />
      </div>
      <DataTable columns={columns} data={reviews} />
    </div>
  );
}
