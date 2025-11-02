"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { PeriodPicker } from "@/components/period-picker";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = { className?: string };

export function PerformanceTrend({ className }: PropsType) {
  const series = [
    {
      name: "Performance",
      data: [40, 50, 60, 55, 70, 80, 90],
    },
  ];

  const chartOptions: ApexOptions = {
    chart: { type: "line", toolbar: { show: false } },
    colors: ["#5475E5"],
    stroke: { curve: "smooth", width: 3 },
    grid: { borderColor: "#e5e7eb" },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: { style: { colors: "#64748b" } },
    },
    yaxis: { labels: { style: { colors: "#64748b" } } },
    tooltip: { theme: "light" },
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Performance Trend
        </h2>
        <PeriodPicker defaultValue="Weekly" sectionKey="performance_trend" />
      </div>
      <Chart options={chartOptions} series={series} type="line" height={300} />
    </div>
  );
}
