/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

// Turbopack-aware createServerReference. Under Next.js 16 + Turbopack,
// server actions are registered via react-server-dom-turbopack, NOT
// react-server-dom-webpack. Using the wrong variant causes:
//   "Functions cannot be passed directly to Client Components unless
//    you explicitly expose it by marking it with 'use server'"
// because Turbopack can't serialize webpack-registered references.
import { createServerReference } from "react-server-dom-turbopack/client";

export const serverFunction = createServerReference("serverAction");
