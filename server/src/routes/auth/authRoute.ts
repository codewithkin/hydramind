import { Router } from "express";
import { logIn, register } from "../../controllers/auth/authController.js";

const router = Router();

// hydramind route for register
// @ts-ignore
router.post("/register", register);
// hydramind route for login
//@ts-ignore
router.post("/login", logIn);

export default router;
