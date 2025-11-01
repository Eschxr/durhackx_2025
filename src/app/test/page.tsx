import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Button } from "@/components/ui-elements/button"
import { Alert } from "@/components/ui-elements/alert"
import { Props } from "react-apexcharts";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <ShowcaseSection title="AI Chat Test" className="space-y-6 !p-6.5">
        <TextAreaGroup
            label="AI Input Area"
            placeholder="Please enter your input here"
        />
        <Button label="Submit" variant="green" shape="rounded" />
    </ShowcaseSection>    
  );
}
