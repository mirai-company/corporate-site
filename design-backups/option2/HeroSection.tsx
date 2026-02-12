"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAFAF9]">
      {/* Background Image - subtle */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/images/header.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9]/90 to-[#FAFAF9]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10 pt-24 md:pt-32">
        <div className="container-custom w-full">
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center mb-12"
            >
              <Image
                src="/images/company-logo-original.png"
                alt="未来づくりカンパニー"
                width={200}
                height={200}
                className="h-[140px] md:h-[180px] w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.75rem] font-heading text-[#1A1A1A] leading-[1.2] tracking-[-0.02em]">
                分断された世界を
                <br />
                <span className="text-[#0B3D91]">事業として結び直す</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center text-[#666] text-base md:text-lg max-w-md mx-auto mt-8 font-gothic leading-relaxed"
            >
              社会課題を構造から解決し、持続可能な未来を創造する
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center mt-12"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-gothic text-[#0B3D91] hover:text-[#061E4A] transition-colors duration-300 cursor-pointer"
              >
                <span className="tracking-wide">私たちについて</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-12 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <svg
            className="w-5 h-5 text-[#999]"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 4v12M6 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
