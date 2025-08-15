"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // 비디오가 로드되면 자동 재생 시도
    if (videoRef.current && isMounted) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("비디오 자동 재생 실패:", error);
        }
      };

      // 비디오가 로드된 후 재생 시도
      if (isVideoLoaded) {
        playVideo();
      }
    }
  }, [isVideoLoaded, isMounted]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = (error: any) => {
    console.error("비디오 로딩 에러:", error);
    setIsVideoLoaded(false);
  };

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* 배경 비디오 - 클라이언트 사이드에서만 렌더링 */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
            poster="/images/bg/main_01.jpg"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
          >
            <source src="/videos/city.mp4" type="video/mp4" />
            {/* 비디오를 지원하지 않는 브라우저를 위한 fallback */}
            <img
              src="/images/bg/main_01.jpg"
              alt="배경 이미지"
              className="object-cover w-full h-full"
            />
          </video>

          {/* 비디오 위에 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* 서버 사이드에서는 fallback 이미지만 표시 */}
      {!isMounted && (
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg/main_01.jpg"
            alt="배경 이미지"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* 콘텐츠 */}
      <div className="relative z-10 px-4 mx-auto w-full max-w-5xl text-white md:px-16">
        <div className="space-y-6" data-aos="fade-up">
          {/* 메인 문구 */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Creative Together,
            </h1>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Make new days
            </h2>
          </div>

          {/* 부제목 */}
          <p className="max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
            혁신적인 아이디어로 새로운 미래를 함께 만들어갑니다
          </p>

          {/* 액션 버튼 */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
            >
              <span>문의하기</span>
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
