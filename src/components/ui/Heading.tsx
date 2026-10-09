import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  serif?: boolean;
}

const levelStyles = {
  1: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-academic-navy leading-[1.15]",
  2: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-academic-navy leading-snug",
  3: "text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-academic-navy leading-snug",
  4: "text-lg sm:text-xl font-semibold text-academic-navy leading-snug",
  5: "text-base sm:text-lg font-medium text-academic-navy",
  6: "text-sm sm:text-base font-medium text-academic-navy",
};

export function Heading({
  level = 2,
  as,
  serif = true,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as || (`h${level}` as const);

  return (
    <Component
      className={cn(
        levelStyles[level],
        serif ? "font-serif" : "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
