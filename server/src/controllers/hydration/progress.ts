import { Request, Response } from "express";

export async function progress(req: Request, res: Response) {
  try {
    // Get the userId from the request body
    const { userId } = req.query;

    if (!userId) {
      console.log("userId is missing, please provide it");
    }

    // Return dummy response
    res.status(200).json({
      message: "Yes, you made a request to the log progress endpoint",
    });
  } catch (e) {
    console.log("An error occured while getting hydration progress data ", e);

    res
      .status(500)
      .send("An error occured while getting hydration progress data");
  }
}
