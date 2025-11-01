import express from "express";
import { getFoodRecommendations } from "../controllers/foodController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/recommend", protect, getFoodRecommendations);
export default router;
