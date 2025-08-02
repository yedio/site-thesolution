"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper 인스턴스에 대한 타입을 'swiper/types'에서 가져옵니다.
import { Swiper as SwiperCore } from "swiper/types";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const MainVisual = () => {
  // useRef의 타입으로 SwiperCore를 지정합니다.
  const swiperRef = useRef<SwiperCore | null>(null);

  const slideInfo = {
    title: "The IT",
    subTitle: "Solution",
    description: "Integrated Production Process",
    subDescription: "통합생산기술, 숙련된 기술자와 엄격한 품질관리",
  };

  const slides = [
    {
      id: 1,
      image: "/images/bg/main_01.jpg",
    },
    {
      id: 2,
      image: "/images/bg/main_02.jpg",
    },
    {
      id: 3,
      image: "/images/bg/main_03.jpg",
    },
  ];

  return (
    <section className="overflow-hidden relative -mt-20 h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        loop={true}
        className="h-full"
        // ref 대신 onSwiper를 사용하여 Swiper 인스턴스를 직접 할당합니다.
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black opacity-20" />
              <div
                className={`absolute inset-0 bg-gradient-to-t to-transparent from-black/50`}
              />
              {/* 콘텐츠 */}
              <div className="flex relative z-10 justify-center items-center h-full">
                <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
                  <div className="text-white">
                    <div className="mb-6">
                      <h1 className="mb-2 text-5xl font-light md:text-7xl lg:text-8xl">
                        {slideInfo.title}
                      </h1>
                      <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                        {slideInfo.subTitle}
                      </h1>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl font-light tracking-wider md:text-2xl lg:text-3xl">
                        {slideInfo.description}
                      </p>
                      <p className="text-lg md:text-xl lg:text-2xl">
                        {slideInfo.subDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 컨트롤 영역 */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center px-6 py-3 space-x-6 rounded-full">
          <div className="flex items-center space-x-2 custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
