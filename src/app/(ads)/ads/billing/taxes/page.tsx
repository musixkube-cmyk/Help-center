"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function TaxesPage() {
  return (
    <div>
      <PageHeader title="Taxes" description="Manage tax profile and view tax documents." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Tax ID"
          description="Federal tax identification number.">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Tax classification">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>LLC</option>', '<option>Corporation</option>', '<option>Sole Proprietor</option>', '<option>Partnership</option>', '<option>Non-profit</option>']
          </select>
        </FormField>
        <FormField label="Filing status">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>Up to date</option>', '<option>Pending</option>', '<option>Exempt</option>']
          </select>
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
