import React from "react";
import image from "../images/aboutimg.jpeg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At Rehab India : A centralized Nasha Mukti portal, we believe in the transformative power of connection, support, and compassion in the journey towards sobriety. Founded with a vision to break the barriers to rehabilitation and provide accessible avenues for individuals struggling with addiction, our platform serves as a beacon of hope and healing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
