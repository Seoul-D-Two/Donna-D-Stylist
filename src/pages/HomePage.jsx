import React, { useState, useEffect } from "react";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Banner from "../components/home/Banner";

export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(false); // 배너 열림 상태
  const [hasTriggered, setHasTriggered] = useState(false); // 한 번만 실행

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // 현재 스크롤 위치
      const section1Height = document.querySelector(".section1").offsetHeight; // Section1 높이

      // Section1을 지나갔을 때 배너 표시 (한 번만 실행)
      if (scrollPosition > section1Height && !hasTriggered) {
        setIsBannerOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // 이벤트 제거
    };
  }, [hasTriggered]);

  return (
    <div className="relative overflow-x-hidden bg-customBlack">
      <div>
        {/* Section1에 고유 클래스를 추가 */}
        <div className="section1">
          <Section1 />
        </div>
        <div className="space-y-[8rem] lg:space-y-[10rem] 2xl:space-y-[12rem]">
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <Banner isOpen={isBannerOpen} onClose={() => setIsBannerOpen(false)} />
      </div>
    </div>
  );
}
