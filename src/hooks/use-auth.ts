"use client";

import { useState, useCallback, useEffect } from "react";

/* ─── User type ─── */

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "owner" | "admin" | "editor" | "viewer";
  accountId: string;
  accountName: string;
  plan: {
    tier: "starter" | "medium" | "pro" | "enterprise";
    label: string;
    status: "active" | "trial" | "past_due" | "canceled";
  };
  permissions: string[];
  lastLoginAt: string;
}

/* ─── Auth state singleton ─── */

let cachedUser: CurrentUser | null = null;
let listeners: Array<() => void> = [];

function emitChange() {
  for (const l of listeners) l();
}

/* ─── Mock user (swap with real session endpoint) ─── */

const MOCK_USER: CurrentUser = {
  id: "usr_01",
  name: "Alex Rivera",
  email: "alex@musicosy.com",
  avatarUrl: undefined,
  role: "owner",
  accountId: "acct_01",
  accountName: "My Advertiser Account",
  plan: {
    tier: "medium",
    label: "Social Scroll — Medium",
    status: "active",
  },
  permissions: [
    "campaigns:read", "campaigns:write", "campaigns:delete",
    "ads:read", "ads:write",
    "audiences:read", "audiences:write",
    "creatives:read", "creatives:write",
    "leads:read", "leads:write",
    "billing:read",
    "settings:read", "settings:write",
    "team:read", "team:write",
    "analytics:read",
    "reports:read", "reports:write",
  ],
  lastLoginAt: "2026-08-12T09:14:00Z",
};

/* ─── Hook: useCurrentUser ─── */

export function useCurrentUser(): {
  user: CurrentUser | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [user, setUser] = useState<CurrentUser | null>(cachedUser);
  const [loading, setLoading] = useState(!cachedUser);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // In production this hits GET /api/auth/me
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
      if (BASE_URL) {
        const res = await fetch(`${BASE_URL}/api/auth/me`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error(`Auth ${res.status}`);
        const data = await res.json();
        cachedUser = data as CurrentUser;
      } else {
        // Mock mode — simulate latency
        await new Promise((r) => setTimeout(r, 80));
        cachedUser = MOCK_USER;
      }
      setUser(cachedUser);
    } catch (e: any) {
      setError(e.message || "Failed to fetch user");
      setUser(null);
    } finally {
      setLoading(false);
      emitChange();
    }
  }, []);

  useEffect(() => {
    if (!cachedUser) fetchUser();
  }, [fetchUser]);

  // Subscribe to external changes (e.g. after sign-out clears cache)
  useEffect(() => {
    const handler = () => setUser(cachedUser);
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((l) => l !== handler);
    };
  }, []);

  return { user, loading, error, refetch: fetchUser };
}

/* ─── Hook: useSignOut ─── */

export function useSignOut(): {
  signOut: () => Promise<void>;
  signingOut: boolean;
} {
  const [signingOut, setSigningOut] = useState(false);

  const signOut = useCallback(async () => {
    setSigningOut(true);
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
      if (BASE_URL) {
        await fetch(`${BASE_URL}/api/auth/logout`, {
          method: "POST",
          credentials: "include",
        });
      } else {
        await new Promise((r) => setTimeout(r, 100));
      }
    } catch {
      // Even if the server call fails, we still clear local state
    } finally {
      // Clear all local state
      cachedUser = null;
      emitChange();

      // Clear any stored tokens
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("refresh_token");
        sessionStorage.clear();
      }

      // Redirect to sign-in page
      if (typeof window !== "undefined") {
        window.location.href = "/ads/signin";
      }

      setSigningOut(false);
    }
  }, []);

  return { signOut, signingOut };
}

/* ─── Hook: useAuth (combined) ─── */

export function useAuth() {
  const { user, loading, error, refetch } = useCurrentUser();
  const { signOut, signingOut } = useSignOut();

  return {
    user,
    loading,
    error,
    refetch,
    signOut,
    signingOut,
    isAuthenticated: !!user,
    hasPermission: (perm: string) => user?.permissions.includes(perm) ?? false,
  };
}
