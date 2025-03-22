import { Router } from "express";
import { hydrationPlan } from "../../controllers/ai/hydrationPlan.js";

const aiRoutes = Router();

// Hydration plan
aiRoutes.get("/hydration-plan", hydrationPlan);

export default aiRoutes;
