import React from "react";
import { useState } from "react";

const Star = (props) => {
  const { starclickfunctiomn, starClick, id } = props;
  console.log(starClick);
  return (
    <div onClick={starclickfunctiomn}>
      <svg
        height="55px"
        width="53px"
        viewBox="0 0 25 23"
        data-rating="1"
        fill="black"
        className={starClick >= id ? "starContainer1" : "starContainer"}
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

export default function RatingStar() {
  const [starClick, setStarClick] = useState(null);

  const starArray = [1, 2, 3, 4, 5];

  const starclickfunctiomn = (index) => {
    return setStarClick(index + 1);
  };
  return (
    <div className="starContainer">
      {starArray.map((item, index) => {
        return (
          <span key={index}>
            <Star
              id={index + 1}
              starclickfunctiomn={() => starclickfunctiomn(index)}
              starClick={starClick}
            />
          </span>
        );
      })}
    </div>
  );
}
