"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type ActiveProps = { className?: string };

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  /**
   * Applied (merged into className) when the current pathname matches this
   * link's href. Replaces TanStack Router Link's built-in `activeProps`,
   * which next/link does not provide.
   */
  activeProps?: ActiveProps;
};

/**
 * Links to any path in the navigation tree. In the original TanStack Start
 * app every non-home path was served by the splat route (src/routes/$.tsx);
 * here each path is a real route handled by the catch-all
 * src/app/[...path]/page.tsx, so a plain next/link is enough.
 *
 * A link is considered "active" when the pathname equals the href or is a
 * descendant of it (so a top-level mega-menu item stays highlighted while
 * browsing its children).
 */
export function NavLink({
  href,
  className,
  activeProps,
  ref,
  ...rest
}: Props) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const merged =
    isActive && activeProps?.className
      ? `${className ?? ""} ${activeProps.className}`.trim()
      : className;

  return <Link href={href} className={merged} ref={ref} {...rest} />;
}
