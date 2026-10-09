import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
}

export function Breadcrumbs({
  items,
  showHomeIcon = true,
  className,
  ...props
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs font-sans text-academic-ink-muted", className)}
      {...props}
    >
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-academic-navy transition-colors"
          >
            {showHomeIcon && <Home className="w-3.5 h-3.5" />}
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-academic-ink-faint flex-shrink-0" />
              {isLast || !item.href ? (
                <span
                  className="font-medium text-academic-navy truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-academic-navy transition-colors truncate max-w-[160px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
