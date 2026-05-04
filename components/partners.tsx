"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const partnerTypes = [
  {
    type: "We Proudly Serve",
    items: [
      "education",
      "ngo",
      "government",
      "corporate",
      "community",
      "development",
      "tourism",
    ],
  },
];

export function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="py-16 bg-white border-y border-border-light overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-muted uppercase tracking-wider mb-8">
            {t("title")}
          </p>

          {/* Partner Types */}
          <div className="">
            <div className="flex animate-marquee whitespace-nowrap justify-center gap-4 md:gap-8 ">
              {partnerTypes[0].items.map((itemKey, index) => (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-6 py-3 bg-bg-light rounded-full border border-border-light hover:border-orange/30 hover:bg-orange/5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-linear-to-r from-blue to-green" />
                  <span className="text-md font-medium text-gray">
                    {t(`items.${itemKey}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
