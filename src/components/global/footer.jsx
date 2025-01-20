import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "/public/image/global/salonlogoWtext.png";

export default function Footer() {
  return (
    <footer className="bg-customBlack text-white py-10 ">
      {/* Wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-8 space-y-10 md:space-y-0">
        {/* Info Section */}
        <div className="flex flex-col md:flex-row w-full gap-10">
          {/* Logo Section */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[16rem] w-full h-auto object-contain"
            />
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-3 text-center md:text-left">
            <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
              CONTACT
            </h4>
            <a href="tel:204-599-3161">
              <p className="text-white hover:scale-[98%] duration-300 cursor-pointer">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ml-3">{""}</span>(204) 599 3161 | (204) 813
                1991
              </p>
            </a>
            <a href="mailto:suink2005.com">
              <p className="text-white hover:scale-[98%] duration-300 cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-3">{""}</span>donnadstylist1551@gmail.com
              </p>
            </a>
            <a
              href="https://www.instagram.com/donnadstylistsalon/"
              target="_blank"
            >
              <p className="text-white hover:scale-[98%] duration-300 cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="ml-3">{""}</span>@donnadstylistsalon
              </p>
            </a>
          </div>

          <div className="grid gap-10">
            {/* Salon Hours */}
            <div className="h-fit flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-3 text-center md:text-left">
              <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
                SALON HOURS
              </h4>
              <p className="text-white">Tue–Sat: 9:00am–6:00pm</p>
            </div>

            {/* Address */}
            <div className="h-fit flex-1 flex flex-col items-center md:items-start md:border-l md:border-customGoldEnd md:pl-6 space-y-3 text-center md:text-left">
              <h4 className="bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
                ADDRESS
              </h4>
              <p className="text-white">1551 Arlington Street</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.6996079625137!2d-97.15326309999999!3d49.9232127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea74114acf3b65%3A0x8e33da1f5c183c38!2sDONNA%20D%E2%80%99%20STYLIST%20SALON!5e0!3m2!1sen!2sca!4v1737335392898!5m2!1sen!2sca"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="600"
            height="350"
            className="max-w-[18rem] max-h-[15rem] w-full h-auto mx-auto"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <p className="text-sm text-gray-300 text-center">
          Copyright © 2024 Donna D Stylist Salon All rights reserved
        </p>
      </div>
    </footer>
  );
}
