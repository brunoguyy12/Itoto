"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Headphones,
  BookOpen,
  PenLine,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const languages = [
  {
    code: "EN",
    name: "English",
    flag: "🇬🇧",
    phrase: "Hello, how are you?",
    color: "orange",
  },
  {
    code: "FR",
    name: "French",
    flag: "🇫🇷",
    phrase: "Bonjour, comment allez-vous?",
    color: "blue",
  },
  {
    code: "RN",
    name: "Kirundi",
    flag: "🇧🇮",
    phrase: "Amahoro, murakomeye?",
    color: "green",
  },
  {
    code: "SW",
    name: "Kiswahili",
    flag: "🇹🇿",
    phrase: "Habari, hujambo?",
    color: "gold",
  },
];

const skills = [
  {
    icon: MessageCircle,
    name: "Speaking",
    description: "Conversational fluency",
  },
  {
    icon: Headphones,
    name: "Listening",
    description: "Audio comprehension",
  },
  {
    icon: BookOpen,
    name: "Reading",
    description: "Text comprehension",
  },
  {
    icon: PenLine,
    name: "Writing",
    description: "Written expression",
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange",
    bgLight: "bg-orange/10",
    border: "border-orange/20",
    text: "text-orange",
  },
  blue: {
    bg: "bg-blue",
    bgLight: "bg-blue/10",
    border: "border-blue/20",
    text: "text-blue",
  },
  green: {
    bg: "bg-green",
    bgLight: "bg-green/10",
    border: "border-green/20",
    text: "text-green",
  },
  gold: {
    bg: "bg-gold",
    bgLight: "bg-gold/20",
    border: "border-gold/30",
    text: "text-gold-dark",
  },
};

export function LanguagesFeature() {
  const t = useTranslations("languages");
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-waves opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-linear-to-br from-orange/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-linear-to-tl from-blue/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-orange uppercase tracking-wider mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
              {t("title")}{" "}
              <span className="text-green">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8">
              {t("description")}
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-bg-light rounded-xl border border-border-light"
                >
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">
                      {t(`skills.${skill.name.toLowerCase()}.name`)}
                    </div>
                    <div className="text-xs text-gray">
                      {t(`skills.${skill.name.toLowerCase()}.description`)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-orange hover:bg-orange-dark text-white px-6"
                asChild
              >
                <Link href="#contact">
                  {t("cta1")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue text-blue hover:bg-blue hover:text-white px-6"
                asChild
              >
                <Link href="#programs">{t("cta2")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right - Language Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, index) => {
                const colors =
                  colorClasses[lang.color as keyof typeof colorClasses];
                return (
                  <motion.div
                    key={lang.code}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-white rounded-2xl p-6 border ${colors.border} shadow-lg cursor-pointer transition-shadow hover:shadow-xl`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{lang.flag}</span>
                      <span
                        className={`text-sm font-bold ${colors.text} ${colors.bgLight} px-2 py-1 rounded-full`}
                      >
                        {lang.code}
                      </span>
                    </div>

                    {/* Language Name */}
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {t(`${lang.name.toLowerCase()}`)}
                    </h3>

                    {/* Phrase */}
                    <p className="text-sm text-gray italic">
                      &ldquo;{lang.phrase}&rdquo;
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1.5 bg-bg-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                        className={`h-full ${colors.bg} rounded-full`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-3 border border-border-light"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["🇬🇧", "🇫🇷", "🇧🇮", "🇹🇿"].map((flag, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center text-lg border-2 border-white"
                    >
                      {flag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-dark">
                  {t("available")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
