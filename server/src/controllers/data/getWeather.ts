import { Request, Response } from "express";

export async function getWeather (req: Request, res: Response) {
    try {
        // Return dummy weather data
        res.status(200).json({
            message: "Weather data here"
        })
    } catch (e) {
        console.log("An error occured while fetching weather data: ", e);

        res.status(500).send("An error occured while fetching weather data: ");
    }
}