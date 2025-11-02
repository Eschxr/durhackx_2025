import { Metadata } from "next";
import { Suspense } from "react";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopChannels } from "@/components/Tables/top-channels";


import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Button } from "@/components/ui-elements/button";

export const metadata: Metadata = {
  title: "Tables",
};

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function TablesPage({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <Breadcrumb pageName="Discussion Box" />

      <div className="space-y-10">
        {/* AI Chat Section */}
        <ShowcaseSection title="AI Chat Test" className="space-y-6 !p-6.5">
          <TextAreaGroup
            label="AI Input Area"
            placeholder="Please enter your input here"
          />
          <button
            className="rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
            type="submit"
          >
            Submit
        </button>
        </ShowcaseSection>
        {/* Table Section */}
        <Suspense>
          <TopChannels />
        </Suspense>
      </div>
    </>
  );
}
