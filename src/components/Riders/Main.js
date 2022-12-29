import React from "react";
import Questions from "./Questions";
import medical from "../../img/riders_img/medical.svg";
import disability from "../../img/riders_img/disability.svg";
import death from "../../img/riders_img/death.svg";
import repair from "../../img/riders_img/games_repair.svg";
import temp_dis from "../../img/riders_img/temp_disability.svg";
import driving from "../../img/riders_img/drunk_driving.svg";
import noLicense from "../../img/riders_img/d_wt_license.svg";
import wearNtear from "../../img/riders_img/wearNtear.svg";
import Card from "./Card";
import Button from "../Home/Button";

const Main = () => {
  return (
    <div className="main">
      <h2 className="title">
        What&apos;s <span> Covered</span> in Riders protection plan?
      </h2>
      <div className="covered_cards">
        <Card img={medical} txt="Medical Expenses" />
        <Card img={disability} txt="Permanent Disability" />
        <Card img={death} txt="Death" />
        <Card img={repair} txt="Bike Repairs" />
        <Card img={temp_dis} txt="Temporary Disability" />
      </div>
      <h2 className="title">
        What&apos;s <span> not</span> Covered
      </h2>
      <p className="not_covered">
        It is equally important to know what's not covered in Riders Protection plan, so that there are no surprises when you make a claim. Here are
        some such situations:
      </p>
      <div className="not_covered_cards">
        <Card img={driving} txt="Drunk Driving" />
        <Card
          className="licence"
          img={noLicense}
          txt="Driving without a Licence"
        />
        <Card img={wearNtear} txt="Wear and Tear" />
      </div>
      <Button />
      <h2 className="title">
        Your <span>questions</span> answered
      </h2>
      <Questions
        que={
          <div>
            How to file a <span>Claim</span>
          </div>
        }
        ans={
          <div>
            <p>1. Notify Tutela within 48 hours of the event.</p>
            <p>
              2. Provide documents or evidence like pictures, videos, letter
              from the hospital or police.
            </p>
            <p>3. Receive Claim in your provided account number.</p>
          </div>
        }
      />
      <Questions
        que={
          <div>
            How <span>long</span> do I need to wait before I file a claim?
          </div>
        }
        ans={
          <div>
            To file a claim, there is a 30 days waiting period, in which you
            must have paid your premium. After which you would be eligible to
            file a claim.
          </div>
        }
      />
      <Questions
        que={
          <div>
            How can my policy can be <span>cancelled </span>?
          </div>
        }
        ans={
          <div>
            If you send us an email to do so or terminate it yourself via any of
            our agent. if you If you violate any of our terms and conditions
          </div>
        }
      />
    </div>
  );
};

export default Main;
