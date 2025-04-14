import axios from "axios";

// ✅ Use environment variable from Netlify or .env file
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

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
    fetchNewsByCountry(category, "ng"),
  ]);

  return [...ngNews, ...usNews];
};
