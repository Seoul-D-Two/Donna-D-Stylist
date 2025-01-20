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
    <div className="bg-customGrayLight py-[8rem] min-h-screen">
      <div className="container mx-auto grid gap-10 lg:gap-20">
        <h1 className="border-b border-b-customGrayDark w-fit mx-auto pb-3 text-3xl text-center">
          GALLERY
        </h1>
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
    </div>
  );
}
