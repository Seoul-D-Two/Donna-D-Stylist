import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-customGrayLight">
      <Helmet>
        <title>Donna D' Stylist Salon - Best Hair Salon in Winnipeg</title>
        <meta
          name="description"
          content="Experience the latest styles and professional services at Donna D' Stylist Salon, a premium hair salon located in Winnipeg."
        />
        <meta
          name="keywords"
          content="hair salon, Winnipeg, Donna D' Stylist Salon, hairstyle, beauty, Winnipeg hair salon"
        />
        <meta property="og:title" content="Donna D' Stylist Salon - Best Hair Salon in Winnipeg" />
        <meta
          property="og:description"
          content="Experience the latest styles and professional services at Donna D' Stylist Salon, a premium hair salon located in Winnipeg."
        />
        <meta property="og:image" content="/image/home/main_image.jpg" />
        <meta property="og:url" content="https://donnadstylistsalon.ca/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
