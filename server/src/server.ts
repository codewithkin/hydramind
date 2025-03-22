import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from "morgan";
import dataRoutes from './routes/data/index.js';
import hydrationRoutes from './routes/hydration/route.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const PORT = process.env.PORT || 8080;

// Data routes
app.use("/api/data", dataRoutes);

// Hydration routes
app.use("/api/hydration", hydrationRoutes)

// AI routes
app.use("/api/ai", aiRoutes)

// Catch-all route
app.use("*", (_, res) => {
  // Return a random response
  res.status(404).json({
    message: "The route you were looking for could not be found",
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
