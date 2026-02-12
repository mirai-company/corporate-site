"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  { ja: "循環", description: "自然・人・地域・資源を回し続ける構造" },
  { ja: "祈り", description: "静けさ・内省・世界との一体感を取り戻す力" },
  { ja: "共生", description: "対立や排除ではなく、ともに生きる設計" },
  { ja: "時間", description: "過去－現在－未来の連続性を取り戻す視点" },
  { ja: "物語", description: "意味・文化・精神性を再び立ち上げる力" },
];

export default function PrinciplesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white mt-4">
            結びを機能させる原理
          </h2>
          <p className="text-white/50 mt-4 font-gothic text-sm md:text-base">
            分断された世界をつなぐ 5つのコア概念
          </p>
        </motion.div>

        {/* Principles Grid - single column on mobile for cleaner look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.ja}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="relative"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white mb-3 sm:mb-4">
                {principle.ja}
              </h3>
              <p className="text-sm text-white/40 leading-[1.9] font-gothic">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
