"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: "100",
    suffix: "+",
    labelJa: "地域プロジェクト",
    labelEn: "REGIONAL PROJECTS",
  },
  {
    number: "50",
    suffix: "+",
    labelJa: "パートナー企業",
    labelEn: "PARTNER COMPANIES",
  },
  {
    number: "30",
    suffix: "+",
    labelJa: "自治体連携",
    labelEn: "MUNICIPALITY PARTNERS",
  },
];

const partners = ["農林水産省", "観光庁", "博報堂"];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelJa}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center">
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-[#0B3D91] tracking-tight">
                  {stat.number}
                </span>
                <span className="text-2xl md:text-4xl lg:text-5xl font-light text-[#0B3D91]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm md:text-base text-[#333] mt-2 font-gothic">
                {stat.labelJa}
              </p>
              <p className="text-xs text-[#888] tracking-[0.15em] mt-1 font-gothic">
                {stat.labelEn}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-[#E0E0E0] my-16 md:my-20"
        />

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xs text-[#888] tracking-[0.3em] mb-8 font-gothic">
            主 な 連 携 先
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-lg md:text-xl text-[#333] font-heading"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
