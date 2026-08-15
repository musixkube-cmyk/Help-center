"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function InboxPage() {
  return (
    <div>
      <PageHeader title="Inbox" description="Unified conversation inbox with response and assignment workflows." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Inbox will appear here.</p>
      </div>
    </div>
  );
}
