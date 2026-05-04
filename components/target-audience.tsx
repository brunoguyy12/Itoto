"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Users,
  Building2,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "At all levels seeking academic excellence and language proficiency.",
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "Teachers & Educators",
    description: "Looking to enhance their teaching methodologies and skills.",
    color: "green",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Youth and working professionals seeking career advancement.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Caregivers & Parents",
    description: "Community members invested in early childhood development.",
    color: "gold",
  },
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Local and international nonprofits seeking capacity building.",
    color: "green",
  },
  {
    icon: Globe,
    title: "Institutions",
    description:
      "Government and development partners for strategic collaboration.",
    color: "blue",
  },
];

const colorClasses = {
  orange: "bg-orange",
  green: "bg-green",
  blue: "bg-blue",
  gold: "bg-gold",
};

export function TargetAudience() {
  const t = useTranslations("audience");
  return (
    <section className="py-20 md:py-32 bg-bg-light relative overflow-hidden">
      {/* Pattern Background */}
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

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const bgColor =
              colorClasses[audience.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-border-light shadow-lg hover:shadow-xl transition-all h-full flex items-start gap-4">
                  <div
                    className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {t(`items.${index}.title`)}
                    </h3>
                    <p className="text-gray text-sm">
                      {t(`items.${index}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray mb-4">{t("question")}</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-orange font-medium hover:gap-3 transition-all"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
