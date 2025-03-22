import { Router } from "express";
import { register } from "../../controllers/auth/authController.js";

const router = Router();

// @ts-ignore
router.post("/register", register);

export default router;
