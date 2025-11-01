export const calculateNutrition = (profile) => {
    const { weight, height, age, gender, activityLevel, goal } = profile;
  
    let BMR =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
  
    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    };
  
    const TDEE = BMR * (activityFactors[activityLevel] || 1.2);
    const calories = goal === "fatloss" ? TDEE * 0.8 : TDEE * 1.15;
  
    const protein = weight * 2; // grams
    const fat = (calories * 0.25) / 9; // grams
    const carbs = (calories - (protein * 4 + fat * 9)) / 4; // grams
  
    return {
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    };
  };
  