"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function DirectMessagesPage() {
  return (
    <div>
      <PageHeader title="Direct Messages" description="Conversation-to-lead workspace for managing DM leads." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Direct Messages will appear here.</p>
      </div>
    </div>
  );
}
