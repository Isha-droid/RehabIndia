import React from "react";
import image from "../images/heroimg.jpeg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Mental Health, <br />
          Our Responsibility
        </h1>
        <p>
        Reclaim your life: Explore rehab options tailored to your needs.
        A centralized Nasha Mukti Portal.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
