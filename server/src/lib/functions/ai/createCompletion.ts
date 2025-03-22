import { client } from "./client.js";

export async function createCompletion({ message }: { message: string }) {
  try {
    const completion = await client.chat.completions.create({
      temperature: 0.6,
      model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });
    
    const response = completion.choices[0].message.content;

    return response;
  } catch (e) {
    console.log("An error occured while creating completion: ", e);
  }
}