import { useState, useEffect } from "react";
import Slider from "react-slick"; // Slick Slider 임포트
import "slick-carousel/slick/slick.css"; // Slick 스타일
import "slick-carousel/slick/slick-theme.css"; // Slick 테마 스타일
import Section5 from "../components/home/Section5";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // 이미지 경로 동적으로 생성
    const generatedUrls = Array.from(
      { length: 20 },
      (_, index) => `/image/gallery/galleryImage${index + 1}.jpg`
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
                    // 이미지 로드 실패 시 대체 이미지 표시
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
                    // 이미지 로드 실패 시 대체 이미지 표시
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
