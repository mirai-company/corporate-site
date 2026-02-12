"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const phases = [
    { number: "01", titleKey: "process.01.title", descriptionKey: "process.01.description" },
    { number: "02", titleKey: "process.02.title", descriptionKey: "process.02.description" },
    { number: "03", titleKey: "process.03.title", descriptionKey: "process.03.description" },
    { number: "04", titleKey: "process.04.title", descriptionKey: "process.04.description" },
    { number: "05", titleKey: "process.05.title", descriptionKey: "process.05.description" },
    { number: "06", titleKey: "process.06.title", descriptionKey: "process.06.description" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
            {t("process.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4">
            {t("process.title")}
          </h2>
          <p className="text-[#555] mt-4 max-w-2xl font-gothic text-sm md:text-base leading-relaxed">
            {t("process.description")}
          </p>
        </motion.div>

        {/* Process Steps - Clean 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="relative bg-white p-6 sm:p-8 md:p-10"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#0B3D91]/70 leading-none mb-3 sm:mb-4 block">
                {phase.number}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-heading text-[#1A1A1A] mb-3">
                  {t(phase.titleKey)}
                </h3>
                <p className="text-sm text-[#555] leading-[1.9] font-gothic">
                  {t(phase.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
