"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[#0B3D91]">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white leading-tight">
              {t("cta.headline")}
            </h2>
            <p className="text-white/70 mt-6 max-w-lg text-base font-gothic leading-relaxed">
              {t("cta.description")}
            </p>
          </motion.div>

          {/* Right: CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#0B3D91] px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-all duration-300 font-gothic font-medium cursor-pointer"
            >
              <span>{t("cta.consult")}</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-gothic cursor-pointer"
            >
              <span>{t("cta.about")}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
