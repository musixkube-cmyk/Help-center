"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function CrossClientReportingPage() {
  return (
    <div>
      <PageHeader title="Cross-Client Reporting" description="Compare performance across all agency clients." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Cross-Client Reporting will appear here.</p>
      </div>
    </div>
  );
}
