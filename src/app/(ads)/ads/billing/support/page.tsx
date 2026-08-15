"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function BillingSupportPage() {
  return (
    <div>
      <PageHeader title="Billing Support" description="Troubleshooting articles and support intake for billing issues." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Billing Support will appear here.</p>
      </div>
    </div>
  );
}
