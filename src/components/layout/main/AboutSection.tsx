"use client";

import { MainWrapper } from "../common/Wrapper";

const AboutSection = () => {
  return (
    <MainWrapper>
      <div className="flex gap-3 justify-between">
        <div className="flex flex-col">
          <h1 className="fw-600 text-24">About Us</h1>
          <h2 className="mt-2 fw-600 text-60">더솔루션</h2>
          <p className="mt-3 text-20">
            We are a team of developers who are passionate about creating
            innovative solutions for our clients.
          </p>
        </div>
        <img src="/images/about/about-img.png" alt="about" />
      </div>
    </MainWrapper>
  );
};

export default AboutSection;
