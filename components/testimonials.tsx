"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    quote:
      "ITOTO Learning Hub has transformed the way I learn. The resources and community support are amazing! Their English program helped me pass my IELTS with a band 7.5.",
    author: "Jean-Pierre K.",
    role: "University Student",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The career guidance I received was invaluable. They helped me understand my strengths and navigate the university application process with confidence.",
    author: "Marie C.",
    role: "High School Graduate",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As a teacher, the capacity building workshops opened my eyes to new teaching methodologies. My students are more engaged than ever before.",
    author: "Emmanuel N.",
    role: "Secondary School Teacher",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The translation services are professional and accurate. ILH has become our trusted partner for all our multilingual communication needs.",
    author: "Claudine M.",
    role: "NGO Program Director",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The ECD program has been wonderful for our community. Parents are more involved, and children are thriving in their early learning journey.",
    author: "Pascaline U.",
    role: "Community Leader",
    rating: 5,
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-bg-light relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-waves opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green/10 rounded-full blur-2xl" />

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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden min-h-80">
              {/* Quote Icon */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-orange/10 rounded-br-full flex items-start justify-start p-6">
                <Quote className="w-10 h-10 text-orange" />
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="p-8 md:p-12 pt-16"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-dark leading-relaxed mb-8 italic">
                    {/* &ldquo;{testimonials[currentIndex].quote}&rdquo; */}
                    &ldquo;{t(`items.${currentIndex}.quote`)}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-orange to-gold rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {testimonials[currentIndex].author[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-dark">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-gray">
                        {/* {testimonials[currentIndex].role} */}
                        {t(`items.${currentIndex}.role`)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border-border-light hover:bg-orange hover:text-white hover:border-orange pointer-events-auto -translate-x-6"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border-border-light hover:bg-orange hover:text-white hover:border-orange pointer-events-auto translate-x-6"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-orange w-8"
                    : "bg-border-light hover:bg-gray-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "90%", label: "satisfaction" },
            { value: "500+", label: "student" },
            { value: "30+", label: "partner" },
            // { value: "4.9/5", label: "average" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray">{t(`${stat.label}`)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
