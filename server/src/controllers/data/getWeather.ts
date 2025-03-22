import { Request, Response } from "express";

export async function getWeather (req: Request, res: Response) {
    try {

    } catch (e) {
        console.log("An error occured whike fetching weather data: ", e);

        res.status(500).send("An error occured while fetching weather data: ");
    }
}