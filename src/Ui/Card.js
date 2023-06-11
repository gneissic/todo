import React from "react";

const Card = (props) => {
  return (
    <div className=" pb-[1rem] mt-[3rem] bg-white w-[75%] md:w-[50%] m-auto border border-white rounded-[15px]">
      {props.children}
    </div>
  );
};

export default Card;
