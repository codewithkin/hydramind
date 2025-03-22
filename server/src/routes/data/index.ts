import { Router } from "express";
import { getWeather } from "../../controllers/data/getWeather.js";

const dataRoutes = Router();

// Weather data endpoint
dataRoutes.get("/weather", getWeather);

export default dataRoutes;