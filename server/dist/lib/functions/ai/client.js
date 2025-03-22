import OpenAI from "openai";
import { config } from "dotenv";
// Allow proper parsing of environment variables
config();
export const client = new OpenAI({
  baseURL: "https://api.studio.nebius.com/v1/",
  apiKey: process.env.NEBIUS_API_KEY,
});
