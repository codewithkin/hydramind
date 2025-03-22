import { Request, Response } from "express";

export async function hydrationPlan(req: Request, res: Response) {
  try {
    // Get the userId, amount and timeStamp from the request body
    const { userId, lon, lat } = req.body;

    if (!userId || !lon || !lat) {
      console.log(
        "One of the body params { userId, longitude, latitude } are missing",
      );
    }

    // // 2️⃣ Fetch user profile from MongoDB
    // const user = await User.findById(userId);
    // if (!user) return res.status(404).json({ error: "User not found" });

    // const { weight, age, activityLevel } = user;

    // // 3️⃣ Get weather data based on longitude & latitude
    // const weatherResponse = await axios.get(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    // );
    // const { temp, humidity } = weatherResponse.data.main;

    // Return dummy response
    res.status(200).json({
      message: "Yes, you made a request to the hydration plan endpoint",
    });
  } catch (e) {
    console.log("An error occured while getting hydration plan ", e);

    res.status(500).send("An error occured while getting hydration plan");
  }
}
