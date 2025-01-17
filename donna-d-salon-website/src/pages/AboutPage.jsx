import mainImg from "/public/image/about/main.jpg";
import React from "react";
import StaffSection from "../components/About/StaffSection.jsx";

export default function About() {
  return (
    <div className="relative min-h-screen py-[8rem] bg-black text-white flex flex-col gap-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={mainImg}
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
          About Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute rotate-180 inset-0 bg-gradient-to-t from-black via-transparent to-transparent -top-1"></div>
            <img src={mainImg} alt="Salon" className="rounded" />
            {/* <div className="absolute translate-y-1 inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-xl leading-relaxed">
              Welcome to{" "}
              <span className=" text-customGoldStart">
                Donna D’ Stylist Salon
              </span>
              , where creativity meets care. Our mission is to help every client
              feel confident and refreshed with a personalized style that
              reflects their unique beauty.
            </p>
            <p className="text-lg mt-4 leading-relaxed text-gray-300">
              From precision haircuts to luxurious treatments, we ensure every
              visit is a relaxing experience. Join us in an environment where
              passion and expertise come together to create stunning results.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 lg:px-20">
        <hr className="border-t border-customGoldStart opacity-50" />
      </div>

      {/* Staff Section */}
      <StaffSection />
    </div>
  );
}
