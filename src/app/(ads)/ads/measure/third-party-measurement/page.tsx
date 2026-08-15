"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function ThirdPartyMeasurementPage() {
  return (
    <div>
      <PageHeader title="Third-Party Measurement" description="Partner list and measurement configuration for verified reporting." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Third-Party Measurement will appear here.</p>
      </div>
    </div>
  );
}
