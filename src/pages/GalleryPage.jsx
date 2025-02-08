import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section5 from "../components/home/Section5";
import { Helmet } from "react-helmet";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const generatedUrls = Array.from(
      { length: 20 },
      (_, index) => `/image/gallery/galleryImage${index + 1}.webp`
    );
    setImageUrls(generatedUrls);
  }, []);

  const handleImageClick = () => {
    window.open("https://www.instagram.com/donnadstylistsalon/", "_blank"); // 클릭 시 Instagram 열기
  };

  const settings1 = {
    infinite: true,
    speed: 10000,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    rtl: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    speed: 10000,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <div className="bg-customGrayLight pt-[8rem] min-h-screen">
      <Helmet>
        <title>Gallery - Donna D' Stylist Salon</title>
        <meta
          name="description"
          content="Explore the stunning gallery of Donna D' Stylist Salon. Discover our top-notch hair styling services and see the transformation in our clients' looks."
        />
        <meta
          name="keywords"
          content="hair salon gallery, Donna D' Stylist Salon, Winnipeg hair salon, salon images, hair transformation"
        />
        <meta property="og:title" content="Gallery - Donna D' Stylist Salon" />
        <meta
          property="og:description"
          content="Explore the stunning gallery of Donna D' Stylist Salon. Discover our top-notch hair styling services and see the transformation in our clients' looks."
        />
        <meta property="og:image" content="/image/gallery/galleryImage3.jpg" />
        <meta
          property="og:url"
          content="https://donnadstylistsalon.ca/gallery"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto pb-20">
        <h1 className="border-b border-b-customGrayDark w-fit mx-auto pb-3 text-3xl text-center">
          GALLERY
        </h1>

        {/* Slider 2 */}
        <Slider {...settings2}>
          {imageUrls.slice(1, 9).map((url, index) => (
            <div
              key={index}
              className="mt-10 w-full p-2 flex justify-center items-center"
              onClick={handleImageClick}
            >
              <div className="w-full h-full bg-gray-300 flex justify-center items-center">
                <img
                  src={url}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full aspect-square"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Slider 1 */}
        <Slider {...settings1}>
          {imageUrls.slice(10, 20).map((url, index) => (
            <div
              key={index}
              className="w-full p-2 flex justify-center items-center"
              onClick={handleImageClick}
            >
              <div className="w-full h-full bg-gray-300 flex justify-center items-center">
                <img
                  src={url}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full aspect-square"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Section5 />
    </div>
  );
}
