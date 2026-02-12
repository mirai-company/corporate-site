"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function PhilosophyTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("philosophy.label")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-[#1A1A1A] mt-4 leading-[1.2]"
          >
            {t("philosophy.headline1")}
            <br />
            {t("philosophy.headline2")}
          </motion.h2>

          {/* Brief Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#555] leading-[2] font-gothic mt-8 max-w-2xl"
          >
            {t("philosophy.summary1")}
            <br />
            {t("philosophy.summary2")}
          </motion.p>

          {/* Link to Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/philosophy"
              className="group inline-flex items-center gap-2 text-[#0B3D91] text-sm font-gothic font-medium hover:gap-3 transition-all duration-300"
            >
              <span>{t("philosophy.link")}</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
