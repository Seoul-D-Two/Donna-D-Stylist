import React, { useState, useEffect, useRef } from "react";
import { staffs } from "/public/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

export default function Section5() {
  const [activeIndex, setActiveIndex] = useState(null);
  const arrowRefs = useRef([]);

  const toggleDropdown = (index) => {
    // 드롭다운 열고 닫기
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // 드롭다운 애니메이션
  useEffect(() => {
    if (activeIndex !== null) {
      // 드롭다운 펼치기 애니메이션
      gsap.fromTo(
        `.dropdown-content-${activeIndex}`,
        { opacity: 0, height: 0 },
        { opacity: 1, height: "auto", duration: 0.5 }
      );
    }
  }, [activeIndex]);

  // 아이콘 회전 애니메이션
  useEffect(() => {
    if (activeIndex !== null) {
      // 아이콘 회전
      gsap.to(arrowRefs.current[activeIndex], {
        rotation: 180,
        duration: 0.3,
      });
    } else {
      // 아이콘 초기 상태로 회전
      gsap.to(arrowRefs.current, { rotation: 0, duration: 0.3 });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto">
        {/* Staff Details */}
        <div className="grid md:pb-10">
          {staffs.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-3 md:gap-10 bg-white bg-opacity-5 p-5 lg:p-10 rounded-lg"
            >
              {/* Staff Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="max-w-[25rem] w-full h-auto object-cover"
                />
              </div>

              {/* Staff Details */}
              <div className="w-full md:w-2/3 gap-4 border-b border-b-black">
                <h3 className="font-bold mb-2">{staff.name}</h3>
                <div
                  className="flex"
                  onClick={() => toggleDropdown(index)}
                >
                  <p className="mb-2 uppercase font-[400]">{staff.role}</p>

                  {/* 모바일 화면에서만 드롭다운 버튼 */}
                  <div className="block md:hidden justify-self-end">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      ref={(el) => (arrowRefs.current[index] = el)}
                      className="ml-2 text-black cursor-pointer"
                    />
                  </div>
                </div>

                {/* Mobile dropdown */}
                <div
                  className={`dropdown-content-${index} text-lg leading-relaxed mb-4 ${
                    activeIndex === index ? "block" : "hidden"
                  } md:block`} // `md:block`으로 md 이상에서는 항상 보여주도록 설정
                >
                  <p>{staff.description}</p>

                  {staff.certificates && (
                    <div className="mb-4">
                      <p className="mb-2 uppercase font-[400] mt-5">
                        Certificates:
                      </p>
                      <ul className="list-disc pl-6">
                        {staff.certificates.map((cert, idx) => (
                          <li key={idx} className="text-lg">
                            <p>{cert}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {staff.trainings && (
                    <div className="mb-4">
                      <p className="mb-2 uppercase font-[400] mt-5">
                        Trainings:
                      </p>
                      <ul className="list-disc pl-6">
                        {staff.trainings.map((training, idx) => (
                          <li key={idx} className="text-lg">
                            <p>{training}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {staff.awards && (
                    <div>
                      <p className="mb-2 uppercase font-[400] mt-5">Awards:</p>
                      <ul className="list-disc pl-6">
                        {staff.awards.map((award, idx) => (
                          <li key={idx} className="text-lg">
                            <p>{award}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
