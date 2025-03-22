import { Request, Response } from "express";
import axios from "axios";

import { config } from "dotenv";
import { getHydrationPlan } from "../../lib/functions/ai/reusable/getHydrationPlan.js";
import User from "../../model/user.js";

// Allow parsing of env variables (useful for test cases where code doesn't run the config() call in the root server.ts file because we run this function directly)
config();

if (!process.env.OPENWEATHER_API_KEY) {
  console.log("ERROR: WEATHER_API_KEY Not found");
}

export async function hydrationPlan(req: Request, res: Response) {
  try {
    // Get the userId, amount and timeStamp from the request body
    const { userId, lon, lat } = req.body;

    if (!userId || !lon || !lat) {
      console.log(
        "One of the body params { userId, longitude, latitude } are missing",
      );
    }

    // Fetch user profile from MongoDB
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { weight, age, activityLevel } = user;

    // 3️⃣ Get weather data based on longitude & latitude
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4748a8efb74e67b0d6c34bd903720a3&units=metric`,
    );

    // Get the temperature and humidity from the weather Response
    const { temp, humidity } = weatherResponse.data.main;

    // Pass these values to the AI
    const hydrationPlan = await getHydrationPlan({
      temp,
      humidity,
      activityLevel,
      age,
      weight,
    });

    // Return dummy response
    res.status(200).json({
      hydrationPlan,
    });
  } catch (e) {
    console.log("An error occured while getting hydration plan ", e);

    res.status(500).send("An error occured while getting hydration plan");
  }
}
