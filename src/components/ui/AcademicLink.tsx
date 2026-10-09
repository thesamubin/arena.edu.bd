import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AcademicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  showExternalIcon?: boolean;
  variant?: "default" | "subtle" | "standalone";
}

export function AcademicLink({
  href,
  external = false,
  showExternalIcon = false,
  variant = "default",
  className,
  children,
  ...props
}: AcademicLinkProps) {
  const isExternal = external || href.startsWith("http");

  const variantClasses = {
    default: "text-academic-navy hover:text-academic-blue underline underline-offset-4 decoration-academic-blue/40 hover:decoration-academic-blue transition-colors",
    subtle: "text-academic-ink-secondary hover:text-academic-navy transition-colors",
    standalone: "inline-flex items-center gap-1 font-medium text-academic-blue hover:text-academic-blue-dark group transition-colors",
  };

  const classes = cn("font-sans", variantClasses[variant], className);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        <span>{children}</span>
        {showExternalIcon && (
          <ArrowUpRight className="inline-block w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-70" />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      <span>{children}</span>
      {variant === "standalone" && showExternalIcon && (
        <ArrowUpRight className="inline-block w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-70" />
      )}
    </Link>
  );
}
