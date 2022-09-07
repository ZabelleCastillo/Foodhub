import React from "react";
import LechonBelly from "../assets/lechon2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${LechonBelly})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Sogod Lechon Belly is a locally and siblings-owned business that was founded in 2019. 
        We're dedicated to creating wonderful sweet surprises that you'll absolutely love. 
     
       Tasty takes time and cooking is our passion. Without wonderful customers like you, our 
       livelihood would never survive. That's why we're sure to say "Thank you" to everyone who 
       gives us their business and support. We're extremely thankful for our loyal customers and 
       their love never falls short. 
     
       Contact Sogod Lechon Belly where you always be satisfied. Delivery options are available. 
       Sogod Lechon Belly tastes as good as they look! 
      </p>
      </div>
    </div>
  );
}

export default About;
