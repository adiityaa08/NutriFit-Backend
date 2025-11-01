import axios from "axios";

export const getFoodRecommendations = async (req, res) => {
  const { query } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/food/products/search`,
      {
        params: {
          query: query || "high protein",
          apiKey: process.env.SPOON_API_KEY,
          number: 5,
        },
      }
    );

    res.json(data.products.map((p) => ({
      title: p.title,
      image: p.image,
    })));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
