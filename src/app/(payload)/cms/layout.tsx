/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import type { ServerFunctionClient } from "payload";
import config from "@payload-config";
import { RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./importMap.js";
import { serverFunction } from "./serverFunction.client";

import "@payloadcms/next/css";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => {
  return (
    <RootLayout
      config={Promise.resolve(config)}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
};

export default Layout;
