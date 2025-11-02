"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export function OverviewCardsGroup() {
  const [responses, setResponses] = useState({
    llama: "Loading...",
    llava: "Loading...",
    mistral: "Loading...",
    orca: "Loading...",
    qwen: "Loading...",
  });

  async function getRequest(input: string, model: string) {
    try {
      const payload = `http://localhost:3000/api/${model}/?input=${encodeURIComponent(input)}`;
      const response = await axios.get(payload);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return `${model} is currently offline.`;
    }
  }

  useEffect(() => {
    (async () => {
      const llama = await getRequest(
        "Please send a greeting and remind me to go to work.",
        "llama"
      );
      const llava = await getRequest(
        "Imagine I've just overslept and am about to miss an important meeting, wake me up in one line.",
        "llava"
      );
      const mistral = await getRequest(
        "Remind me to complete a chemistry presentation by a date in December.",
        "mistral"
      );
      const orca = await getRequest(
        "Remind me that I have a cybersecurity coursework due on November 6th.",
        "orca"
      );
      const qwen = await getRequest(
        "Remind me of an important task to do today as a chemistry student.",
        "qwen"
      );

      setResponses({ llama, llava, mistral, orca, qwen });
    })();
  }, []);

  return (
    <div
      className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5 
                 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors"
    >
      <OverviewCard
        label="Llama"
        data={{ value: responses.llama }}
        Icon={icons.Views}
      />
      <OverviewCard
        label="Llava"
        data={{ value: responses.llava }}
        Icon={icons.Profit}
      />
      <OverviewCard
        label="Mistral"
        data={{ value: responses.mistral }}
        Icon={icons.Product}
      />
      <OverviewCard
        label="Orca"
        data={{ value: responses.orca }}
        Icon={icons.Users}
      />
      <OverviewCard
        label="Qwen"
        data={{ value: responses.qwen }}
        Icon={icons.Users}
      />
    </div>
  );
}
