"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BookOpen,
  Briefcase,
  Users,
  Lightbulb,
  Heart,
  FileText,
  Headphones,
  GraduationCap,
  Award,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const services = [
  {
    id: "languages",
    icon: Globe,
    title: "Language & Communication",
    description:
      "Comprehensive language solutions to enhance global competence and professional effectiveness.",
    color: "orange",
    features: [
      { icon: BookOpen, textKey: "ft1" },
      { icon: FileText, textKey: "ft2" },
      { icon: Headphones, textKey: "ft3" },
      { icon: Globe, textKey: "ft4" },
    ],
  },
  {
    id: "career",
    icon: GraduationCap,
    title: "Academic & Career Support",
    description:
      "Supporting learners and professionals in making informed academic and career decisions.",
    color: "green",
    features: [
      { icon: Briefcase, textKey: "ft1" },
      { icon: Award, textKey: "ft2" },
      { icon: FileText, textKey: "ft3" },
      { icon: Shield, textKey: "ft4" },
    ],
  },
  {
    id: "development",
    icon: TrendingUp,
    title: "Professional Development",
    description:
      "Recognizing that success extends beyond academic achievement with holistic training.",
    color: "blue",
    features: [
      { icon: Lightbulb, textKey: "ft1" },
      { icon: Briefcase, textKey: "ft2" },
      { icon: TrendingUp, textKey: "ft3" },
      { icon: Users, textKey: "ft4" },
    ],
  },
  {
    id: "ecd",
    icon: Heart,
    title: "ECD & Community Support",
    description:
      "Laying strong foundations for lifelong learning and community well-being.",
    color: "gold",
    features: [
      { icon: Heart, textKey: "ft1" },
      { icon: Users, textKey: "ft2" },
      { icon: Shield, textKey: "ft3" },
      { icon: Users, textKey: "ft4" },
    ],
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange",
    bgLight: "bg-orange/10",
    border: "border-orange/20",
    text: "text-orange",
    gradient: "from-orange/20 to-orange/5",
  },
  green: {
    bg: "bg-green",
    bgLight: "bg-green/10",
    border: "border-green/20",
    text: "text-green",
    gradient: "from-green/20 to-green/5",
  },
  blue: {
    bg: "bg-blue",
    bgLight: "bg-blue/10",
    border: "border-blue/20",
    text: "text-blue",
    gradient: "from-blue/20 to-blue/5",
  },
  gold: {
    bg: "bg-gold",
    bgLight: "bg-gold/20",
    border: "border-gold/30",
    text: "text-gold-dark",
    gradient: "from-gold/30 to-gold/10",
  },
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-bg-light relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-grid opacity-50" />

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
          <p className="text-lg text-gray leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors =
              colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white rounded-2xl p-8 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 h-full group`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">
                        {t(`${service.id}.title`)}
                      </h3>
                      <p className="text-gray text-sm">
                        {t(`${service.id}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl ${colors.bgLight} ${colors.border} border`}
                      >
                        <feature.icon
                          className={`w-5 h-5 ${colors.text} shrink-0`}
                        />
                        <span className="text-sm text-dark">
                          {t(`${service.id}.features.${feature.textKey}`)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-2 font-medium ${colors.text} hover:gap-3 transition-all`}
                  >
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
          <p className="text-gray mb-6">{t("question")}</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-orange/25 transition-all"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
