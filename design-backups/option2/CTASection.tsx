"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] to-[#061E4A]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight">
            共に、未来を結び直しませんか
          </h2>
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-base font-gothic leading-relaxed">
            地域の課題解決、新規事業開発、官民連携プロジェクトなど、
            お気軽にご相談ください。
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#0B3D91] px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-all duration-300 font-gothic cursor-pointer"
            >
              <span>お問い合わせ</span>
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
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/5 hover:border-white/30 transition-all duration-300 font-gothic cursor-pointer"
            >
              <span>私たちについて</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
