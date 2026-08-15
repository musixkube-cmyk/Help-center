"use client";

import { useState } from "react";
import { PageHeader, DataTable, StatusBadge, Button, FormField, MetricCard } from "@/components/ads/ui";

const requests = [
  { id: "mr1", name: "Q2 2025 MMM Analysis", status: "completed" as const, dateRange: "Apr 1 – Jun 30, 2025", channels: "Audio, Video, Display", requestedBy: "Marketing Team", requestedDate: "Mar 15, 2025" },
  { id: "mr2", name: "Holiday Campaign MMM", status: "pending_review" as const, dateRange: "Nov 15 – Dec 31, 2024", channels: "All channels", requestedBy: "Analytics Team", requestedDate: "Jan 10, 2025" },
  { id: "mr3", name: "Cross-Media Attribution", status: "in_review" as const, dateRange: "Jan 1 – Mar 31, 2025", channels: "Audio, Podcast", requestedBy: "Brand Team", requestedDate: "Apr 1, 2025" },
];

const columns = [
  { key: "name", label: "Request" },
  { key: "status", label: "Status", render: (_: any, row: any) => <StatusBadge status={row.status} /> },
  { key: "dateRange", label: "Date Range" },
  { key: "channels", label: "Channels" },
  { key: "requestedBy", label: "Requested By" },
  { key: "requestedDate", label: "Requested Date" },
];

export default function MMMDataRequestPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="MMM Data Request"
        description="Request Marketing Mix Modeling data to measure cross-channel advertising effectiveness."
        actions={<Button>+ New Request</Button>}
      />
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Completed" value="1" delta="request" deltaType="neutral" />
        <MetricCard label="In Review" value="1" delta="request" deltaType="neutral" />
        <MetricCard label="Pending" value="1" delta="request" deltaType="neutral" />
      </div>
      <DataTable columns={columns} data={requests} />
      <div className="mt-8 rounded-xl border border-neutral-100 bg-white p-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Submit New MMM Data Request</h2>
        <div className="space-y-4">
          <FormField label="Analysis Name">
            <input placeholder="e.g., Q3 2025 MMM Analysis" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Start Date">
              <input type="date" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none" />
            </FormField>
            <FormField label="End Date">
              <input type="date" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none" />
            </FormField>
          </div>
          <FormField label="Channels to Include">
            <div className="flex flex-wrap gap-2">
              {["Audio Ads", "Video Ads", "Display", "Podcast", "Radio", "Search", "Social"].map((ch) => (
                <label key={ch} className="flex items-center gap-2 text-sm text-neutral-700">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" />
                  {ch}
                </label>
              ))}
            </div>
          </FormField>
          <Button>Submit Request</Button>
        </div>
      </div>
    </div>
  );
}
