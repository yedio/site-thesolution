"use client";

import { MainWrapper } from "../common/Wrapper";

const AboutSection = () => {
  return (
    <MainWrapper>
      <div className="flex gap-3 justify-between">
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-sm text-gray-500">
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
