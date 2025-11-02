import { Suspense, useState } from "react";
import { SystemTime } from "@/components/ui-elements/SystemTime";
import { ProjectProgress } from "@/components/Charts/project-progress";
import { AIAgentPartition } from "@/components/Charts/ai-agent-partition";
import { ProgressTimeline } from "@/components/Charts/progress-timeline";
import { PerformanceTrend } from "@/components/Charts/performance-trend";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";

type PropsType = {
  searchParams: Promise<{ selected_time_frame?: string }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <SystemTime />
      <h1>Model Example Output</h1>
      <br></br>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <br></br>
      <br></br>
      <h1>Project Management</h1>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ProjectProgress className="col-span-12 xl:col-span-7" />
        <AIAgentPartition className="col-span-12 xl:col-span-5" />
        <ProgressTimeline className="col-span-12 xl:col-span-7" />
        <PerformanceTrend className="col-span-12 xl:col-span-5" />
      </div>
    </>
  );
}
