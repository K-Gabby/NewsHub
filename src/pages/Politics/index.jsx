import React, { useEffect, useState } from "react";
import {fetchCombinedNews} from "../../components/fetchData";
import Article from "../../components/Article";

const Politics = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchCombinedNews("politics");
      setArticles(news);
    };

    loadNews();
  }, []);
  return (
    <div className="container">
      <h1>Latest Political News</h1>
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

export default Politics;
