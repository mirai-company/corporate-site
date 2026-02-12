"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { number: "100+", label: "地域プロジェクト", sublabel: "Regional Projects" },
  { number: "50+", label: "パートナー企業", sublabel: "Partner Companies" },
  { number: "30+", label: "自治体連携", sublabel: "Municipality Partners" },
];

const partners = [
  "農林水産省",
  "観光庁",
  "JTB",
  "博報堂",
];

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-[#FAFAF9] border-y border-gray-100">
      <div className="container-custom">
        {/* Metrics + Partners in a single row layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Metrics */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-3xl md:text-4xl font-heading text-[#0B3D91]">
                    {metric.number}
                  </span>
                  <p className="text-sm text-[#1A1A1A] mt-2 font-gothic font-medium">
                    {metric.label}
                  </p>
                  <p className="text-[10px] text-[#999] tracking-wider uppercase font-gothic mt-1">
                    {metric.sublabel}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners - Sidebar style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8"
          >
            <p className="text-[10px] text-[#999] tracking-[0.2em] uppercase font-gothic mb-4">
              主な連携先
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm text-[#555] font-gothic"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
