import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/lechonb.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Sogod Lechon Belly </h1>
        <p> TASTE TO TELL</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
