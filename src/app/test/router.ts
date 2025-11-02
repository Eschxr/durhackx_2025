import axios from "axios";

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