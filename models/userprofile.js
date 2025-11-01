import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  activityLevel: String,
  goal: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
});

export default mongoose.model("UserProfile", profileSchema);
