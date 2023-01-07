import React from "react";
import { useRoutes } from "react-router-dom";

const CoverageCard = ({ img, txt }) => {


  
  return (
    <div className="coverage_card">
      <div className="img_div">
        <img className="img" src={img} alt={img} />
      </div>
      <h4 className="txt">{txt}</h4>
      {txt === 'Health Protection Plan' && 
      <p className="text-[#45AAA9] text-xs font-semibold text-right pt-2 sm:pt-1">Coming Soon</p>
      }
    </div>
  );
};

export default CoverageCard;
