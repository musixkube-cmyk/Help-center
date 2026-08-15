"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function AgencyBillingPage() {
  return (
    <div>
      <PageHeader title="Agency Billing" description="Agency-level billing workspace with commission tracking." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Agency Billing will appear here.</p>
      </div>
    </div>
  );
}
