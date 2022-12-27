import React from 'react'
import DesignCard from './DesignCard'
import frame from "../../img/frame.svg";
import frame2 from "../../img/frame2.svg";
import frame3 from "../../img/frame3.svg";
import rect from "../../img/rect.svg";
import Button from './Button';

const SpecialDesign = () => {
  return (
    <div className="special">
      <h1 className="title">Specially designed for you</h1>
      <div className="design_cards">
        <DesignCard
          img={frame}
          rect={rect}
          title="Zero paper work"
          txt="End-to-end payments and financial management in a single solution."
          txt2="Meet the right platform"
        />
        <DesignCard
          rect={rect}
          img={frame2}
          title="Zero paper work"
          txt="End-to-end payments and financial management in a single solution."
          txt2="Meet the right platform"
        />
        <DesignCard
          rect={rect}
          img={frame3}
          title="Zero paper work"
          txt="End-to-end payments and financial management in a single solution."
          txt2="Meet the right platform"
        />
      </div>
      <Button />
    </div>
  );
}

export default SpecialDesign