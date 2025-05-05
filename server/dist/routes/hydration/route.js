import { Router } from "express";
import { logHydration } from "../../controllers/hydration/logHydration.js";
import { progress } from "../../controllers/hydration/progress.js";
const hydrationRoutes = Router();
// Weather hydration endpoint
hydrationRoutes.post("/log", logHydration);
hydrationRoutes.get("/progress", progress);
export default hydrationRoutes;
