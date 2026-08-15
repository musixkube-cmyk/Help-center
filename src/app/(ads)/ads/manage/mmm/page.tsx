"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function MMMDataRequestsPage() {
  return (
    <div>
      <PageHeader title="MMM Data Requests" description="Submit and track Marketing Mix Modeling data requests." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for MMM Data Requests will appear here.</p>
      </div>
    </div>
  );
}
