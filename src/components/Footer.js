import React from "react";
import logo from "../img/logo.svg";
import {
  FaLinkedinIn,
  FaFacebookMessenger,
  FaTwitter,
  FaInfinity,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer w-full">
      <div className="footer_top">
        <div className="icons_div">
          <div className="icons">
            <div className="logo_div">
              <img src={logo} alt="logo" />
            </div>
            <div className="socials">
              <FaLinkedinIn />
              <FaFacebookMessenger />
              <FaTwitter />
              <FaInfinity />
            </div>
          </div>
        </div>
        <div className="mid">
         
          <div className="products">
            <h4 className="title">Product</h4>
            <p className="list"><Link to='/riders' >Riders protection plan</Link></p>
            <p className="list"><Link to='/shop-protection-plan' >Shop protection plan</Link></p>
            <p className="list"><Link to='/office-protection-plan' >Office protection plan</Link></p>
          </div>

        </div>
        <div className="newsletter">
          <h4 className="title">Join Our Newsletter</h4>
          <div className="email_div">
            <input
              type="email"
              className="email"
              name=""
              id=""
              placeholder="Your email address"
            />
            <input type="button" className="btn" value="Subscibe" />
          </div>
          <p className="list msg">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
      <div className="footer_bottom">2022 All Rights Reserved</div>
    </div>
  );
};

export default Footer;
