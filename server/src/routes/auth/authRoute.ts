import { Router } from "express";
// import {
//   googleSignIn,
//   logIn,
//   register,
// } from "../../controllers/auth/authController.js";
// import { createExpressHandler } from "better-auth/express";
import { auth } from "./betterAuth.js";

// const expressHandler = createExpressHandler(auth);

const router = Router();

// hydramind route for register
// @ts-ignore
router.post("/register", register);
// hydramind route for login
// @ts-ignore
router.post("/login", logIn);

// hydramind route for google
// @ts-ignore
router.get("/google", googleSignIn);

export default router;
