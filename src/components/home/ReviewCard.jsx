import React from "react";
import quote from "/public/image/home/quote.svg"; // 인용 기호 이미지 경로

function ReviewCard({ reviewer, content }) {
  return (
    <div className="p-6 bg-white grid gap-3 h-60 items-center"> {/* 일정한 크기와 정렬 설정 */}
      <img src={quote} alt="Quote" className="max-w-10 w-full h-auto justify-self-center" />
      <p className=" text-center">"{content}"</p>
      <p className="font-[500] text-lg">{reviewer}</p>
    </div>
  );
}

export default ReviewCard;

