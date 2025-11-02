"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { PeriodPicker } from "@/components/period-picker";
import type { ApexOptions } from "apexcharts";
import { useState, useEffect } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type AgentData = { name: string; value: number };

type PropsType = {
  className?: string;
};

export function AIAgentPartition({ className }: PropsType) {
  // Example data — replace with backend data later
  const [data, setData] = useState<AgentData[]>([
    { name: "Research", value: 25 },
    { name: "Transcript", value: 20 },
    { name: "PPT Creation", value: 30 },
    { name: "Organization", value: 15 },
    { name: "Quality Control", value: 10 },
  ]);

  useEffect(() => {
    // Fetch real data here if needed
  }, []);

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "inherit",
    },
    colors: ["#5750F1", "#5475E5", "#8099EC", "#ADBCF2", "#C7D2FE"],
    labels: data.map((d) => d.name),
    legend: {
      position: "bottom",
      itemMargin: { horizontal: 8, vertical: 5 },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Agents",
              fontSize: "16px",
              color: "#64748b",
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    responsive: [
      { breakpoint: 1280, options: { chart: { width: "100%" } } },
      { breakpoint: 640, options: { chart: { width: "100%" } } },
    ],
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-[auto_1fr] gap-6 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          AI Agent Categories
        </h2>
        <PeriodPicker defaultValue="Monthly" sectionKey="ai_agent_partition" />
      </div>

      <div className="grid place-items-center">
        <Chart
          options={chartOptions}
          series={data.map((d) => d.value)}
          type="donut"
          height={300}
        />
      </div>
    </div>
  );
}
