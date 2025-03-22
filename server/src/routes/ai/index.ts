import { Router } from "express";
import { hydrationPlan } from "../../controllers/ai/hydrationPlan.js";

const aiRoutes = Router();

// Hydration plan
aiRoutes.post("/hydration-plan", hydrationPlan);

// Analyze hydration
// aiRoutes.post("/analyze-hydration", analyzeHYdration);

// Adjust intake
// aiRoutes.post("/adjust-intake", adjustIntake);

export default aiRoutes;
