import { createCompletion } from "../createCompletion.js";

export async function getHydrationPlan({
  temp,
  humidity,
  activityLevel,
  age,
  weight,
}: {
  temp: number;
  humidity: number;
  activityLevel: string;
  age: number;
  weight: number | string;
}) {
  try {
    const systemPrompt = `
You are a hydration assistant AI designed to provide personalized daily water intake recommendations. Given a user’s weight, age, activity level, and real-time weather conditions (temperature and humidity), calculate an optimal daily water intake amount in milliliters.

Guidelines:
1. Base Water Intake Calculation:
   - Adults: 35ml per kg of body weight.
   - Children (under 14): 40ml per kg.
   - Elderly (above 65): 30ml per kg.

2. Adjustments Based on Activity Level:
   - Sedentary (little to no exercise): No additional water needed.
   - Lightly Active (1-3 days exercise/week): +300ml.
   - Moderately Active (4-5 days exercise/week): +500ml.
   - Very Active (Daily intense exercise): +800ml.

3. Adjustments Based on Weather Conditions:
   - Temperature Above 25°C: Add 500ml.
   - Humidity Above 70%: Add 300ml.

4. Response Format:
   - Total Recommended Water Intake (in milliliters).
   - Short Explanation: Why this amount was recommended.
   - Hydration Tips: How to distribute water intake throughout the day.

Example Output:
{
  "recommended_intake": 2800,
  "explanation": "Based on your weight (70kg), moderate activity level, and high humidity (75%), we recommend 2800ml of water per day.",
  "hydration_tips": [
    "Drink 500ml in the morning after waking up.",
    "Drink 250ml before each meal.",
    "Hydrate more if engaging in outdoor activities."
  ]
}
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
