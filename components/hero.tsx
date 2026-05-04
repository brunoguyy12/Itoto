"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const stats = [
  { icon: GraduationCap, value: "1000+", labelKey: "students" },
  { icon: Globe, value: "4", labelKey: "languages" },
  { icon: Users, value: "50+", labelKey: "successRate" },
  { icon: Lightbulb, value: "15+", labelKey: "experience" },
];

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-36 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots-light opacity-50" />
      <div className="absolute inset-0 pattern-circles" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-orange/10 to-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green/10 to-blue/10 rounded-full blur-3xl" />

      {/* Animated shapes */}
      <motion.div
        className="absolute top-32 right-20 w-16 h-16 border-4 border-orange/30 rounded-full hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-green/20 rounded-lg hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-gold/30 rounded-full hidden lg:block"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange">
                {t("badge")}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-6">
              {t("title1")}{" "}
              <span className="text-orange relative">
                {t("titleHighlight")}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#2E7D32"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,<br />
              {t("title2")}{" "}
              <span className="text-green">{t("titleHighlight2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray leading-relaxed mb-8 max-w-xl">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30 transition-all"
                asChild
              >
                <Link href="#services">
                  {t("cta2")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue text-blue hover:bg-blue hover:text-white px-8 py-6 text-lg rounded-xl transition-all"
                asChild
              >
                <Link href="#about">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-bg-light rounded-xl mb-2">
                    <stat.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div className="text-2xl font-bold text-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray">
                    {t(`stats.${stat.labelKey}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Card */}
              <div className="absolute inset-2 md:inset-4 bg-linear-to-br from-orange/20 via-green/10 to-blue/20 rounded-3xl" />

              {/* Main Image Placeholder - Illustration Style */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-border-light">
                {/* Grid of Service Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Language Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-to-br from-orange/10 to-orange/5 rounded-2xl p-6 border border-orange/20"
                  >
                    <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mb-4">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-dark mb-1">
                      {t("services.languages")}
                    </h3>
                    <p className="text-sm text-gray">
                      EN, FR, Kirundi, Kiswahili
                    </p>
                  </motion.div>

                  {/* Career Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-to-br from-green/10 to-green/5 rounded-2xl p-6 border border-green/20"
                  >
                    <div className="w-14 h-14 bg-green rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-dark mb-1">
                      {t("services.career.key")}
                    </h3>
                    <p className="text-sm text-gray">
                      {t("services.career.label")}
                    </p>
                  </motion.div>

                  {/* Development Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-to-br from-blue/10 to-blue/5 rounded-2xl p-6 border border-blue/20"
                  >
                    <div className="w-14 h-14 bg-blue rounded-xl flex items-center justify-center mb-4">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-dark mb-1">
                      {t("services.development.key")}
                    </h3>
                    <p className="text-sm text-gray">
                      {t("services.development.label")}
                    </p>
                  </motion.div>

                  {/* Community Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-to-br from-gold/20 to-gold/10 rounded-2xl p-6 border border-gold/30"
                  >
                    <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-dark" />
                    </div>
                    <h3 className="font-semibold text-dark mb-1">
                      {t("services.community.key")}
                    </h3>
                    <p className="text-sm text-gray">
                      {t("services.community.label")}
                    </p>
                  </motion.div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-border-light"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-dark">
                      {t("values")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 55C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
