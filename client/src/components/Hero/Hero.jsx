import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div class="hero">
      <div class="hero__overlay overlay"></div>

      <div className="hero__items">
        <h2 className="hero__motto">Stay Informed, Stay Connected, Stay Healthy</h2>
      </div>
    </div>
  );
};

export default Hero;
