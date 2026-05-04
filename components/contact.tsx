"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/forms/contactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@itotolearninghub.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+257 61 191 256",
    description: "Mon-Fri, 8am-6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Avenue de l'amitié, No. 11, Bujumbura, Burundi",
    description: "By appointment",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat: 8:00 - 18:00",
    description: "Sunday closed",
  },
];

export function Contact() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-bg-light to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-green/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-orange uppercase tracking-wider mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            {t("title")}{" "}
            <span className="text-green">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray">{t("description")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-linear-to-br from-blue to-blue-dark rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="relative z-10">
                <MessageSquare className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t("question")}</h3>
                <p className="text-white/80 mb-6">{t("answer")}</p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">
                          {t(`info.${index}.title`)}
                        </div>
                        <div className="text-white/90">{info.details}</div>
                        <div className="text-sm text-white/60">
                          {t(`info.${index}.description`)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 border border-border-light shadow-lg">
              <h4 className="font-bold text-dark mb-4">{t("follow")}</h4>
              <div className="flex gap-3">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-bg-light rounded-lg flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                      aria-label={social}
                    >
                      <span className="text-sm font-bold">{social[0]}</span>
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-border-light shadow-xl">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
