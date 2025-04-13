import React, { useEffect, useState } from "react";
import { fetchCombinedNews } from "../../components/fetchData";
import Article from "../../components/Article";

const Social = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const combined = await fetchCombinedNews("entertainment");
      setArticles(combined);
    };

    loadNews();
  }, []);

  return (
    <div className="container">
      <h1>Social & Trending News</h1>
      <div className="article-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          ))
        ) : (
          <p>Loading articles...</p>
        )}
      </div>
    </div>
  );
};

export default Social;
