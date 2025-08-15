"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const visionItems = [
    {
      icon: "🎯",
      title: "diligence",
      subtitle: "성실",
      description: "고객과의 약속을 최우선 및\n고객 만족 납기일 100%",
    },
    {
      icon: "🤝",
      title: "harmony",
      subtitle: "인화",
      description: "완벽한 팀웍으로\n최고의 전사지 품질 생산",
    },
    {
      icon: "🚀",
      title: "leap",
      subtitle: "도약",
      description: "지속적인 품질개선,\n고객만족 품질경영, 원가절감",
    },
  ];

  const serviceItems = [
    {
      image: "/images/services/company-intro.jpg",
      title: "회사소개",
      description: "전문화된 사회적 기업으로 책임있는 진행을 약속드립니다.",
    },
    {
      image: "/images/services/business-area.jpg",
      title: "사업영역",
      description: "구성원들과 협동하여 발전시키기 위해 앞장서겠습니다.",
    },
    {
      image: "/images/services/management-mindset.jpg",
      title: "경영 마인드",
      description: "고객과 함께 만들어가는 성장하는 기업입니다.",
    },
    {
      image: "/images/services/online-inquiry.jpg",
      title: "온라인 문의",
      description: "제휴 및 견적의로를 보내주시면 빠른 답변드리겠습니다.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Our Services */}
      <div className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade">
            <h2 className="mb-3 text-2xl text-gray-600">Our Services</h2>
            <p className="text-4xl font-bold text-gray-900">What We Offer</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  {/* 이미지 영역 */}
                  <div className="overflow-hidden relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-600 transition-transform duration-300 group-hover:scale-105">
                      {/* 실제 이미지가 있다면 아래 주석을 해제하고 사용 */}
                      {/* <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      /> */}

                      {/* 임시 이미지 플레이스홀더 */}
                      <div className="flex justify-center items-center w-full h-full text-6xl text-white opacity-20">
                        {index === 0 && "🏢"}
                        {index === 1 && "💻"}
                        {index === 2 && "🤝"}
                        {index === 3 && "📧"}
                      </div>
                    </div>
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="p-6 text-left">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="mt-12 main_bnList1">
        <div className="bg-fixed bg-gradient-to-br box0 from-slate-800 to-slate-900">
          <div className="py-20 box1 inner cw">
            <div className="text-center main_txt" data-aos="fade">
              <div className="tit mg2">
                <p className="tt t6 fstUC">
                  <strong>Our Vision</strong>
                </p>
                <p className="tt">
                  <strong className="t11">
                    고객들의 요구에 대한 명쾌한 해답 제공
                  </strong>
                </p>
              </div>
            </div>
            <div className="list" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-wrap justify-center space-x-8 box2 list_wrap vision">
                {visionItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center list_con"
                    data-aos="fade-up"
                    data-aos-delay={600 + index * 200}
                  >
                    <div className="flex relative flex-col justify-center items-center mb-8 circle_wrap">
                      <div className="flex relative justify-center items-center w-72 h-72 bg-black bg-opacity-50 rounded-full transition-all duration-500 circle group hover:bg-opacity-70">
                        {/* 배경 원 애니메이션 */}
                        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full transition-transform duration-500 scale-0 group-hover:scale-100"></div>

                        {/* 아이콘과 텍스트 */}
                        <div className="absolute z-10 text-center text-white circle_tt">
                          <div className="mb-4 text-6xl">{item.icon}</div>
                          <div className="text-white">
                            <p className="text-sm font-light tracking-wider uppercase opacity-80 t1">
                              {item.title}
                            </p>
                            <p className="mt-2 text-3xl font-bold t2">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* 하단 라인 */}
                        <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gray-300 transform -translate-x-1/2"></div>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-lg leading-relaxed text-center text-white text-opacity-90 whitespace-pre-line t3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
