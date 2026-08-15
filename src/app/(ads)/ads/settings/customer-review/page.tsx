"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function CustomerReviewPage() {
  return (
    <div>
      <PageHeader title="Customer Review" description="Account review status and required actions." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Customer Review will appear here.</p>
      </div>
    </div>
  );
}
