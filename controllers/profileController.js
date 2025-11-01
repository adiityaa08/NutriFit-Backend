import UserProfile from "../models/userprofile.js";
import { calculateNutrition } from "../utils/nutritionCalculator.js";

export const updateProfile = async (req, res) => {
  const { age, gender, height, weight, activityLevel, goal } = req.body;
  const userId = req.user.id;

  try {
    const nutrition = calculateNutrition({ age, gender, height, weight, activityLevel, goal });
    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      { ...req.body, ...nutrition },
      { new: true, upsert: true }
    );

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
