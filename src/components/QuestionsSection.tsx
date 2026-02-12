"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const questions = [
  { type: "循環", question: "これはどこへ戻るか？" },
  { type: "繋がり", question: "何と何の間にあるか？" },
  { type: "時間", question: "何を引き継いでいるか？" },
  { type: "役割", question: "誰の役に立っているか？" },
];

export default function QuestionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4 leading-[1.3]">
              結び直すための
              <br />
              「問いの型」
            </h2>
            <p className="text-sm md:text-base text-[#666] mt-6 leading-[1.9] font-gothic">
              結びは、答えを出すことではなく、問いを変えることで起こります。
            </p>
          </motion.div>

          {/* Right - Questions */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {questions.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative p-6 sm:p-8 bg-[#FAFAF9] hover:bg-[#F5F5F3] transition-all duration-300 border-l-2 border-transparent hover:border-[#0B3D91]/30"
                >
                  <span className="text-xs text-[#0B3D91] font-gothic tracking-[0.1em]">
                    {item.type}の問い
                  </span>
                  <p className="text-xl md:text-2xl font-heading text-[#1A1A1A] mt-4 leading-[1.4]">
                    {item.question}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
