import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // react-slick 임포트
import "slick-carousel/slick/slick.css"; // slick 스타일
import "slick-carousel/slick/slick-theme.css"; // slick 테마 스타일
import ReviewCard from "./ReviewCard";
import reviewsData from "/public/data.json"; // 리뷰 데이터 경로

function Section4() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData.reviews);
  }, []);

  const settings = {
    infinite: true,
    speed: 1000, 
    slidesToShow: 3,
    centerMode: true, 
    centerPadding: "0", 
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 2,
          centerPadding: "0", 
          centerMode: true, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          centerPadding: "0", 
          centerMode: false, 
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 w-fit mx-auto border-b border-b-customGrayDark pb-3">Customer Reviews</h2>
        <Slider {...settings}> 
          {reviews.map((review, index) => (
            <div key={index} className="px-3"> 
              <ReviewCard reviewer={review.reviewer} content={review.content} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Section4;
