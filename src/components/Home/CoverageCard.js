import React from "react";

const CoverageCard = ({ img, txt }) => {
  return (
    <div className="coverage_card">
      <div className="img_div">
        <img className="img" src={img} alt={img} />
      </div>
      <h4 className="txt">{txt}</h4>
    </div>
  );
};

export default CoverageCard;
