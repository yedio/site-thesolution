"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageChanger = () => {
  const langRef = useRef(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    // URL을 변경하는 로직이 필요합니다.
    // Next.js App Router의 다국어 라우팅을 사용하려면 미들웨어를 설정해야 합니다.
    // 예: router.push(`/${lang}`);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="hidden relative w-20 langWrap lg:block" ref={langRef}>
      <div className="btn_lang">
        <button
          onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          className="flex items-center px-1 space-x-2 h-10 btn_in"
        >
          <div className="flex items-center space-x-1">
            <Globe className="w-4 h-4 icon" />
            <strong className="text-base font-bold">
              {currentLang === "ko" ? "KOR" : "ENG"}
            </strong>
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
          <li className={currentLang === "ko" ? "on" : ""}>
            <button
              onClick={() => handleLanguageChange("ko")}
              className="block px-2 py-1 w-full text-black transition-colors duration-200 in hover:bg-gray-100"
            >
              <span className="text-sm tt">KOR</span>
            </button>
          </li>
          <li className={currentLang === "en" ? "on" : ""}>
            <button
              onClick={() => handleLanguageChange("en")}
              className="block px-2 py-1 w-full text-black transition-colors duration-200 in hover:bg-gray-100"
            >
              <span className="text-sm tt">ENG</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
