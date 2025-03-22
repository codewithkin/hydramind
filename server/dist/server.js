import express from "express";
import cors from "cors";
import morgan from "morgan";
import dataRoutes from "./routes/data/index.js";
import hydrationRoutes from "./routes/hydration/route.js";
import aiRoutes from "./routes/ai/index.js";
import notificationRoutes from "./routes/notifications/index.js";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
const io = new Server({
  cors: {
    origin: "*", // Allow frontend connections
    methods: ["GET", "POST"],
  },
});
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
const PORT = process.env.PORT || 8080;
// Data routes
app.use("/api/data", dataRoutes);
// Hydration routes
app.use("/api/hydration", hydrationRoutes);
// AI routes
app.use("/api/ai", aiRoutes);
// Notifications and reminders
app.use("/api/ai", notificationRoutes);
// Catch-all route
app.use("*", (_, res) => {
  // Return a random response
  res.status(404).json({
    message: "The route you were looking for could not be found",
  });
});
// Store user hydration progress in-memory (Replace with DB in production)
let hydrationData = {};
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  // Listen for hydration log event
  socket.on("hydrate", (data) => {
    const { userId, amount } = data;
    // Update hydration progress
    if (!hydrationData[userId]) hydrationData[userId] = 0;
    hydrationData[userId] += amount;
    console.log(`User ${userId} logged ${amount}ml`);
    // Emit updated hydration progress
    io.emit("updateProgress", { userId, newProgress: hydrationData[userId] });
  });
  // Send reminders to specific users
  socket.on("sendReminder", (data) => {
    const { userId, message } = data;
    io.to(userId).emit("reminder", { message });
    console.log(`Reminder sent to ${userId}: ${message}`);
  });
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
