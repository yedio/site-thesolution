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

  return (
    <section className="main_con pd bg-white">
      {/* About 더아이티솔루션 */}
      <div className="main_layout">
        <div className="box1 flex flex-wrap items-center">
          {/* 왼쪽 - 제목과 더보기 */}
          <div className="layL pl" data-aos="fade">
            <div className="main_txt">
              <div className="tit">
                <strong className="tt t13">About 더아이티솔루션</strong>
              </div>
            </div>
            <div className="main_more">
              <Link href="/about" className="more flex items-center">
                <strong className="tt">View more</strong>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* 오른쪽 - 설명 */}
          <div
            className="layR flex items-end"
            data-aos="fade"
            data-aos-delay="400"
          >
            <div className="main_txt">
              <div className="txt">
                <p className="tt t10 c_point">
                  <strong>What we Always</strong>
                </p>
                <p className="tt t5">
                  <strong>통합생산기술, 숙련된 기술자와 엄격한 품질관리</strong>
                </p>
                <p className="tt t3">
                  <span className="br">
                    핵심역량강화를 통한 기업가치 제고와 무결점
                  </span>
                  <span className="br">품질에 대한 열정</span>
                  <span className="br">고객가치를 극대화하는 기업</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="main_bnList1 mt-12">
        <div className="box0 bg-gradient-to-br from-slate-800 to-slate-900 bg-fixed">
          <div className="box1 inner cw py-20">
            <div className="main_txt text-center" data-aos="fade">
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
              <div className="box2 list_wrap vision flex flex-wrap justify-center space-x-8">
                {visionItems.map((item, index) => (
                  <div
                    key={index}
                    className="list_con flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay={600 + index * 200}
                  >
                    <div className="circle_wrap flex flex-col items-center justify-center relative mb-8">
                      <div className="circle relative w-72 h-72 bg-black bg-opacity-50 rounded-full flex items-center justify-center group hover:bg-opacity-70 transition-all duration-500">
                        {/* 배경 원 애니메이션 */}
                        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>

                        {/* 아이콘과 텍스트 */}
                        <div className="circle_tt absolute text-center text-white z-10">
                          <div className="text-6xl mb-4">{item.icon}</div>
                          <div className="text-white">
                            <p className="t1 text-sm font-light uppercase tracking-wider opacity-80">
                              {item.title}
                            </p>
                            <p className="t2 text-3xl font-bold mt-2">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* 하단 라인 */}
                        <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gray-300 transform -translate-x-1/2"></div>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="t3 text-lg text-white text-opacity-90 leading-relaxed text-center whitespace-pre-line">
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
