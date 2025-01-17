import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "/public/image/home/quote.svg";
import reviewsData from "/public/data.json";
import "../../index.css";

function Section3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="w-full container mx-auto">
      <h2 className="text-center font-bold mb-10 text-gradient bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        Customer Reviews
      </h2>
      <Slider {...settings}>
        {Object.values(reviewsData.reviews).map((review, index) => (
          <div key={index} className="px-10 pt-10">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={review.image}
                alt={review.reviewer}
                className="w-full h-auto max-w-[50rem] aspect-square object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 p-5">
                <img
                  src={quote}
                  alt="Quote Icon"
                  className="w-8 h-8 mb-3"
                />
                <p className="text-white italic text-center">
                  {review.content}
                </p>
                <p className="text-white font-medium mt-5 text-gradient bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
                  - {review.reviewer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Section3;
