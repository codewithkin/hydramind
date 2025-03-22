import {Router} from "express";
import { register } from "../../controllers/auth/authController";

const router = Router();

// @ts-ignore
router.post("/register", register);

export default router;
