"use client";

const Footer = () => {
  const handleCall = () => {
    window.open("tel:031-998-9814");
  };

  const handleEmail = () => {
    window.open("mailto:sales@dsdecal.com");
  };

  return (
    <footer id="footer" className="text-gray-300 bg-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl infoWrap">
        <div className="flex justify-between items-center mb-8">
          <div className="font-sans text-xl font-semibold text-white">
            더솔루션
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">개인정보처리방침</span>
          </div>
        </div>

        {/* 중간 섹션 - 회사 정보 */}
        <div className="mb-6 space-y-1">
          <div className="flex flex-wrap items-center text-sm">
            <span>서울특별시 테헤란로 Gangnam Finance Centre</span>
          </div>

          <div className="flex flex-wrap items-center text-sm">
            <span>사업자 등록번호 : 123-456-789012</span>
            <span className="mx-2">|</span>
            <span>통신판매업 : 123-서울-789012</span>
            <span className="mx-2">|</span>
            <span onClick={handleEmail}>개인정보 : your-email@gmail.com</span>
          </div>
        </div>

        {/* 하단 섹션 - 저작권 */}
        <div className="text-sm">
          COPYRIGHT © 2025 COMPANY INC. ALL RIGHTS RESERVED. | DESIGNED BY NAME.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
