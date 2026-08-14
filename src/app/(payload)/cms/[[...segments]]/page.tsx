import { RootPage } from "@payloadcms/next/views";
import configPromise from "@payload-config";
import { importMap } from "../importMap.js";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
};

export default async function Page({ params, searchParams }: Args) {
  const p = await params;
  const sp = await searchParams;
  // `@payload-config` resolves to buildConfig() which returns a Promise.
  // Await it to get the actual config object. (This is also what RootPage
  // does internally — passing the resolved value is fine.)
  const config = await configPromise;
  return RootPage({
    config,
    importMap,
    params: p,
    searchParams: sp,
  });
}
