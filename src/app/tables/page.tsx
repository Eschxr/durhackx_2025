"use client";

import { Metadata } from "next";
import { Suspense } from "react";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopChannels } from "@/components/Tables/top-channels";


import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Button } from "@/components/ui-elements/button";

// export const metadata: Metadata = {
//   title: "Discussion Board",
// };

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default function TablesPage({ searchParams }: PropsType) {
  // const { selected_time_frame } = await searchParams;
  // const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);
  const [input, setInput] = useState("");
    const [llamaresponse, setLlamaResponse] = useState("");
    const [llavaresponse, setLlavaResponse] = useState("");
    const [mistralresponse, setMistralResponse] = useState("");
    const [orcaresponse, setOrcaResponse] = useState("");
    const [qwenresponse, setQwenResponse] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async () => {
      if (!input.trim()) return;
      setLoading(true);
      setLlamaResponse("");
      setLlavaResponse("");
      setMistralResponse("");
      setOrcaResponse("");
      setQwenResponse("");
  
      try {
        const res = await fetch(
          `http://localhost:3000/api/llama?input=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setLlamaResponse(data.data || "No response from AI.");
      } catch (err) {
        console.error(err);
        setLlamaResponse("Error connecting to backend.");
      } finally {
        // setLoading(false);
      }
      try {
        const res = await fetch(
          `http://localhost:3000/api/llava?input=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setLlavaResponse(data.data || "No response from AI.");
      } catch (err) {
        console.error(err);
        setLlavaResponse("Error connecting to backend.");
      } finally {
        // setLoading(false);
      }
      try {
        const res = await fetch(
          `http://localhost:3000/api/mistral?input=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setMistralResponse(data.data || "No response from AI.");
      } catch (err) {
        console.error(err);
        setMistralResponse("Error connecting to backend.");
      } finally {
        // setLoading(false);
      }
      try {
        const res = await fetch(
          `http://localhost:3000/api/orca?input=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setOrcaResponse(data.data || "No response from AI.");
      } catch (err) {
        console.error(err);
        setOrcaResponse("Error connecting to backend.");
      } finally {
        // setLoading(false);
      }
      try {
        const res = await fetch(
          `http://localhost:3000/api/qwen?input=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setQwenResponse(data.data || "No response from AI.");
      } catch (err) {
        console.error(err);
        setQwenResponse("Error connecting to backend.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
      <Breadcrumb pageName="Discussion Board" />

      <div className="space-y-10">
        {/* AI Chat Section */}
        <ShowcaseSection title="A.I. Discussion Board" className="space-y-6 !p-6.5">
          <textarea
            className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                   resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Please enter your input here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className={`px-5 py-2.5 rounded-md font-semibold text-white transition 
                   ${loading
                     ? "bg-green-400 cursor-not-allowed"
                     : "bg-green-600 hover:bg-green-700"}`}
            onClick={handleSubmit}
            disabled={loading}
          >
        {loading ? "Processing..." : "Submit"}
        </button>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">Llama Response:</h4>
        <p className="whitespace-pre-wrap">
          {llamaresponse || "Your response from Llama will appear here."}
        </p>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">Llava Response:</h4>
        <p className="whitespace-pre-wrap">
          {llavaresponse || "Your response from Llava will appear here."}
        </p>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">Mistral Response:</h4>
        <p className="whitespace-pre-wrap">
          {mistralresponse || "Your response from Mistral will appear here."}
        </p>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">Orca Response:</h4>
        <p className="whitespace-pre-wrap">
          {orcaresponse || "Your response from Orca will appear here."}
        </p>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">Qwen Response:</h4>
        <p className="whitespace-pre-wrap">
          {qwenresponse || "Your response from Llama will appear here."}
        </p>
        </div>
        </ShowcaseSection>
        {/* Table Section */}
        <Suspense>
          <TopChannels />
        </Suspense>
      </div>
    </>
  );
}
