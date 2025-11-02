'use client'

import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
 
export default function Bttn() {
 
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
  )
}