import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "warm" | "white" | "grey" | "navy";
  as?: React.ElementType;
}

const spacingClasses = {
  none: "py-0",
  sm: "py-6 sm:py-8",
  md: "py-10 sm:py-14",
  lg: "py-14 sm:py-20",
  xl: "py-20 sm:py-28",
};

const backgroundClasses = {
  warm: "bg-academic-warm",
  white: "bg-white",
  grey: "bg-academic-grey border-y border-academic-grey-border",
  navy: "bg-academic-navy text-academic-warm",
};

export function Section({
  spacing = "lg",
  background = "warm",
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(spacingClasses[spacing], backgroundClasses[background], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
