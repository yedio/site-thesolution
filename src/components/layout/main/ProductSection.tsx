"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: "/images/products/product1.jpg",
      englishTitle: "Toward Possibility",
      koreanTitle: "뛰어난 실행이 필요",
      description: "혁신적인 솔루션으로 새로운 가능성을 열어갑니다",
    },
    {
      image: "/images/products/product2.jpg",
      englishTitle: "Beyond Today",
      koreanTitle: "오늘을 넘어서, 가능성을 향해",
      description: "현재의 한계를 뛰어넘어 미래를 설계합니다",
    },
    {
      image: "/images/products/product3.jpg",
      englishTitle: "We Create. You Lead",
      koreanTitle: "맞춤형 성장 동력",
      description: "고객의 성공을 위한 맞춤형 솔루션을 제공합니다",
    },
    {
      image: "/images/products/product4.jpg",
      englishTitle: "Innovation Hub",
      koreanTitle: "혁신의 중심",
      description: "최신 기술과 창의적 아이디어의 만남",
    },
    {
      image: "/images/products/product5.jpg",
      englishTitle: "Future Ready",
      koreanTitle: "미래 준비 완료",
      description: "변화하는 세상에 대비한 준비된 솔루션",
    },
    {
      image: "/images/products/product6.jpg",
      englishTitle: "Smart Solutions",
      koreanTitle: "스마트 솔루션",
      description: "지능형 기술로 더 나은 내일을 만듭니다",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        {/* 헤더 */}
        <div
          className="flex justify-between items-start mb-16"
          data-aos="fade-up"
        >
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              MAKE INNOVATION
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 md:text-5xl">
              새로운 아이디어
            </h3>
          </div>

          {/* 네비게이션 버튼 */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="flex justify-center items-center w-12 h-12 text-white bg-gray-900 rounded-full transition-colors hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="flex justify-center items-center w-12 h-12 text-white bg-gray-900 rounded-full transition-colors hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 제품 슬라이더 */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 w-full md:w-1/3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6 h-full bg-gray-50 rounded-lg">
                  {/* 이미지 영역 */}
                  <div className="flex justify-center items-center mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-square">
                    {/* 실제 이미지가 있다면 아래 주석을 해제하고 사용 */}
                    {/* <img
                      src={product.image}
                      alt={product.koreanTitle}
                      className="object-cover w-full h-full rounded-lg"
                    /> */}

                    {/* 임시 이미지 플레이스홀더 */}
                    <div className="text-4xl text-gray-400">
                      {index === 0 && "💊"}
                      {index === 1 && "🧴"}
                      {index === 2 && "🫙"}
                      {index === 3 && "💡"}
                      {index === 4 && "🚀"}
                      {index === 5 && "⚡"}
                    </div>
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-500">
                      {product.englishTitle}
                    </p>
                    <h4 className="text-xl font-bold text-gray-900">
                      {product.koreanTitle}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
