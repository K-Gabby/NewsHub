import axios from "axios";

const API_KEY = "d7f171a84df94c3da1e7344e9ffe7cab";

// Fetch news by category and country
const fetchNewsByCountry = async (category, country) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error(`Error fetching news for ${country}:`, error);
    return [];
  }
};

// Combine news from multiple countries (US + Nigeria)
export const fetchCombinedNews = async (category) => {
  const [usNews, ngNews] = await Promise.all([
    fetchNewsByCountry(category, "us"),
    fetchNewsByCountry(category, "ng"), // 'ng' is the code for Nigeria
  ]);

  // Optional: You can shuffle or merge uniquely
  return [...ngNews, ...usNews];
};
