import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import services1 from "/public/image/home/services/services1.png";
import services2 from "/public/image/home/services/services2.png";
import services3 from "/public/image/home/services/services3.png";
import services4 from "/public/image/home/services/services4.png";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top bottom",
        once: true,
      },
    });

    // Line animation
    timeline.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, transformOrigin: "left", ease: "power2.out" }
    );

    // Sequential fade-in and scale-up of items
    itemsRef.current.forEach((item, index) => {
      timeline.fromTo(
        item,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        `-=${0.6 - index * 0.1}` // Sequential animation
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="grid gap-14 lg:gap-[7rem] place-content-center items-center bg-black py-20">
      {/* Section Header */}
      <h2 className="text-center text-transparent bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text">
        Our Services
      </h2>

      {/* Content */}
      <div>
        <div className="relative grid px-5 lg:px-0">
          {/* Decorative Line */}
          <div className="hidden lg:flex absolute inset-x-0 top-1/2 -translate-y-12 items-center px-10">
            <div className="w-3 h-3 bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full"></div>
            <div
              ref={lineRef}
              className="flex-grow h-1 bg-gradient-to-r from-customGoldStart to-customGoldEnd scale-x-0"
            ></div>
            <div className="w-3 h-3 bg-gradient-to-r from-customGoldStart to-customGoldEnd rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="md:flex grid gap-3 grid-cols-2 items-start relative md:px-10 xl:gap-[2rem] xl:px-[8rem] 2xl:px-[10rem]">
            {[
              {
                img: services1,
                title: "Men’s Haircuts",
                description: "Precision cuts tailored for every style.",
              },
              {
                img: services2,
                title: "Women’s Haircuts",
                description:
                  "Experience elegance with our bespoke styling.",
              },
              {
                img: services3,
                title: "Hair Colour",
                description: "Vibrant shades and natural tones to enhance your look.",
              },
              {
                img: services4,
                title: "Kerasilk",
                description:
                  "Luxurious treatments for smooth and shiny hair.",
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="group aspect-square max-w-[18rem] max-h-[15rem] p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
              >
                {/* Service Image */}
                <div className="relative w-full max-w-[10rem] h-auto rounded-lg  flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Title */}
                <h2 className="mt-4 text-lg font-semibold text-customGoldStart group-hover:text-customGoldEnd transition-colors duration-300">
                  {service.title}
                </h2>

                {/* Service Description */}
                <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
