import axios from "axios";

import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Button } from "@/components/ui-elements/button";
import { Alert } from "@/components/ui-elements/alert";
import { Props } from "react-apexcharts";
import { Input } from "postcss";
import { promiseHooks } from "v8";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

// async function getRequest(input: string, model: string) {
//   try {
//     let payload: string = '/api/'
//     let sl: string = '/input='
//     payload = payload.concat(model, sl, input)
//     const response = await axios.get(payload);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

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
