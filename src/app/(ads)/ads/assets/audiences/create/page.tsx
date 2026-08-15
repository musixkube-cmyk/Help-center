"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function CreateAudiencePage() {
  return (
    <div>
      <PageHeader title="Create Audience" description="Define a new reusable audience for targeting." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Audience name">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Type">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>Custom</option>', '<option>Lookalike</option>', '<option>Demographic</option>', '<option>Artist Affinity</option>', '<option>Music Behavior</option>', '<option>Exclusion</option>']
          </select>
        </FormField>
        <FormField label="Locations"
          description="Countries or regions to include.">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Age range">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>18-24</option>', '<option>25-34</option>', '<option>35-44</option>', '<option>45-55</option>', '<option>55+</option>', '<option>All</option>']
          </select>
        </FormField>
        <FormField label="Gender">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>All</option>', '<option>Male</option>', '<option>Female</option>', '<option>Non-binary</option>']
          </select>
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
