import React from "react";

const Home = () => {
  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1>Welcome to K-Gabby NewsHub</h1>
        <p>
          Your one-stop platform for the latest headlines across Sports,
          Politics, and Social news.
        </p>
      </header>
      <section className="featured">
        <div className="feature-card">
          <h2>🏀 Sports</h2>
          <p>Catch up with trending matches and transfer news.</p>
        </div>
        <div className="feature-card">
          <h2>🏛️ Politics</h2>
          <p>Stay informed about political changes and election news.</p>
        </div>
        <div className="feature-card">
          <h2>🌐 Social</h2>
          <p>Explore hot topics and cultural trends around the world.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
