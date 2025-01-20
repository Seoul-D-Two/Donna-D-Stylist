import React from "react";
import logo from "/public/image/global/logo.png";
import "../../index.css";
import hairCut from "/public/image/home/services/hair-cut.jpg"
import treatments from "/public/image/home/services/treatments.jpg"
import blond from "/public/image/home/services/blond.jpg"
import color from "/public/image/home/services/color.jpg"
import styling from "/public/image/home/services/styling.jpg"
import ServiceCard from "./ServiceCard";

function Section3() {
  const services = [
    { image: hairCut, title: "HAIRCUT" },
    { image: blond, title: "BLONDING SERVICE", isBlond: true },
    { image: treatments, title: "HAIR TREATMENTS" },
    { image: color, title: "COLOR" },
    { image: styling, title: "STYLING" },
  ];

  return (
    <section className="bg-customGrayDark py-10 lg:py-20">
      <div className="container mx-auto px-5">
        <div className="md:flex items-end justify-between">
          <div className="flex gap-3 pb-2 w-fit border-b border-b-customGoldStart">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[5rem] object-contain"
            />
            <h3 className="text-white">
              Our <br /> Services
            </h3>
          </div>
          <div>{""}</div>
          <p className="lg:max-w-[30%] mt-10 lg:mt-5 md:text-xl uppercase text-customGrayLight text-end">
            From timeless styles to contemporary trends,
            our team delivers personalized results with precision
            and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              isBlond={service.isBlond}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
