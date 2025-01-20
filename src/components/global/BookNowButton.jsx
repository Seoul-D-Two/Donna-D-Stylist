import React from "react";

const BookNowButton = () => {
  return (
    <a
      href="https://booking.setmore.com/scheduleappointment/1c8f0067-ff0b-42d2-91ba-f4bee30fb093"
      className="w-fit hover:scale-[85%] duration-300 scale-90 bg-gradient-to-r from-customGoldStart p-[1px] to-customGoldEnd font-bold text-black flex justify-center items-center"
    >
      <div className="bg-customGrayDark px-2 p-1">
        <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">BOOK NOW</h4>
      </div>
    </a>
  );
};

export default BookNowButton;
