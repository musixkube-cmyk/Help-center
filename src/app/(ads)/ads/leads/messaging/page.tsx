"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function MessagingSettingsPage() {
  return (
    <div>
      <PageHeader title="Messaging Settings" description="Configure messaging preferences and assistant behavior." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Auto-reply enabled">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <FormField label="Response time target">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>1 hour</option>', '<option>4 hours</option>', '<option>24 hours</option>', '<option>48 hours</option>']
          </select>
        </FormField>
        <FormField label="Message assistant"
          description="AI assistant responds to common questions automatically.">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <FormField label="Business hours"
          description="e.g. Mon-Fri 9am-6pm EST">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
