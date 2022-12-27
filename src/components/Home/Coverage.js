import React from "react";
import CoverageCard from "./CoverageCard";
import pie_charts from "../../img/pie_and_charts.svg";
import insurance from "../../img/insurance.svg";
import motorcycle from "../../img/motorcycle.svg";
import start from "../../img/start.svg";
import romance from "../../img/romance.svg";
import shop from "../../img/shop.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Coverage = () => {
  return (
    <div className="coverage">
      <h2 className="title">Let's find the coverage you need</h2>
      <p className="protect">What would you like to protect today?</p>
      <div className="card_div">
        <Link to="/riders#top">
          <CoverageCard img={motorcycle} txt="Riders Protection Plan" />
        </Link>
        <CoverageCard img={shop} txt="Shop Protection Plan" />
      </div>
      <h3 className="title">
        We know you're <span>busy</span>, so we'll be <span>quick</span>.
      </h3>
      <div className="info">
        <div className="img_div">
          <img className="img_left" src={insurance} alt="" />
        </div>
        <div className="details">
          <h2>Buy in seconds</h2>
          <p>Buy instantly without phone calls or paperwork.</p>
          <Button />
        </div>
        <div className="img_div">
          <img className="img_right" src={pie_charts} alt="" />
        </div>
      </div>
      <div className="info">
        <div className="img_div">
          <img className="img_left" src={start} alt="" />
        </div>
        <div className="details">
          <h2 style={{ textAlign: "left" }}>Claims approved in record time</h2>
          <p style={{ textAlign: "left" }}>
            Accidents, bad guys or Mother Nature. We will sort it out, no
            hassles.
          </p>
          <Button />
        </div>
        <div className="img_div">
          <img className="img_right" src={romance} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
