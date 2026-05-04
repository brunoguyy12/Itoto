import { Contact } from "@/components/contact";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const services = [
  "Language Training",
  "Test Preparation (TOEFL/IELTS)",
  "Career Counseling",
  "University Applications",
  "Translation Services",
  "Interpretation",
  "Professional Development",
  "ECD Programs",
  "Other",
];

const ContactForm = () => {
  const t = useTranslations("contact");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    //Submit the formData to the form url using fetch and add a synch check if passed set formSubmitted to true
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSd1GPMzqCCHHQ-lkTLzIBTuaUx9OxHinuCCMHnXL1Y4Zh4_bA/formResponse";

    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    console.log("Form Data:", Object.fromEntries(formData.entries()));

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        console.log("Form submitted successfully!!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green" />
          </div>
          <h3 className="text-2xl font-bold text-dark mb-2">
            {t("submitted.title")}
          </h3>
          <p className="text-gray">{t("submitted.description")}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark mb-2"
              >
                {t("form.name")} {" *"}
              </label>
              <Input
                id="name"
                type="text"
                name="entry.71586887"
                required
                placeholder={t("form.namePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border-border-light focus:border-orange focus:ring-orange"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark mb-2"
              >
                {t("form.email")}
                {" *"}
              </label>
              <Input
                id="email"
                type="email"
                required
                name="entry.264910784"
                placeholder={t("form.emailPlaceholder")}
                className="w-full px-4 py-3 rounded-xl border-border-light focus:border-orange focus:ring-orange"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-dark mb-2"
              >
                {t("form.phone")}
              </label>
              <Input
                id="phone"
                type="tel"
                name="entry.1930459932"
                placeholder="+257 XX XXX XXX"
                className="w-full px-4 py-3 rounded-xl border-border-light focus:border-orange focus:ring-orange"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-dark mb-2"
              >
                {t("form.service")}
                {" *"}
              </label>
              <select
                id="service"
                required
                name="entry.1615667292"
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:border-orange focus:ring-orange text-dark"
              >
                <option value="">{t("form.servicePlaceholder")}</option>
                {services.map((service, id) => (
                  <option key={service} value={service}>
                    {t(`services.${id}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-dark mb-2"
            >
              {t("form.message")}
              {" *"}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              name="entry.958306568"
              placeholder={t("form.messagePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-orange focus:ring-orange resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange hover:bg-orange-dark text-white py-6 rounded-xl text-lg font-medium shadow-lg shadow-orange/25 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {t("sending")}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                {t("send")}
              </span>
            )}
          </Button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
