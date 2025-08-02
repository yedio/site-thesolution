"use client";

import Link from "next/link";
import { Plus, Volume2 } from "lucide-react";

const CustomerSection = () => {
  const companyCards = [
    {
      id: 1,
      title: "회사소개",
      description: "고객 가는 모든 길에\n항상 더아이티솔루션가 있겠습니다.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      href: "/about",
    },
    {
      id: 2,
      title: "연혁",
      description: "역사 깊은 더아이티솔루션가\n걸어온 길입니다.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      href: "/about/history",
    },
    {
      id: 3,
      title: "약도",
      description: "더아이티솔루션 찾아오시는 길을\n안내해드립니다.",
      bgColor: "bg-gradient-to-br from-violet-500 to-violet-700",
      href: "/contact/location",
    },
    {
      id: 4,
      title: "부서별연락처",
      description: "더아이티솔루션의 부서별연락처를\n안내해드립니다.",
      bgColor: "bg-gradient-to-br from-rose-500 to-rose-700",
      href: "/contact/departments",
    },
  ];

  const notices = [
    {
      id: 1,
      title: "더아이티솔루션 신제품 출시 안내",
      date: "2024.01.15",
    },
    {
      id: 2,
      title: "2024년 정기휴무 안내",
      date: "2024.01.10",
    },
    {
      id: 3,
      title: "품질관리 시스템 업그레이드 완료",
      date: "2024.01.05",
    },
  ];

  return (
    <section className="main_con main_customer bg-gray-50">
      <div className="main_layout3">
        <div className="box2 inner cw">
          {/* 섹션 제목 */}
          <div className="main_txt text-center mb-16" data-aos="fade">
            <div className="tit mg2">
              <p className="tt t6 fstUC">
                <strong>Company About</strong>
              </p>
              <p className="tt">
                <strong className="t11">더아이티솔루션를 소개합니다.</strong>
              </p>
            </div>
          </div>

          {/* 공지사항 슬라이더 */}
          <div className="customer_w relative h-20 mb-10 bg-black bg-opacity-60">
            <div className="customer_slide">
              <label className="tt absolute left-5 top-6 z-30">
                <span
                  className="text-white text-lg cursor-pointer"
                  onClick={() => (window.location.href = "/customer/notices")}
                >
                  <Volume2 className="w-6 h-6 inline text-white align-middle mr-2" />
                  공지사항
                </span>
              </label>
              <ul className="slides">
                {notices.map((notice, index) => (
                  <li
                    key={notice.id}
                    className="h-20 leading-20 relative cursor-pointer"
                    onClick={() =>
                      (window.location.href = `/customer/notices/${notice.id}`)
                    }
                  >
                    <p className="notice_tit text-white text-base overflow-hidden whitespace-nowrap text-ellipsis pr-44 ml-32 align-middle w-1/2">
                      <Volume2 className="w-4 h-4 align-bottom pr-1 pl-5 inline" />
                      {notice.title}
                    </p>
                    <span className="notice_date absolute right-25 top-0 text-gray-400 text-base tracking-wide">
                      {notice.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 회사소개 카드들 */}
          <ul className="custom_ul overflow-hidden -ml-2.5">
            {companyCards.map((card, index) => (
              <li
                key={card.id}
                className="li_in float-left w-1/4 cursor-pointer"
                onClick={() => (window.location.href = card.href)}
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                <div className="con_in ml-2.5 relative overflow-hidden group">
                  {/* 우측 하단 장식 */}
                  <div className="absolute -right-9 -bottom-9 w-16 h-16 transform rotate-45 border-l border-gray-300 transition-all duration-700 z-30 group-hover:bg-[#314acb] group-hover:text-white"></div>

                  {/* 이미지 영역 */}
                  <div className="con_im_wrap relative z-25">
                    <div className="con_img h-50 relative">
                      {/* 배경 그라데이션 */}
                      <div
                        className={`w-full h-full ${card.bgColor} transition-transform duration-350 group-hover:scale-110`}
                      ></div>
                    </div>
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="con_tx_wrap p-5 relative z-25 h-25 bg-white">
                    <p className="ti text-black text-xl font-bold c_point">
                      {card.title}
                    </p>
                    <p className="tx text-gray-500 text-sm pt-4 pr-2.5 leading-relaxed">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="bis_more text-gray-600 absolute right-0 bottom-0 z-50 transition-colors duration-300 group-hover:text-white"
                    >
                      <Plus className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
