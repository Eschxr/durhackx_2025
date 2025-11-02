"use client";

import { useState } from "react";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export default function TaskManagerPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `http://127.0.0.1:5000/api/task?input=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      setResponse(data.data || "No response from AI.");
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShowcaseSection title="Task Manager" className="space-y-6 !p-6.5">
      <label className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
        Please enter your task requirements
      </label>

      <textarea
        className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                   resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Please enter your input here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`px-5 py-2.5 rounded-md font-semibold text-white transition 
                   ${loading
                     ? "bg-green-400 cursor-not-allowed"
                     : "bg-green-600 hover:bg-green-700"}`}
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h4 className="font-semibold mb-2">AI Response:</h4>
        <p className="whitespace-pre-wrap">
          {response || "Your response will appear here."}
        </p>
      </div>
    </ShowcaseSection>
  );
}
