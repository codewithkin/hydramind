import express from "express";
import cors from "cors";
import morgan from "morgan";
import dataRoutes from "./routes/data/index.js";
import hydrationRoutes from "./routes/hydration/route.js";
import aiRoutes from "./routes/ai/index.js";
import notificationRoutes from "./routes/notifications/index.js";
import authRoute from "./routes/auth/authRoute.js";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../auth.js";

const app = express();

// apply cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// better auth
app.all("/api/auth/*", toNodeHandler(auth));

// json parsing
app.use(express.json());

const io = new Server({
  cors: {
    origin: "*", // Allow frontend connections
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());

app.use(morgan("combined"));

const PORT = process.env.PORT || 8080;

// Data routes
app.use("/api/data", dataRoutes);

// Hydration routes
app.use("/api/hydration", hydrationRoutes);

// AI routes
app.use("/api/ai", aiRoutes);

// Notifications and reminders
app.use("/api/notifications", notificationRoutes);

// Auth route
app.use("/api/auth", authRoute);

// Catch-all route
app.use("*", (_, res) => {
  // Return a random response
  res.status(404).json({
    message: "The route you were looking for could not be found",
  });
});

// Store user hydration progress in-memory (Replace with DB in production)
let hydrationData: Record<string, number> = {};

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

//MongoDB connection
(async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("MongoDB Connected succesfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    process.exit(1);
  }
})();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
