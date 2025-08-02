"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Download, Globe } from "lucide-react";

const Header = () => {
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

  const downloadRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        downloadRef.current &&
        !(downloadRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDownloadMenuOpen(false);
      }
      if (
        langRef.current &&
        !(langRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigationItems = [
    {
      title: "회사소개",
      href: "/about",
      submenu: [
        { title: "CEO 인사말", href: "/about/greetings" },
        { title: "비전", href: "/about/vision" },
        { title: "연혁", href: "/about/history" },
        { title: "조직도", href: "/about/organization" },
      ],
    },
    {
      title: "제품소개",
      href: "/products",
      submenu: [
        { title: "팬시", href: "/products/fancy" },
        { title: "딱풀", href: "/products/glue" },
        { title: "기물", href: "/products/utensils" },
      ],
    },
    {
      title: "연구개발",
      href: "/rnd",
      submenu: [
        { title: "회사설비시설", href: "/rnd/facilities" },
        { title: "그라비아인쇄", href: "/rnd/gravure" },
        { title: "특수효과", href: "/rnd/effects" },
        { title: "각종인증서", href: "/rnd/certificates" },
      ],
    },
    {
      title: "고객센터",
      href: "/customer",
      submenu: [{ title: "공지사항", href: "/customer/notices" }],
    },
  ];

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md"
      id="header"
    >
      <div className="transition-all duration-200">
        <div className="justify-between items-center max-w-[1920px] flex h-18 px-6">
          {/* 로고 */}
          <Link href="/" className="flex items-center h-full in">
            <div className="text-2xl font-bold text-blue-900">
              더아이티솔루션
            </div>
          </Link>

          {/* 데스크톱 네비게이션 - lg 이상에서만 보임 */}
          <nav className="hidden gnb_wrap lg:block">
            <ul className="flex justify-center text-center gnb">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="overflow-hidden relative flex-1 group"
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center justify-center h-20 px-8 py-0 text-gray-800 uppercase transition-colors duration-200 dp1 hover:text-[#314acb]"
                  >
                    <span className="text-xl font-semibold tt">
                      {item.title}
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 transform scale-x-0 bg-[#314acb] opacity-0 group-hover:opacity-100 group-hover:scale-x-80"></div>
                  </Link>
                  {/* 드롭다운 메뉴 */}
                  <ul className="absolute right-0 left-0 top-full invisible z-50 bg-white border-t border-gray-200 shadow-lg opacity-0 transition-all duration-200 dp2 group-hover:visible group-hover:opacity-100">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-4 transition-colors duration-200 text-gray-600 hover:bg-blue-50 hover:text-[#314acb]"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          {/* 우측 유틸리티 메뉴 */}
          <div className="flex items-center space-x-4">
            {/* 회사소개서 다운로드 - lg 이상에서만 보임 */}
            <div className="hidden relative down lg:block" ref={downloadRef}>
              <button
                onClick={() => setIsDownloadMenuOpen(!isDownloadMenuOpen)}
                className="in flex items-center px-4 py-2 transition-colors duration-200 rounded-[4px] bg-[#314acb] text-white hover:bg-[#15151f]"
              >
                <span className="text-base">회사소개서</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    isDownloadMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDownloadMenuOpen && (
                <ul className="absolute right-0 left-0 top-full z-50 p-2 mt-2 bg-white rounded-md border shadow-lg list">
                  <li className="mb-2 last:mb-0">
                    <a
                      href="/files/company-intro-kr.pdf"
                      download
                      className="flex items-center px-4 py-2 text-black rounded-full transition-colors duration-200 profile hover:bg-gray-200"
                    >
                      <span className="text-base font-medium tt">
                        KOR
                        <Download className="inline ml-2 w-4 h-4" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/files/company-intro-en.pdf"
                      download
                      className="flex items-center px-4 py-2 text-black rounded-full transition-colors duration-200 profile hover:bg-gray-200"
                    >
                      <span className="text-base font-medium tt">
                        ENG
                        <Download className="inline ml-2 w-4 h-4" />
                      </span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
            {/* 언어 선택 - lg 이상에서만 보임 */}
            <div className="hidden relative langWrap lg:block" ref={langRef}>
              <div className="btn_lang">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center px-1 space-x-2 h-10 btn_in"
                >
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4 icon" />
                    <strong className="text-base font-bold">KOR</strong>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 arrow ${
                      isLangMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isLangMenuOpen && (
                <ul className="absolute right-0 left-0 top-full z-50 p-2 mt-2 text-center bg-white rounded-md border shadow-lg transition-all duration-200 list">
                  <li className="on">
                    <button className="block px-2 py-1 w-full text-black transition-colors duration-200 in hover:bg-gray-100">
                      <span className="text-sm tt">KOR</span>
                    </button>
                  </li>
                  <li>
                    <button className="block px-2 py-1 w-full text-black transition-colors duration-200 in hover:bg-gray-100">
                      <span className="text-sm tt">ENG</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* 전체메뉴 (햄버거) - lg 이하에서만 보임 */}
            <div className="w-15 allWrap lg:hidden">
              <button
                onClick={() => setIsAllMenuOpen(!isAllMenuOpen)}
                className="flex justify-center items-center h-full btn_all"
              >
                <span className="block relative w-7 h-5 btn_in">
                  <span
                    className={`block h-0.5 w-full bg-gray-800 transition-all duration-200 ${
                      isAllMenuOpen ? "bg-transparent" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-all duration-200 ${
                      isAllMenuOpen
                        ? "top-1/2 w-full transform -rotate-45"
                        : "top-full"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-all duration-200 ${
                      isAllMenuOpen
                        ? "top-1/2 w-full transform rotate-45"
                        : "top-1/2"
                    }`}
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 전체 메뉴 */}
      {isAllMenuOpen && (
        <div className="fixed top-0 right-0 z-40 w-full h-full all">
          <div
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-40 wrap_bg"
            onClick={() => setIsAllMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-80 h-full max-w-4/5 overflow-hidden transition-transform duration-300 transform translate-x-0 bg-[#314acb] wrap_in">
            <div className="overflow-y-auto h-full all_scroll">
              <div className="flex flex-col px-14 pt-20 pb-8 text-white allconWrap">
                <div className="all_gnb">
                  <ul className="block text-left gnb">
                    {navigationItems.map((item, index) => (
                      <li key={index} className="m_about">
                        <Link
                          href={item.href}
                          className="block py-5 transition-colors duration-200 dp1"
                        >
                          <span className="text-xl font-semibold tt">
                            {item.title}
                          </span>
                        </Link>
                        <ul className="block pb-4 pl-3 dp2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="block relative py-2 pr-1 pl-4 opacity-60 transition-all duration-200 hover:opacity-100 hover:underline"
                              >
                                <span className="absolute left-0 w-1 h-0.5 transition-all duration-200 transform -translate-y-1/2 bg-white bg-opacity-60 top-1/2"></span>
                                <span className="font-normal tt">
                                  {subItem.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
