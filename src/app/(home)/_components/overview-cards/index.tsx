import axios from "axios";
import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { views, profit, products, users } = await getOverviewData();

  async function getRequest(input: string, model: string) {
    try {
      let payload: string = 'http://localhost:3000/api/';
      let sl: string = '/?input=';
      payload = payload.concat(model, sl, input);
      const response = await axios.get(payload);
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  let llamaResponse = getRequest("Please send a greeting and remind me to go to work. Try and be creative in your message if possible, but keep things formal. Send just the greeting itself in one line only please", "llama")
  let llavaResponse = getRequest("Imagine I've just overslept and am about to miss an important meeting, wake me up with only one line. Send only that single line.", "llava")
  let mistralResponse = getRequest("Remind me to complete a powerpoint presentation for my chemistry course by any date of your choice in december, use only one line and send only that single line.", "mistral")
  let orcaResponse = getRequest("Remind me that I have a cybersecurity coursework due on the 6th of November, send one line and one line only.", "orca")
  let qwenResponse = getRequest("Remind me of the most important task to do today. It is up to you what task I should have, as long as it is reasonable for a chemistry university student. Use one line and one line only.", "qwen")

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Llama 2"
        data={{value: llamaResponse}}
        Icon={icons.Views}
      />

      <OverviewCard
        label="Llava"
        data={{value: llavaResponse}}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Mistral"
        data={{value: mistralResponse}}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Orca"
        data={{value: orcaResponse}}
        Icon={icons.Users}
      />

      <OverviewCard
        label="Qwen"
        data={{value: qwenResponse}}
        Icon={icons.Users}
      />
    </div>
  );
}
