import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Shared props available on all Button render variants.
 * Replaces the previous `extends React.ButtonHTMLAttributes<HTMLButtonElement>`
 * pattern so that `onClick` is explicitly typed and forwarded to anchor and
 * Link variants as well as the native button variant.
 */
export interface ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  /** Renders as a Next.js Link (internal) or <a> (when external is true). */
  href?: string;
  /** Render as <a target="_blank" rel="noopener noreferrer">. Requires href. */
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
  /** Forwarded to all variants — button, Link, and external anchor. */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /** Only applied when rendering as a native <button>. */
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const variantStyles = {
  primary:
    "bg-academic-navy text-academic-warm hover:bg-academic-navy-light focus-visible:ring-academic-navy shadow-academic",
  secondary:
    "border border-academic-navy text-academic-navy hover:bg-academic-navy hover:text-academic-warm focus-visible:ring-academic-navy",
  accent:
    "bg-academic-blue text-white hover:bg-academic-blue-dark focus-visible:ring-academic-blue shadow-academic",
  ghost:
    "text-academic-navy hover:bg-academic-grey focus-visible:ring-academic-navy",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:ring-white",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-sm gap-1.5",
  md: "px-4 py-2 text-sm font-medium rounded-sm gap-2",
  lg: "px-6 py-3 text-base font-medium rounded-sm gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-sans tracking-wide transition-colors duration-150 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
