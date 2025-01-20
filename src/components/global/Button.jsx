import React from "react";
import Arrow from "/public/image/global/arrow.svg";
function Button({ text }) {
  return (
    <div className="group flex gap-3 hover:scale-[97%] duration-300 cursor-pointer">
      <p className="text-xl text-nowrap">{ text }</p>
      <img src={Arrow} alt="Arrow image" className="group-hover:rotate-45 duration-300 max-w-4 w-full h-auto"/>
    </div>
  );
}

export default Button;
