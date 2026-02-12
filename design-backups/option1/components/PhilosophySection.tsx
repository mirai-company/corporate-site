"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#333333] mt-4">
              結びの世界
            </h2>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed font-gothic">
              現代社会は、人と人、人と地域、人と自然、そして経済と意味が分断されています。
              私たちは、この分断を「構造」として捉え、事業を通じて再び結び直すことを使命としています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Connection types */}
              {[
                { ja: "人 × 人", en: "People to People", desc: "関係資本の再構築" },
                { ja: "人 × 地域", en: "People to Region", desc: "地域価値の再発見" },
                { ja: "人 × 自然", en: "People to Nature", desc: "循環型社会の実現" },
                { ja: "経済 × 意味", en: "Economy to Meaning", desc: "価値の再定義" },
              ].map((item, index) => (
                <motion.div
                  key={item.ja}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-l-2 border-[#0B3D91] pl-6 py-2"
                >
                  <span className="text-xs text-[#0B3D91] tracking-wider font-gothic">
                    {item.en}
                  </span>
                  <h3 className="text-2xl font-heading text-[#333333] mt-1">
                    {item.ja}
                  </h3>
                  <p className="text-sm text-[#555555] mt-2 font-gothic">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <p className="text-xl md:text-2xl font-heading text-[#333333] leading-relaxed text-center">
                「やって終わり」ではなく
                <br />
                「回り続ける仕組み」を設計する
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
