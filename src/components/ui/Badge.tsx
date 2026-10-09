import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "blue" | "outline" | "muted" | "success" | "warning";
  size?: "sm" | "md";
}

const variantStyles = {
  navy: "bg-academic-navy text-academic-warm border-transparent",
  blue: "bg-academic-blue/10 text-academic-blue border-academic-blue/20",
  outline: "bg-transparent text-academic-navy border-academic-navy/30",
  muted: "bg-academic-grey text-academic-ink-secondary border-academic-grey-border",
  success: "bg-emerald-50 text-emerald-800 border-emerald-200",
  warning: "bg-amber-50 text-amber-800 border-amber-200",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
};

export function Badge({
  variant = "blue",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium font-sans border rounded-sm tracking-wide select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
