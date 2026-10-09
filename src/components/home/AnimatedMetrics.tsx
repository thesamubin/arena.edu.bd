"use client";
import React, { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for a very smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

interface MetricItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function MetricItem({ value, prefix = "", suffix = "", label }: MetricItemProps) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div ref={ref} className="bg-[#1C1C1E] rounded-xl p-5 sm:p-8 flex flex-col items-center justify-center text-center border border-white/5 transition-transform hover:scale-[1.02] duration-300 shadow-xl shadow-black/50">
      <div className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-[#4FA1FF] font-sans font-medium leading-relaxed max-w-[150px]">
        {label}
      </div>
    </div>
  );
}

export function AnimatedMetrics() {
  const currentYear = new Date().getFullYear();
  const yearsOfExcellence = currentYear - 2012;

  const metrics = [
    {
      value: yearsOfExcellence,
      suffix: "+",
      label: "Years of Excellence in Security Education",
    },
    {
      value: 12000,
      suffix: "+",
      label: "Graduates Actively Defending Networks",
    },
    {
      value: 200,
      suffix: "+",
      label: "Corporate Partners Hiring Our Alumni",
    },
    {
      value: 45,
      suffix: "+",
      label: "Active Field Experts as Instructors",
    },
  ];

  return (
    <div className="mt-12 sm:mt-16 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
      <div className="bg-[#111111] p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((m, idx) => (
            <MetricItem key={idx} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
}
