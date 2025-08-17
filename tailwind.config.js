import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ✅ fontSize와 borderRadius를 extend 안으로 이동
      fontSize: {
        base: ["15px", "22px"],
        8: ["8px", "10px"],
        9: ["9px", "12px"],
        10: ["10px", "14px"],
        11: ["11px", "14px"],
        12: ["12px", "16px"],
        13: ["13px", "18px"],
        14: ["14px", "20px"],
        15: ["15px", "20px"],
        16: ["16px", "22px"],
        17: ["17px", "24px"],
        18: ["18px", "26px"],
        19: ["18px", "26px"],
        20: ["20px", "28px"],
        21: ["21px", "28px"],
        22: ["22px", "30px"],
        23: ["23px", "30px"],
        24: ["24px", "32px"],
        25: ["25px", "32px"],
        26: ["26px", "32px"],
        28: ["28px", "36px"],
        30: ["30px", "38px"],
        31: ["31px", "38px"],
        32: ["32px", "38px"],
        34: ["34px", "46px"],
        36: ["36px", "46px"],
        44: ["44px", "54px"],
        58: ["58px", "69.6px"],
        60: ["60px", "69.6px"],
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        DEFAULT: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        15: "15px",
        16: "16px",
        20: "20px",
        24: "24px",
        full: "100%",
      },
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff7a00", // 메인 컬러
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#232529", // 서브 컬러
        },
        gray: {
          10: "#F8F8F8",
          20: "#F0F0F0",
          30: "#E0E0E0",
          40: "#C9C9C9",
          50: "#AAAAAA",
          60: "#808080",
          70: "#5D5D5D",
          80: "#444444",
          90: "#242424",
        },
        dongsung: {
          blue: "#ff7a00",
          dark: "#232529",
          gray: {
            light: "#f8f8f8",
            medium: "#666",
            dark: "#333",
          },
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      borderWidth: {
        3: "3px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      lineHeight: { 12: "3rem", 16: "4rem", 20: "5rem" },
      zIndex: { 60: "60", 70: "70", 80: "80", 90: "90", 100: "100" },
      backdropBlur: { xs: "2px" },
      screens: { xs: "475px", "3xl": "1600px" },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".fw-100": { fontWeight: "100" },
        ".fw-200": { fontWeight: "200" },
        ".fw-300": { fontWeight: "300" },
        ".fw-400": { fontWeight: "400" },
        ".fw-500": { fontWeight: "500" },
        ".fw-600": { fontWeight: "600" },
        ".fw-700": { fontWeight: "700" },
        ".fw-800": { fontWeight: "800" },
        ".fw-900": { fontWeight: "900" },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
