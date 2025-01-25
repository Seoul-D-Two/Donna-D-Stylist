import React, { useEffect } from "react";
import main_image from "/public/image/home/main_image.jpg";
import BookNowButton from "../global/BookNowButton";
import { gsap } from "gsap";

function Section1() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".animate-h3",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(
        ".animate-h1",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(
        ".animate-p",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
  }, []);

  return (
    <section className="container mx-auto grid lg:grid-cols-2 gap-10 items-center relative md:pt-[5rem] space-y-10 md:space-y-0 lg:h-screen pb-10">
      <div className="lg:order-1 order-2 lg:pl-10 text-center mx-auto lg:text-start">
        <h1 className="animate-h1 text-nowrap font-[300] w-fit border-b border-b-customGrayDark pb-3 text-4xl md:text-5xl xl:text-6xl">
          Donna D'
          <br /> Stylist Salon
        </h1>
        <p className="mt-5 hidden lg:block text-xl animate-p uppercase">
          With over 15 years of experience,
          <br /> you can trust us with your hair
        </p>
        <p className="lg:hidden md:text-xl animate-p mt-5 uppercase">
          With over 15 years of experience,
          <br /> you can trust us with your hair
        </p>
        <div className="mt-5 justify-self-center lg:justify-self-start">
          <BookNowButton />
        </div>
      </div>

      <img
        src={main_image}
        alt="Main image"
        className="lg:order-2 order-1 md:max-w-[40rem] lg:max-w-[45rem] 2xl:max-w-[50rem] w-full h-auto justify-self-center"
      />
    </section>
  );
}

export default Section1;
