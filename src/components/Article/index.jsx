import React from "react";

const Article = ({ title, description, url, urlToImage }) => {
  return (
    <div className="article-card">
      {urlToImage && (
        <img src={urlToImage} alt={title} className="article-image" />
      )}
      <div className="article-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default Article;
