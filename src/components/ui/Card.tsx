import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "warm" | "grey" | "outline";
  hoverable?: boolean;
}

export function Card({
  variant = "white",
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    white: "bg-white border-academic-grey-border",
    warm: "bg-academic-warm border-academic-grey-border",
    grey: "bg-academic-grey border-academic-grey-border",
    outline: "bg-transparent border-academic-grey-border",
  };

  return (
    <div
      className={cn(
        "rounded-md border p-6 transition-all duration-200 shadow-academic",
        variantStyles[variant],
        hoverable && "hover:-translate-y-0.5 hover:shadow-academic-md hover:border-academic-blue/30 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg sm:text-xl font-semibold text-academic-navy font-serif leading-snug", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-academic-ink-secondary leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("pt-4 mt-4 border-t border-academic-grey-border/60 flex items-center justify-between text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}
