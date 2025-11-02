"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { PeriodPicker } from "@/components/period-picker";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  className?: string;
};

export function ProgressTimeline({ className }: PropsType) {
  const data = [
    { name: "Planning", start: new Date("2025-10-01").getTime(), end: new Date("2025-10-10").getTime() },
    { name: "Development", start: new Date("2025-10-11").getTime(), end: new Date("2025-10-30").getTime() },
    { name: "Testing", start: new Date("2025-11-01").getTime(), end: new Date("2025-11-10").getTime() },
    { name: "Deployment", start: new Date("2025-11-11").getTime(), end: new Date("2025-11-20").getTime() },
  ];

  const chartOptions: ApexOptions = {
    chart: { type: "rangeBar", toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, barHeight: "60%" } },
    colors: ["#5750F1", "#5475E5", "#8099EC", "#ADBCF2"],
    xaxis: { type: "datetime" },
    legend: { show: false },
    grid: { borderColor: "#e5e7eb" },
  };

  const series = [
    {
      data: data.map((item) => ({
        x: item.name,
        y: [item.start, item.end],
      })),
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Project Timeline
        </h2>
        <PeriodPicker defaultValue="Monthly" sectionKey="progress_timeline" />
      </div>
      <Chart options={chartOptions} series={series} type="rangeBar" height={300} />
    </div>
  );
}
