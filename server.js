import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable cross-origin requests

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/food", foodRoutes);

// Root Endpoint
app.get("/", (req, res) => {
  res.send("NutriFit API is running...");
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
