import { Request, Response } from "express";

export async function analyzeHydration(req: Request, res: Response) {
  try {
    // Get the userId, amount and timeStamp from the request body
    const { date, amount, time } = req.body;

    if (!date || !amount || !time) {
      console.log(
        "One of the body params { date, amount, time } are missing",
      );
    }

    // Return dummy response
    res.status(200).json({
      message: "Yes, you made a request to the analyze hydration endpoint",
    });
  } catch (e) {
    console.log("An error occured while analyzing hydration ", e);

    res.status(500).send("An error occured while analyzing hydration");
  }
}
