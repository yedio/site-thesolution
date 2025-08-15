"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceSection = () => {
  const products = [
    {
      id: 1,
      title: "PENS",
      subtitle: "팬시",
      description: "펜, 연필, 볼펜,\n형광펜, 보드마카",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
      href: "/products/fancy",
    },
    {
      id: 2,
      title: "GLUE STICKS",
      subtitle: "딱풀",
      description: "",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      href: "/products/glue",
    },
    {
      id: 3,
      title: "UTENSILS",
      subtitle: "기물",
      description: "화장품용기, 주방용기,\n수납용기, 식기류",
      bgColor: "bg-gradient-to-br from-orange-600 to-orange-800",
      href: "/products/utensils",
    },
  ];

  return (
    <section className="main_con main_service bg-gray-50">
      <div className="main_layout">
        <div className="box1 flex flex-wrap">
          {/* 왼쪽 - 설명과 더보기 */}
          <div className="layL pl sticky top-8" data-aos="fade">
            <div className="main_txt py-11">
              <div className="tit">
                <strong className="tt t13">제품소개</strong>
              </div>
              <div className="txt space-y-6">
                <h3 className="tt t10 c_point">
                  <strong>Description</strong>
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="tt t3">
                    플라스틱 원단필름위에 염료잉크인쇄 또는 금속 증착 방식
                    등으로 층을 형성합니다.
                  </p>
                  <p className="tt t3">
                    이를 열전사기계를 이용, 전사함으로써, 기존의 장시간을 요하는
                    실크인쇄방식이나 스티커 부착 등 방식에 비하여 제품성 및
                    작업성, 내구성 등이 우수한 제품입니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="main_more pd1">
              <Link href="/products" className="more flex items-center">
                <strong className="tt">View more</strong>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* 오른쪽 - 제품 카드들 */}
          <div className="layR flex" data-aos="fade-left">
            <div className="main_bnList2 flex w-full">
              <ul className="list flex flex-col space-y-5 text-white w-full">
                {products.map((product, index) => (
                  <li
                    key={product.id}
                    className="flex w-full"
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                  >
                    <Link
                      href={product.href}
                      className="wrap_in group flex items-end relative w-full min-h-64 p-10 bg-fixed transition-all duration-350 hover:z-20 hover:pb-14 hover:scale-105 hover:shadow-2xl"
                    >
                      {/* 배경 그라데이션 */}
                      <div
                        className={`absolute inset-0 ${product.bgColor}`}
                      ></div>

                      {/* 호버 시 배경 그라데이션 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#314acb] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* 콘텐츠 */}
                      <div className="main_txt relative z-10 w-full">
                        <div className="tit mg1 space-y-2">
                          <p className="tt">
                            <strong className="t1 op1 fstUC text-white text-opacity-60">
                              {product.title}
                            </strong>
                          </p>
                          <p className="tt">
                            <strong className="t8 text-white">
                              {product.subtitle}
                            </strong>
                          </p>
                        </div>
                        {product.description && (
                          <div className="txt min-h-14">
                            <p className="tt t4 whitespace-pre-line text-white">
                              <strong>{product.description}</strong>
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
