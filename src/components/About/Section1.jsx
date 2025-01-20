import React, { useEffect } from "react";
import main_image from "/public/image/about/about-main.jpg";
import Button from "../global/Button";
import { gsap } from "gsap";

function Section1() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".animate-h3",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(
        ".animate-h1",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(
        ".animate-p",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
  }, []);

  return (
    <section className="container mx-auto grid lg:grid-cols-2 gap-10 items-center relative md:pt-[5rem] space-y-10 md:space-y-0 lg:h-screen pb-10 border-b border-b-black">
      <div className="lg:order-1 order-2 lg:pl-10 text-center mx-auto lg:text-start px-5">
        <h1 className="mx-auto lg:mx-0 animate-h1 text-nowrap font-[300] w-fit text-4xl md:text-5xl">
          About Us
        </h1>
        <p className="mt-5 max-w-[32rem] text-xl animate-p pt-3 border-t border-t-customGrayDark">
          Donna D’ Stylist Salon is a welcoming space where creativity meets
          care. We believe every client deserves personalized attention and a
          style that reflects their unique beauty. Our mission is to create a
          relaxing experience while helping you leave feeling confident and
          refreshed.
        </p>
        <div className="mt-10 justify-self-center lg:justify-self-start">
          <Button text={"FOLLOW US"} />
        </div>
      </div>

      <img
        src={main_image}
        alt="Main image"
        className="lg:order-2 order-1 md:max-w-[40rem] lg:max-w-[45rem] 2xl:max-w-[40rem] w-full h-auto justify-self-center"
      />
    </section>
  );
}

export default Section1;
