"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.validation.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.validation.inquiryRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 에러가 있으면 입력 시 에러 제거
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.toast.success"));
    return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS 설정 - 실제 사용 시 환경변수로 관리
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "입력하지 않음",
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL, // 받는 사람 이메일
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success(t("contact.toast.success"));
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 py-20 min-h-screen bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {t("contact.title")}
            </h1>
            <p className="text-gray-600">{t("contact.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이름 필드 */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                {t("contact.name")} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("contact.namePlaceholder")}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#314acb] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* 이메일 필드 */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                {t("contact.email")} <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("contact.emailPlaceholder")}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#314acb] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* 전화번호 필드 (옵션) */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t("contact.phonePlaceholder")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#314acb]"
              />
              <p className="mt-1 text-sm text-gray-500">
                {t("contact.phoneHint")}
              </p>
            </div>

            {/* 메시지 필드 */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                {t("contact.inquiry")} <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("contact.inquiryPlaceholder")}
                rows={5}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#314acb] resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#314acb] hover:bg-[#15151f] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-md transition duration-200 ease-in-out"
            >
              {isSubmitting ? t("contact.sending") : t("contact.sendButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
