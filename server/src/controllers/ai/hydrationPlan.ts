import { Request, Response } from "express";

export async function hydrationPlan (req: Request, res: Response) {
    try {
        // Get the userId, amount and timeStamp from the request body
        const { 
            userId, 
            lon, 
            lat
         } = req.body;

         if(!userId || !lon || !lat) {
            console.log("One of the body params { userId, longitude, latitude } are missing");
         }

        // Return dummy response
        res.status(200).json({
            message: "Yes, you made a request to the hydration plan endpoint"
        })
    } catch (e) {
        console.log("An error occured while getting hydration plan ", e);

        res.status(500).send("An error occured while getting hydration plan");
    }
}; 