import { client } from "./client.js";

export async function createCompletion({
  message,
  systemPrompt,
}: {
  message: string;
  systemPrompt?: string;
}) {
  try {
    let completion;

    if (systemPrompt) {
      completion = await client.chat.completions.create({
        temperature: 0.6,
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: message,
          },
        ],
      });
    } else {
      completion = await client.chat.completions.create({
        temperature: 0.6,
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });
    }

    const response = completion.choices[0].message.content;

    return response;
  } catch (e) {
    console.log("An error occured while creating completion: ", e);
  }
}
