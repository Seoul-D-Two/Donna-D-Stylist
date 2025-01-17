import React, { useEffect } from "react";
import main_image from "/public/image/home/main_image.png";
import BookNowButton from "../global/BookNowButton";
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
    <section className="relative pt-[5rem] space-y-10 md:space-y-0 lg:h-screen">
      <div className=" grid-cols-1 md:ml-[5rem] lg:ml-[10rem] grid gap-7 md:gap-10 place-items-center md:place-items-start md:translate-y-14 2xl:translate-y-28 xl:px-10">
        <div className="container mx-auto grid gap-4 lg:gap-5 place-items-center md:place-items-start text-center md:text-start">
          <h3 className="animate-h3 2xl:text-5xl">Welcome to</h3>
          <h1 className="animate-h1 text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
            Donna D'
            <br /> Stylist Salon
          </h1>
          <p className="hidden lg:block text-xl 2xl:text-2xl italic animate-p">
            With over 15 years of experience, you can trust us with your hair
          </p>
          <p className="lg:hidden md:text-xl italic animate-p mb-2">
            With over 15 years of experience,
            <br /> you can trust us with your hair
          </p>
          <div className="pt-5">
            <BookNowButton />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 right-0 bottom-0 lg:absolute">
        <div>{""}</div>
        <img
          src={main_image}
          alt="Main image"
          className="md:max-w-[40rem] lg:max-w-[45rem] 2xl:max-w-[70rem] w-full h-auto justify-self-end"
        />
      </div>
    </section>
  );
}

export default Section1;
