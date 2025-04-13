import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <Link className="about-goBack" to="/">
        <span>&#8592;</span> <span>Go Back</span>
      </Link>
      <h1>About K-Gabby NewsHub</h1>
      <p>
        Welcome to <strong>NewsHub</strong> — your one-stop destination for
        accurate, timely, and engaging news. We are committed to delivering the
        latest updates across Sports, Politics, Social issues, and beyond.
        Whether you're looking to stay informed, dive deep into trending
        stories, or explore fresh perspectives, NewsHub has you covered.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li>
          <strong>Sports:</strong> From global tournaments to local games, we
          bring you highlights, scores, and expert commentary.
        </li>
        <li>
          <strong>Politics:</strong> Stay informed with unbiased and
          comprehensive political news from around the world.
        </li>
        <li>
          <strong>Social Buzz:</strong> Explore stories that shape society —
          lifestyle, culture, and social trends all in one place.
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        At K-Gabby NewsHub, our mission is to empower readers with credible and
        relevant information. We strive to make news accessible, engaging, and
        easy to navigate — helping you stay updated with what truly matters.
      </p>

      <h2>Behind K-Gabby NewsHub</h2>
      <div className="creator-section">
        <img
          src="/assets/images/creator.jpg"
          alt="Creator of K-Gabby NewsHub"
          className="about-image"
        />
        <p>
          K-Gabby NewsHub is a React-based project crafted by Kehinde Olaniyi —
          a frontend developer passionate about clean design, responsive UI, and
          meaningful content delivery. This blog is a showcase of technical
          creativity and a resource for news lovers.
        </p>
      </div>

      <h2>Get in Touch</h2>
      <p>
        We love hearing from our readers. Got feedback, suggestions, or a story
        to share? Connect with us through our social platforms below.
      </p>

      <h2>Follow Our Journey</h2>
      <p>
        Join us as we grow NewsHub into a trusted space for news and discovery.
        We're excited to have you along for the ride.
      </p>

      <footer className="about-footer">
        <p>Connect with us on:</p>
        <div className="social-links">
          <a
            href="https://x.com/kenny_olaniyi"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/kehinde-gabriel-olaniyi-610444119/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/K-Gabby" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} NewsHub by K-Gabby. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
