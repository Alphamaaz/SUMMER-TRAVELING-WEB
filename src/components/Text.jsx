import React from "react";
import shape from "../images/shape.png";

const TextWithShape = ({ text }) => {
  return (
    <span className="relative inline-block">
      <span className="text-orange-500 font-[400] relative z-10 mr-2 uppercase">{text}</span>
      <img
        src={shape}
        alt="underline"
        className="absolute left-0 -bottom-2 w-full h-[30px] z-0"
      />
    </span>
  );
};

export default TextWithShape;
