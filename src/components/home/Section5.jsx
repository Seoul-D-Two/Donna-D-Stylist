import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import instagramAccount from "/public/image/home/instagram.png";
import HomeInstaImage1 from "/public/image/home/InstaImages/HomeInstaImage1.jpeg";
import HomeInstaImage2 from "/public/image/home/InstaImages/HomeInstaImage2.jpeg";
import HomeInstaImage3 from "/public/image/home/InstaImages/HomeInstaImage3.jpeg";
import HomeInstaImage4 from "/public/image/home/InstaImages/HomeInstaImage4.jpeg";
import Button from "../global/Button";

function Section5() {
  return (
    <section className="bg-white grid py-20">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 container mx-auto">
        <div className="px-5 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl font-semibold w-fit border-b border-b-customGrayDark pb-3">
            Discover More{" "}
          </h2>
          <p className="mt-5 text-center md:text-start md:text-xl uppercase mb-10">
            Follow us on Instagram
            <br /> to see our latest creations and inspirations.
          </p>

          <Button text={"FOLLOW NOW"} />
        </div>
        <a href="https://www.instagram.com/donnadstylistsalon/" target="_blank">
          <img
            src={instagramAccount}
            alt="Instagram account image"
            className="hover:scale-[98%] duration-300 cursor-pointer px-10 translate-y-7 md:max-w-full md:px-10 max-w-[30rem] lg:max-w-[40rem] md:max-h-[25rem] object-contain w-full h-auto self-end"
          />
        </a>
      </div>
      {/* <div className="grid h-[rem]">
      <div>{""}</div>
      </div> */}
      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 px-3">
          <a
            href="https://www.instagram.com/donnadstylistsalon/"
            target="_blank"
          >
            <img
              src={HomeInstaImage1}
              alt=""
              className="hover:scale-[98%] duration-300 cursor-pointer aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
            />
          </a>
          <a
            href="https://www.instagram.com/donnadstylistsalon/"
            target="_blank"
          >
            <img
              src={HomeInstaImage2}
              alt=""
              className="hover:scale-[98%] duration-300 cursor-pointer aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
            />
          </a>
          <a
            href="https://www.instagram.com/donnadstylistsalon/"
            target="_blank"
          >
            <img
              src={HomeInstaImage4}
              alt=""
              className="hover:scale-[98%] duration-300 cursor-pointer aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
            />
          </a>
          <a
            href="https://www.instagram.com/donnadstylistsalon/"
            target="_blank"
          >
            <img
              src={HomeInstaImage3}
              alt=""
              className="hover:scale-[98%] duration-300 cursor-pointer aspect-square border border-customGoldStart w-full h-auto object-cover mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section5;
