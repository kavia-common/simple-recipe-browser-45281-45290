import { ReactNode, ElementType } from "react";

/**
 * PUBLIC_INTERFACE
 * Simple surface container with consistent spacing and card styling.
 */
type IntrinsicTag = "section" | "div" | "article" | "main" | "aside";

export default function Layout({
  children,
  as = "section",
  className = "",
}: {
  children: ReactNode;
  as?: IntrinsicTag;
  className?: string;
}) {
  const Tag = as as ElementType;
  return <Tag className={`card-op p-4 md:p-5 ${className}`}>{children}</Tag>;
}
