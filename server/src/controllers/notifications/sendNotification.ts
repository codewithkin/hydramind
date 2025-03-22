import { Request, Response } from "express";

export async function sendNotification (req: Request, res: Response) {
    try {
        // Get the userId, amount and timeStamp from the request body
        const { 
            userId, 
         } = req.body;

         if(!userId) {
            console.log("userId is  missing");
         }

        // Return dummy response
        res.status(200).json({
            message: "Yes, you made a request to the send notification endpoint"
        })
    } catch (e) {
        console.log("An error occured while sending notification ", e);

        res.status(500).send("An error occured while sending notification");
    }
}; 