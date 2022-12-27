import React from "react";
import logo from "../../img/logo.svg";
import hero from "../../img/hero.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="logo_div">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="hero_img_div">
        <img src={hero} className="hero_img" alt="hero_img" />
      </div>
      <div>
        <h1 className="hero_protection_plan">Instant, Fair Protection Plan</h1>
        <p className="grey">
          Zero Stress, Zero paperwork. Starting at
          <span className="amount"> NGN 500</span>
        </p>
      </div>
      <div className="hero_tel_div">
        <span>+234</span>
        <input type="tel" name="" id="tel" />
        <Button />
      </div>
      <div className="hero_trust">
        Trusted by over 5,000 users across Nigeria
      </div>
    </div>
  );
};

export default Hero;
