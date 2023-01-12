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
          txt="You dont have ti fill any paper form or file a document ."
         
        />
        <DesignCard
          rect={rect}
          img={frame2}
          title="No Extra Fee"
          txt="Choose an excess to fit your pocket. No hidden excesses when you claim."
         
        />
        <DesignCard
          rect={rect}
          img={frame3}
          title="Complete coverage"
          txt="Full comprehensive cover. For accidents, thefts, hail storms and more."
         
        />
      </div>
      <Button />
    </div>
  );
}

export default SpecialDesign