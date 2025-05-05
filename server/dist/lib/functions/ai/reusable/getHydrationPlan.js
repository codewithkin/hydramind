import { createCompletion } from "../createCompletion.js";
export async function getHydrationPlan({
  temp,
  humidity,
  activityLevel,
  age,
  weight,
}) {
  try {
    const systemPrompt = `
    You are a hydration assistant AI. Your goal is to provide a clear and concise water intake recommendation.
    
    Guidelines:
    1. Calculate the recommended daily intake using:
       - 35ml per kg for adults.
       - 40ml per kg for children under 14.
       - 30ml per kg for elderly over 65.
    
    2. Adjustments:
       - Light Activity: +300ml
       - Moderate Activity: +500ml
       - Intense Activity: +800ml
       - Hot Weather (>25°C): +500ml
       - Humid Weather (>70%): +300ml
    
    ### Response Format:
    {
      "recommended_intake": <NUMBER> (in ml),
      "explanation": "<ONE-SENTENCE summary>",
      "hydration_tips": ["<SHORT TIP 1>", "<SHORT TIP 2>"]
    }
    KEEP RESPONSES SHORT. Do not return the JSON as a string. Return it as a properly formatted JSON object.
    `;
    // Make a request to the ai
    const hydrationPlanResponse = await createCompletion({
      message: `{Temp: ${temp}, Weight: ${weight}, Activity Level: ${activityLevel}, age: ${age}, Humidity: ${humidity}}`,
      systemPrompt,
    });
    console.log("Hydration Plan: ", hydrationPlanResponse);
    return hydrationPlanResponse;
  } catch (e) {
    console.log("An error occured while getting hydration plan: ", e);
  }
}
