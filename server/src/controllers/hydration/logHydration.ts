import { Request, Response } from "express";

export async function logHydration(req: Request, res: Response) {
  try {
    // Get the userId, amount and timeStamp from the request body
    const { userId, amount, timeStamp } = req.body;

    if (!userId || !amount || !timeStamp) {
      console.log(
        "One of the body params { userId, amount, timestamp } are missing",
      );
    }

    // Return dummy response
    res.status(200).json({
      message: "Yes, you made a request to the log hydration endpoint",
    });
  } catch (e) {
    console.log("An error occured while logging hydration data: ", e);

    res.status(500).send("An error occured while logging hydration data");
  }
}
