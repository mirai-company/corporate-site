"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const connections = [
  { ja: "人 × 人", en: "People to People", desc: "関係資本の再構築" },
  { ja: "人 × 地域", en: "People to Region", desc: "地域価値の再発見" },
  { ja: "人 × 自然", en: "People to Nature", desc: "循環型社会の実現" },
  { ja: "経済 × 意味", en: "Economy to Meaning", desc: "価値の再定義" },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-3">
              結びの世界
            </h2>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-[#333] leading-[1.9] font-gothic max-w-3xl">
              現代社会は、人と人、人と地域、人と自然、そして経済と意味が分断されています。
              私たちは、この分断を「構造」として捉え、事業を通じて再び結び直すことを使命としています。
            </p>

            {/* Connection grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 mt-16">
              {connections.map((item, index) => (
                <motion.div
                  key={item.ja}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 md:p-8"
                >
                  <span className="text-[10px] text-[#999] tracking-[0.15em] uppercase font-gothic">
                    {item.en}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading text-[#1A1A1A] mt-2">
                    {item.ja}
                  </h3>
                  <p className="text-xs text-[#666] mt-3 font-gothic">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 pt-12 border-t border-gray-200"
            >
              <p className="text-xl md:text-2xl font-heading text-[#1A1A1A] leading-relaxed text-center">
                「やって終わり」ではなく
                <br />
                「回り続ける仕組み」を設計する
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
