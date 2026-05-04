"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const programs = [
  {
    id: "english",
    title: "English Proficiency",
    subtitle: "Speak Confidently, Write Professionally",
    description:
      "Master the English language with our comprehensive program covering speaking, listening, reading, and writing skills.",
    duration: "3-6 months",
    schedule: "Flexible",
    groupSize: "8-12 students",
    features: [
      "Conversational English",
      "Business Communication",
      "TOEFL/IELTS Prep",
      "Writing & Grammar",
    ],
    color: "orange",
    popular: true,
  },
  {
    id: "french",
    title: "French Language",
    subtitle: "Le français pour tous",
    description:
      "From beginner to advanced, develop your French skills for academic, professional, or personal growth.",
    duration: "3-6 months",
    schedule: "Flexible",
    groupSize: "8-12 students",
    features: [
      "Grammar Foundations",
      "Oral Expression",
      "Written Composition",
      "Cultural Context",
    ],
    color: "blue",
    popular: false,
  },
  {
    id: "kirundi",
    title: "Kirundi for Diaspora",
    subtitle: "Connect with Your Roots",
    description:
      "Online courses designed for children of the Burundian diaspora to learn and appreciate their mother tongue.",
    duration: "Ongoing",
    schedule: "Online",
    groupSize: "6-10 students",
    features: [
      "Basic Vocabulary",
      "Conversation Skills",
      "Cultural Heritage",
      "Family Connection",
    ],
    color: "green",
    popular: false,
  },
  {
    id: "career",
    title: "Career Guidance Package",
    subtitle: "Your Path to Success",
    description:
      "Comprehensive support for students navigating their academic and professional journey.",
    duration: "Custom",
    schedule: "By Appointment",
    groupSize: "1-on-1",
    features: [
      "Career Assessment",
      "University Applications",
      "Visa Support",
      "Interview Prep",
    ],
    color: "gold",
    popular: true,
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange",
    bgLight: "bg-orange/10",
    border: "border-orange",
    text: "text-orange",
    gradient: "from-orange to-orange-dark",
  },
  blue: {
    bg: "bg-blue",
    bgLight: "bg-blue/10",
    border: "border-blue",
    text: "text-blue",
    gradient: "from-blue to-blue-dark",
  },
  green: {
    bg: "bg-green",
    bgLight: "bg-green/10",
    border: "border-green",
    text: "text-green",
    gradient: "from-green to-green-dark",
  },
  gold: {
    bg: "bg-gold",
    bgLight: "bg-gold/20",
    border: "border-gold",
    text: "text-gold-dark",
    gradient: "from-gold to-gold-dark",
  },
};

export function Programs() {
  const t = useTranslations("programs");
  return (
    <section
      id="programs"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-light to-transparent" />
      <div className="absolute inset-0 pattern-diagonal opacity-30" />

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

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const colors =
              colorClasses[program.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`bg-white rounded-2xl border border-border-light shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col ${program.popular ? "ring-2 ring-orange" : ""}`}
                >
                  {/* Popular Badge */}
                  {program.popular && (
                    <div className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {t("popular")}
                    </div>
                  )}

                  {/* Header */}
                  <div className={`p-6 bg-linear-to-br ${colors.gradient}`}>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(`items.${program.id}.title`)}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {t(`items.${program.id}.subtitle`)}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 grow flex flex-col">
                    <p className="text-gray text-sm mb-4">
                      {t(`items.${program.id}.description`)}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray">
                        <Clock className="w-4 h-4 text-gray-muted" />
                        <span>{t(`items.${program.id}.duration`)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray">
                        <Calendar className="w-4 h-4 text-gray-muted" />
                        <span>{t(`items.${program.id}.schedule`)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray">
                        <Users className="w-4 h-4 text-gray-muted" />
                        <span>{t(`items.${program.id}.groupSize`)}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6 grow">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle
                            className={`w-4 h-4 ${colors.text} shrink-0`}
                          />
                          <span className="text-sm text-dark">
                            {t(`items.${program.id}.features.${i}`)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      className={`w-full ${colors.bg} hover:opacity-90 text-white`}
                      asChild
                    >
                      <Link href="#contact">
                        {t("enrollNow")}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray mb-4">{t("question")}</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-blue font-medium hover:gap-3 transition-all"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
