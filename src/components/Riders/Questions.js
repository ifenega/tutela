import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const Questions = ({que, ans}) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="questions">
      <div className="q items-center">
        <h6 className="font-bold text-xl text-left">{que}</h6>
        <span className="icon" onClick={handleClick}>{state ? <FaTimes /> : <FaPlus />}</span>
      </div>
      {state && <div className="answers">{ans}</div>}
    </div>
  );
};

export default Questions;
