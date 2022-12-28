import React from "react";
import rider from "../../img/riders_img/rider.svg";
import logo from "../../img/logo.svg";
import Button from "../Home/Button";
import { Link } from "react-router-dom";
const HeroRider = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="riders">
        <div className="riders_left">
          <div className="img_div">
            <img src={rider} alt="rider" />
          </div>
        </div>
        <div className="riders_right">
          <h2>Riders protection plan</h2>
          <p>With our comprehensive & affordable Home.</p>
          <p>
            Insurance plans, add a silver lining to every potential mishap,
            natural or man-made.
          </p>
          <div className="list_div">
            <p className="btn">
              <span>Zero Paper Work</span>
            </p>
            <p className="btn">
              <span>Quick Claim Process</span>
            </p>
            <p className="btn">
              <span>Affordable Premium</span>
            </p>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};

export default HeroRider;
