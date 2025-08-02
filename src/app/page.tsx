"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import MainVisual from "@/components/MainVisual";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import RnDSection from "@/components/RnDSection";
import CustomerSection from "@/components/CustomerSection";
import Footer from "@/components/Footer";

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
      <Header />
      <main className="pt-20">
        <MainVisual />
        <AboutSection />
        <ServiceSection />
        <RnDSection />
        <CustomerSection />
      </main>
      <Footer />
    </div>
  );
}
