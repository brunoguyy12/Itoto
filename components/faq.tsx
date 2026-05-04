"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const faqs = [
  {
    question: "What languages do you offer training in?",
    answer:
      "We offer comprehensive training in four languages: English, French, Kirundi, and Kiswahili. Each program focuses on the four core skills: speaking, listening, reading, and writing. We also offer specialized courses for diaspora children to learn Kirundi.",
  },
  {
    question: "How do I prepare for TOEFL or IELTS with ILH?",
    answer:
      "Our test preparation program includes practice tests, focused skill-building sessions, personalized feedback, and proven strategies for success. We offer both group classes and one-on-one coaching to match your learning style and schedule.",
  },
  {
    question: "Do you help with university applications?",
    answer:
      "Yes! Our Academic & Career Support service includes comprehensive university application assistance. We help with program selection, application documentation, personal statements, and navigating the admission process for universities worldwide.",
  },
  {
    question: "What professional development courses do you offer?",
    answer:
      "We offer training in personal development, leadership, entrepreneurship, financial literacy, team management, negotiation, conflict resolution, and work ethics. These programs are designed for individuals and can be customized for organizations.",
  },
  {
    question: "How does your ECD program support communities?",
    answer:
      "Our Early Childhood Development program provides child-centered learning tools, caregiver education, child protection initiatives, and support for community-led ECD centers. We focus on building strong foundations for lifelong learning.",
  },
  {
    question: "Do you offer translation and interpretation services?",
    answer:
      "Yes, we provide professional translation services for documents in English, French, Kirundi, and Kiswahili. We also offer both simultaneous and consecutive interpretation for meetings, conferences, and events.",
  },
  {
    question: "Can organizations partner with ILH for training?",
    answer:
      "Absolutely! We work with local and international nonprofits, government institutions, and development partners. We can customize our programs to meet your organization's specific needs and goals.",
  },
  {
    question: "What makes ILH different from other learning centers?",
    answer:
      "ILH is values-driven and community-rooted. We focus on holistic, practical, and transformational learning. Our approach includes sustained coaching and mentorship, and we reinvest a portion of our income to support education for the less fortunate.",
  },
];

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-sm font-semibold text-orange uppercase tracking-wider mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
              {t("title")}{" "}
              <span className="text-green">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg text-gray mb-8">{t("description")}</p>

            <div className="bg-gradient-to-br from-blue/10 to-green/10 rounded-2xl p-6 border border-blue/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{t("question")}</h3>
                  <p className="text-gray text-sm mb-4">{t("answer")}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-blue font-medium hover:underline"
                  >
                    {t("cta")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-bg-light rounded-xl border border-border-light px-6 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left text-dark font-semibold hover:text-orange py-5 [&[data-state=open]]:text-orange">
                    {t(`items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray pb-5">
                    {t(`items.${index}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
