"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
      if (BASE_URL) {
        const res = await fetch(`${BASE_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || `Login failed (${res.status})`);
        }
        window.location.href = "/ads";
      } else {
        // Mock mode — accept any credentials, redirect to dashboard
        await new Promise((r) => setTimeout(r, 600));
        window.location.href = "/ads";
      }
    } catch (err: any) {
      setError(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-sm px-6">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo-full-same-row.png"
            alt="Musicosy"
            className="h-10 w-auto object-contain"
          />
        </div>

        <h1 className="mb-1 text-xl font-bold text-neutral-900 text-center">
          Sign in to Ad Center
        </h1>
        <p className="mb-6 text-sm text-neutral-500 text-center">
          Enter your credentials to continue
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between text-sm">
          <Link
            href="/ads/signin/forgot-password"
            className="text-neutral-500 hover:text-neutral-700"
          >
            Forgot password?
          </Link>
          <Link
            href="/ads/signin/signup"
            className="text-neutral-500 hover:text-neutral-700"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
