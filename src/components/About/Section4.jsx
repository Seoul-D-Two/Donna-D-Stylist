import React from "react";
import staffDonna from "/public/image/staffs/staff-Donna.webp";
import staffDana from "/image/staffs/staff-Dana.webp";
import staffDonwin from "/image/staffs/staff-Donwin.webp";
import staffTashina from "/image/staffs/staff-Tashina.webp";
import staffShaeD from "/image/staffs/staff-Shae-D.webp";

function Section4() {
  const staffImages = {
    Donna: staffDonna,
    Dana: staffDana,
    Donwin: staffDonwin,
    Tashina: staffTashina,
    ShaeD: staffShaeD,
  };

  const staffs = [
    { name: "Donna", role: "Owner & Master Colorist" },
    { name: "Dana", role: "Senior Stylist" },
    { name: "Donwin", role: "Junior Stylist" },
    { name: "Tashina", role: "Junior Stylist" },
    { name: "Shae-D", role: "Apprentice Stylist" },
  ];

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
                src={
                  staffImages[staff.name.replace(/-/g, "").replace(/\s/g, "")]
                }
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
