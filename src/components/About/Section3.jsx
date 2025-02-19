import React from "react";
import logo from "/public/image/global/logo.webp";
import team1 from "/public/image/about/team1.webp";
import team2 from "/public/image/about/team2.webp";
import team3 from "/public/image/about/team3.webp";
import team4 from "/public/image/about/team4.webp";
import team5 from "/public/image/about/team5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

function Section3() {
  const teamData = [
    { image: team1, id: 1 },
    { image: team2, id: 2 },
    { image: team3, id: 3 },
    { image: team4, id: 4 },
    { image: team5, id: 5 },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  return (
    <section className="bg-customGrayDark pt-10 pb-20 lg:py-20">
      <div className="container mx-auto px-5">
        <div className="lg:flex items-end justify-between">
          <div className="flex gap-3 pb-2 w-fit border-b border-b-customGoldStart">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[5rem] object-contain"
            />
            <h3 className="text-white">
              Meet <br /> Our Team
            </h3>
          </div>
          <div>{""}</div>
          <p className="md:max-w-[70%] lg:max-w-[40%] mt-10 lg:mt-5 md:text-xl uppercase text-customGrayLight text-end justify-self-end">
            Our team of five talented stylists is dedicated to creating
            personalized styles that leave every client feeling confident and
            beautiful.
          </p>
        </div>

        {/* Team Images */}
        <div className="hidden lg:grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((team) => (
            <div
              key={team.id}
              className={`relative ${team.id === 2 ? "lg:row-span-2" : ""}`}
            >
              <img
                src={team.image}
                alt={`Team ${team.id}`}
                className={`scale-[101%] w-full h-full object-cover aspect-video ${
                  team.id === 2 ? "lg:h-[524px]" : "lg:h-[250px]"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden mt-10">
          <Slider {...settings}>
            {teamData.map((team) => (
              <img
                key={team.id}
                src={team.image}
                alt={`Team ${team.id}`}
                className="scale-[101%] w-full h-full object-cover aspect-video"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Section3;
