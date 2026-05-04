"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Compass,
  Heart,
  Shield,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useTranslations } from "next-intl";

const values = [
  {
    id: "integrity",
    icon: Shield,
    title: "Integrity",
    description: "Acting ethically and responsibly in all engagements.",
    color: "orange",
  },
  {
    id: "transparency",
    icon: Eye,
    title: "Transparency",
    description:
      "Promoting accountability and openness in governance and service delivery.",
    color: "blue",
  },
  {
    id: "inclusivity",
    icon: Users,
    title: "Inclusivity",
    description: "Ensuring equitable access to learning opportunities for all.",
    color: "green",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description:
      "Upholding high standards in teaching, service delivery, and outcomes.",
    color: "gold",
  },
  {
    id: "service",
    icon: Heart,
    title: "Service to Community",
    description: "Reinvesting to support education for the less fortunate.",
    color: "orange",
  },
];

const approach = [
  "Safe, inclusive learning spaces where learners actively apply knowledge",
  "Sustained coaching, mentorship, and follow-up for long-term impact",
  "Strategic partnerships with like-minded organizations",
  "Practical, learner-centered methodology",
];

export function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-linear-to-br from-green/5 to-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-linear-to-tr from-orange/5 to-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute -inset-4 bg-linear-to-br from-orange/10 via-green/5 to-blue/10 rounded-3xl pattern-diagonal" />

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-border-light">
                {/* Logo Area */}
                <div className="bg-linear-to-br from-bg-light to-white p-8 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="ITOTO Learning Hub"
                    width={300}
                    height={200}
                    className="w-full max-w-xs"
                    loading="eager"
                  />
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-px bg-border-light">
                  <div className="bg-white p-6 text-center">
                    <div className="text-3xl font-bold text-orange mb-1">
                      2024
                    </div>
                    <div className="text-sm text-gray">{t("founded")}</div>
                  </div>
                  <div className="bg-white p-6 text-center">
                    <div className="text-3xl font-bold text-green mb-1">
                      Burundi
                    </div>
                    <div className="text-sm text-gray">{t("hq")}</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-border-light"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium text-dark">
                    {t("value")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-green rounded-xl shadow-lg px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">
                    {t("trans")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
            <p className="text-lg text-gray leading-relaxed mb-6">
              {t("description.p1")}
            </p>
            <p className="text-lg text-gray leading-relaxed mb-8">
              {t("description.p2")}
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">
                    {t("vision.title")}
                  </h3>
                  <p className="text-gray">{t("vision.description")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-green" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">
                    {t("mission.title")}
                  </h3>
                  <p className="text-gray">{t("mission.description")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-blue to-blue-dark rounded-3xl p-8 md:p-12 text-white mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-dots opacity-10" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t("approach.title")}
              </h3>
              <p className="text-white/80 mb-6">{t("approach.description")}</p>
            </div>
            <div className="space-y-4">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    {t(`approach.items.i${index + 1}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-orange uppercase tracking-wider mb-4">
              {t("values.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              {t("values.title")}{" "}
              <span className="text-green">{t("values.titleHighlight")}</span>
            </h2>
            <p className="text-gray">{t("values.description")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const colorMap = {
                orange: "bg-orange",
                blue: "bg-blue",
                green: "bg-green",
                gold: "bg-gold",
              };
              const bgColor = colorMap[value.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border-light shadow-lg hover:shadow-xl transition-all text-center group"
                >
                  <div
                    className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">
                    {t(`values.${value.id}.title`)}
                  </h3>
                  <p className="text-sm text-gray">
                    {t(`values.${value.id}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
