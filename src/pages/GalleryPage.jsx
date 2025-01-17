import { useState, useEffect } from "react";

export default function Gallery() {
  // 이미지 경로 배열 생성
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

  return (
    <div className="min-h-screen py-[5rem] bg-customBlack flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        Gallery
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Take a look at our salon and some of our happy customers!
      </p>
      <div className="grid grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="w-48 h-48 bg-gray-300 flex items-center justify-center border border-gray-300"
            onClick={handleImageClick}
          >
            <img
              src={url}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
              onError={(e) => {
                // 이미지 로드 실패 시 대체 이미지 표시
                e.target.src =
                  "https://via.placeholder.com/150?text=Image+Not+Found";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
