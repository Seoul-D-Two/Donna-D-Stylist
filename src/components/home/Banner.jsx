import React, { useEffect, useState } from "react";
import banner from "/public/image/home/banner.jpg";
import BookNowButton from "../global/BookNowButton";

function Banner({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10); // 페이드 인 효과
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-lg shadow-xl max-w-md w-full transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* 배너 이미지 */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={banner}
            alt="Banner image"
            className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 텍스트 컨텐츠 */}
        <div className="mt-6 text-center">
          <p className="text-sm font-semibold text-gray-700 tracking-wide">
            🎉 November - December Special
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Fitbit Giveaway
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            Purchase any{" "}
            <span className="font-semibold">Kerasilk Christmas Package</span>{" "}
            and get a chance to win a{" "}
            <span className="font-semibold">Fitbit Charge 3!</span>
          </p>
        </div>

        <div className="mt-6 text-center justify-self-center">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}

export default Banner;
