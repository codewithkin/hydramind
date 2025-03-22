import { Router } from "express";
import { sendNotification } from "../../controllers/notifications/sendNotification.js";

const notificationRoutes = Router();

// Send notification
notificationRoutes.post("/send", sendNotification)

export default notificationRoutes;