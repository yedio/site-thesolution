"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Swiper 스타일 import
import "swiper/css";
import "swiper/css/navigation";

const RnDSection = () => {
  const swiperRef = useRef<any>(null);

  const rndItems = [
    {
      icon: "🖨️",
      title: "그라비아인쇄",
      features: [
        "요판인쇄의 일종",
        "세밀하고 섬세한 표현 가능",
        "화려하고 선명한 인쇄 가능",
      ],
    },
    {
      icon: "✨",
      title: "특수효과",
      features: [
        "메탈릭 - 반짝이는 광택효과 유지",
        "펄 - 고급스러운 느낌",
        "홀로그램 - 은은한 미광 효과 기대, 차별화된 경쟁력",
      ],
    },
  ];

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="main_con main_dcoc bg-white">
      <div className="main_layout2">
        <div className="box0 flex flex-wrap">
          {/* 왼쪽 - 이미지 */}
          <div
            className="layL h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 shadow-lg"
            data-aos="fade"
          ></div>

          {/* 오른쪽 - 콘텐츠 */}
          <div className="layR" data-aos="fade-up" data-aos-delay="400">
            <div className="main_txt">
              <div className="tit">
                <strong className="tt t13">Dongsung Gravure R&D</strong>
              </div>
              <div className="txt">
                <p className="tt t5">
                  <strong>최고의 품질로 지속 고객만족 및 신뢰도 확보</strong>
                </p>
                <p className="tt t3">
                  더아이티솔루션의 연구개발은 지속적이며, 창의적입니다.
                </p>
              </div>
            </div>

            {/* R&D 슬라이더 */}
            <div className="main_pipeline_wrap">
              <div className="main_dcocSlider swiper-container mainPipeline">
                <Swiper
                  ref={swiperRef}
                  modules={[Autoplay, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="h-auto"
                >
                  {rndItems.map((item, index) => (
                    <SwiperSlide key={index} className="el">
                      <div className="digital_wrap">
                        {/* 아이콘과 제목 */}
                        <div className="digital_logo flex flex-wrap items-center">
                          <div className="text-4xl mr-4">{item.icon}</div>
                          <p className="text-2xl font-bold text-[#314acb]">
                            {item.title}
                          </p>
                        </div>

                        {/* 특징 리스트 */}
                        <div className="digital_txt">
                          <ul className="digital_dot mt-6 ml-14 space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="relative text-lg text-gray-600 font-medium pl-4 leading-relaxed"
                              >
                                <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-[#314acb] rounded-full transform -translate-y-1/2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* 컨트롤 영역 */}
              <div className="mainDcoc_control flex items-end justify-between space-y-6">
                <div className="main_more">
                  <Link href="/rnd" className="more flex items-center">
                    <strong className="tt">View more</strong>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className="wrap_control mV_button_wrap flex flex-wrap items-center">
                  <div className="mainPipeline-prev mainPipeline-btn sliderBtnSt prev mr-4">
                    <button
                      onClick={goPrev}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#314acb] hover:text-white flex items-center justify-center transition-all duration-300 group"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-white" />
                    </button>
                  </div>

                  <div className="mV_pagination mx-4">
                    <span className="text-lg font-semibold text-gray-800">
                      <span className="text-2xl font-bold text-[#314acb] ml-4">
                        1
                      </span>
                      <span className="mr-4"> / {rndItems.length}</span>
                    </span>
                  </div>

                  <div className="mainPipeline-next mainPipeline-btn sliderBtnSt next ml-4">
                    <button
                      onClick={goNext}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#314acb] hover:text-white flex items-center justify-center transition-all duration-300 group"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RnDSection;
