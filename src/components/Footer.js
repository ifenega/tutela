import React from "react";
import logo from "../img/logo.svg";
import {
  FaLinkedinIn,
  FaFacebookMessenger,
  FaTwitter,
  FaInfinity,
} from "react-icons/fa";
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
          <div className="company">
            <h4 className="title">Company</h4>
            <p className="list">About Us</p>
            <p className="list">Careers</p>
            <p className="list">Blog</p>
          </div>
          <div className="products">
            <h4 className="title">Product</h4>
            <p className="list">Riders protection plan</p>
            <p className="list">Shop protection plan</p>
          </div>
          <div className="resources">
            <h4 className="title">Resources</h4>
            <p className="list">Education</p>
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
