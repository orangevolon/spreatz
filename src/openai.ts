import { Configuration, OpenAIApi } from "openai";

const { OPEN_AI_API_KEY } = process.env;

const configs = new Configuration({
  apiKey: OPEN_AI_API_KEY,
});

export const openai = new OpenAIApi(configs);
