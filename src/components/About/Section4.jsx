import React from "react";
import { staffs } from "../../../public/data.json";

function Section4() {
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold mb-10 w-fit mx-auto border-b border-b-customGrayDark pb-3">
        Our Staff
      </h2>

      {/* Face Balls */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 lg:gap-[5rem] p-10">
        {staffs.map((staff, index) => (
          <div key={index} className="text-center">
            {/* Image */}
            <div className="w-32 h-32 border-[1px] rounded-full overflow-hidden border-customGoldStart mx-auto">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover translate-y-6 scale-150"
              />
            </div>

            {/* Name and Role */}
            <p className="font-[500] pt-3">{staff.name}</p>
            <p className="max-w-[10rem] mx-auto">{staff.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
