import axios from "axios";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
// import Bttn from "./bttn"
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

export async function getRequest(input: string, model: string) {
  'use server';
  try {
    let payload: string = 'http://localhost:3000/api/';
    let sl: string = '/?input=';
    payload = payload.concat(model, sl, input);
    const response = await axios.get(payload);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
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
  );

}


// import { ShowcaseSection } from "@/components/Layouts/showcase-section";
// import AIChatClient from "./bttn";

// export default async function Home() {
//   return (
//     <ShowcaseSection title="AI Chat Test" className="space-y-6 !p-6.5">
//       <AIChatClient />
//     </ShowcaseSection>
//   );
// }
