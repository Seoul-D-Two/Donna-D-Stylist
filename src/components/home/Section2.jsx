import React, { useEffect, useRef } from "react";
import teamImage from "/public/image/home/team-image.jpg";
import Button from "../global/Button";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <section className="border-t border-t-customGrayDark lg:h-1/2">
      <div className="container mx-auto grid gap-10 items-center lg:grid-cols-2 mb-20 md:my-20 lg:px-10">
        <img
          src={teamImage}
          alt="Team Image"
          className="justify-self-center max-w-[40rem] w-full h-auto"
        />
        <div className="px-5">
          <h2 className="w-fit border-b border-b-customGrayDark">
            Team Donna D'
          </h2>
          <p className="md:text-xl animate-p mt-5 uppercase pb-10">
            Our team is committed to exceptional hairstyling <br /> and
            personalized care, helping you look and feel your best.
          </p>

          <Link to="about">
            <Button text={"LEARN MORE"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section2;
