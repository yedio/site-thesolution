"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronUp, Phone, FileText, Mail } from "lucide-react";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
      // scroll 클래스 추가/제거
      if (window.scrollY > 300) {
        document.body.classList.add("scroll");
      } else {
        document.body.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCall = () => {
    window.open("tel:031-998-9814");
  };

  const handleEmail = () => {
    window.open("mailto:sales@dsdecal.com");
  };

  return (
    <>
      {/* 플로팅 버튼들 */}
      {/* TOP 버튼 */}
      <button
        onClick={scrollToTop}
        className="goTop fixed right-4 bottom-4 w-16 h-16 bg-[#314acb] border-3 border-transparent rounded-full text-white opacity-0 transform translate-y-24 transition-all duration-300 hover:bg-white hover:border-[#314acb] hover:text-[#314acb] z-50"
      >
        <div className="in flex flex-col items-center justify-center">
          <ChevronUp className="w-6 h-6" />
          <span className="tt text-xs">TOP</span>
        </div>
      </button>

      {/* 상담전화 버튼 */}
      <button
        onClick={handleCall}
        className="goCall fixed bottom-4 right-20 h-16 text-gray-800 opacity-0 transform translate-y-24 transition-all duration-300 z-50 flex items-center overflow-hidden rounded-full bg-white hover:bg-[#314acb] group"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, transparent 64px, #314acb 64px, #314acb 100%)",
        }}
      >
        <span className="t1 text-base font-medium pr-8 group-hover:hidden">
          상담전화
        </span>
        <span className="t2 text-lg text-white font-semibold pl-6 hidden group-hover:block">
          031-998-9814
        </span>
        <div className="w-16 text-center text-white flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </div>
      </button>

      {/* 푸터 */}
      <footer id="footer" className="bg-gray-800">
        <div className="infoWrap py-16 pb-20">
          <div className="box0 text-white">
            <div className="flex flex-wrap items-start">
              {/* 로고 및 회사명 */}
              <div className="logo">
                <div className="in">
                  <div className="text-2xl font-bold opacity-60">
                    더아이티솔루션
                  </div>
                </div>
              </div>

              {/* 회사 정보 */}
              <div className="copy_wrap flex-1 pl-16 font-normal">
                <ul className="info flex flex-wrap leading-loose">
                  <li className="pr-11">
                    <span className="tt">상호 : 더아이티솔루션</span>
                  </li>
                  <li className="pr-11">
                    <span className="tt">
                      (10017) 경기도 김포시 통진읍 김포대로 1978번길 106 (통진읍
                      도사리 637-1)
                    </span>
                  </li>
                  <li className="pr-11">
                    <span className="tt">대표 : 김주영</span>
                  </li>
                  <li className="br w-full"></li>
                  <li className="pr-11">
                    <span className="tt">사업자등록번호 : 109–66-00467</span>
                  </li>
                  <li className="pr-11">
                    <span className="tt">대표전화 : </span>
                    <button onClick={handleCall} className="tt hover:underline">
                      031-998-9814
                    </button>
                  </li>
                  <li className="pr-11">
                    <span className="tt">팩스 : 031-998-9817</span>
                  </li>
                  <li className="pr-11">
                    <span className="tt">E-mail : </span>
                    <button
                      onClick={handleEmail}
                      className="tt hover:underline"
                    >
                      sales@dsdecal.com
                    </button>
                  </li>
                  <li>
                    <Link href="/admin" className="tt hover:underline">
                      admin
                    </Link>
                  </li>
                </ul>
                <p className="copy mt-8">
                  <span className="tt text-sm opacity-40">
                    COPYRIGHT (C) Dongsung Gravure Co.,Ltd. ALL RIGHTS RESERVED.
                  </span>
                </p>
              </div>

              {/* 우측 영역 */}
              <div className="f_last_wrap flex flex-wrap items-center">
                <div className="privacy_wrap mr-4">
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    개인정보처리방침
                  </Link>
                </div>
                <div className="side_wrap">
                  {/* SNS 링크들이 있다면 여기에 추가 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scroll .goTop,
        .scroll .goCall {
          opacity: 1;
          transform: translateY(0);
        }

        .goCall::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 4em;
          height: inherit;
          background: #314acb;
          border-radius: 50%;
          transition: 0.4s;
        }

        .goCall:hover::before {
          width: 100%;
          border-radius: 10em;
        }
      `}</style>
    </>
  );
};

export default Footer;
