"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainVisual from "@/components/layout/main/MainVisual";
import AboutSection from "@/components/layout/main/AboutSection";
import ServiceSection from "@/components/layout/main/ServiceSection";
import ContactSection from "@/components/layout/main/ContactSection";
import ProductSection from "@/components/layout/main/ProductSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <MainVisual />
        <AboutSection />
        <ServiceSection />
        <ProductSection />
        <ContactSection />
      </main>
    </div>
  );
}
