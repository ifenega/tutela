import React from "react";

const DesignCard = ({ img, rect, title, txt }) => {
  return (
    <>
      <div className="design_card">
        <img src={rect} className="rect" alt="" />
        <img src={img} className="img" alt="" />
        <div className="info">
          <h4 className="title">{title}</h4>
          <p className="txt">{txt}</p>

        </div>
      </div>
    </>
  );
};

export default DesignCard;
