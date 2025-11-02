"use client";

import { cn } from "@/lib/utils";
import { PeriodPicker } from "@/components/period-picker";
import { useState, useEffect } from "react";

type ProgressItem = {
  name: string;
  percent: number;
  color: string;
};

type PropsType = {
  className?: string;
};

export function ProjectProgress({ className }: PropsType) {
  const [data, setData] = useState<ProgressItem[]>([
    { name: "Planning", percent: 70, color: "#5750F1" },
    { name: "Development", percent: 50, color: "#5475E5" },
    { name: "Testing", percent: 35, color: "#8099EC" },
    { name: "Deployment", percent: 20, color: "#ADBCF2" },
  ]);

  useEffect(() => {
    // Example for dynamic fetching if you want later:
    // fetch("/api/project-progress").then(...);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Project Progress
        </h2>
        <PeriodPicker defaultValue="Monthly" sectionKey="project_progress" />
      </div>

      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
              <div
                className="h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
