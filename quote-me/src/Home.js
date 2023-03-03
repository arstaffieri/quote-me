import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/" className="home-button-link">
      <button className="home-button">Back To Home</button>
    </Link>
  );
};

export default Home;