import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ image, title, isBlond }) {
  return (
    <Link to="/services" className={`relative ${isBlond ? "row-span-2" : ""}`}>
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover aspect-video ${
          isBlond ? "lg:h-[524px]" : "lg:h-[250px]"
        }`} // 블론딩 서비스 카드에만 높이 2배 설정
      />
      <div className="flex justify-between w-full absolute bottom-4 px-5 text-white">
        <h4 className="text-xl font-bold">{title}</h4>
        <div>{""}</div>
        <div className="justify-end">
          →
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
