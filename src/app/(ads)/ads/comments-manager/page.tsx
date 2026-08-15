"use client";

import { useState } from "react";
import { PageHeader, TabBar, FilterBar, DataTable, Button } from "@/components/ads/ui";

const comments = [
  { id: "cm1", user: "Alex Rivera", text: "Love the new summer playlist ad! 🔥", ad: "Summer Anthem — Audio", time: "5 min ago", replied: false },
  { id: "cm2", user: "Jordan Lee", text: "Where can I find more tracks like this?", ad: "Summer Anthem — Audio", time: "22 min ago", replied: true },
  { id: "cm3", user: "Sam Chen", text: "This brand is amazing, been a fan for years", ad: "Brand Story — Video", time: "1 hr ago", replied: false },
  { id: "cm4", user: "Casey Kim", text: "Link doesn\'t work on mobile 😕", ad: "New Release Display", time: "3 hr ago", replied: false },
  { id: "cm5", user: "Morgan Blake", text: "Great podcast recommendation, subscribed!", ad: "Podcast Promo — Audio", time: "5 hr ago", replied: true },
];

const columns = [
  { key: "user", label: "User" },
  { key: "text", label: "Comment" },
  { key: "ad", label: "Ad" },
  { key: "time", label: "Time" },
  { key: "replied", label: "Replied", render: (v: boolean) => (
    <span className={`text-xs font-medium ${v ? "text-emerald-600" : "text-amber-600"}`}>
      {v ? "Yes" : "Pending"}
    </span>
  )},
];

export default function CommentsManagerPage() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader
        title="Comments Manager"
        description="Monitor, reply to, and moderate comments on your ads."
      />
      <TabBar tabs={["All Comments", "Unreplied", "Flagged", "Hidden"]} active={tab} onChange={setTab} />
      <FilterBar searchPlaceholder="Search comments…" onSearch={setSearch} />
      <DataTable columns={columns} data={tab === 1 ? comments.filter((c) => !c.replied) : comments} />
    </div>
  );
}
