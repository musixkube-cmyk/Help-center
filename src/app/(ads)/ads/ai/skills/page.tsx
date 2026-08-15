"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">AI Skills & MCP</h1>
        <p className="mt-1 text-sm text-neutral-500">AI-powered workflows, skills, and Model Context Protocol connections.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/ads/ai/skills/browse"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">AI Dashboard</h3>
            <p className="mt-1 text-xs text-neutral-500">Overview of AI-powered tools and usage</p>
          </Link>
          <Link
            href="/ads/ai/skills/browse"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Browse Skills</h3>
            <p className="mt-1 text-xs text-neutral-500">Discover and install AI skills</p>
          </Link>
          <Link
            href="/ads/ai/skills/mcp"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">MCP Connections</h3>
            <p className="mt-1 text-xs text-neutral-500">Manage Model Context Protocol endpoints</p>
          </Link>
          <Link
            href="/ads/ai/skills/search"
            className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
          >
            <h3 className="text-sm font-semibold text-neutral-900">Search</h3>
            <p className="mt-1 text-xs text-neutral-500">Search all AI skills and templates</p>
          </Link>

      </div>
    </div>
  );
}
