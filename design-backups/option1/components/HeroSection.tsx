"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/images/header.jpg')`,
          }}
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/30" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 md:left-16 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="vertical-text text-xs tracking-[0.3em] text-[#0B3D91]/40 font-display"
        >
          MIRAI CREATION COMPANY
        </motion.div>
      </div>

      <div className="absolute top-1/3 right-8 md:right-16 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="w-px h-24 bg-gradient-to-b from-[#0B3D91]/30 to-transparent"
        />
      </div>

      {/* Main Content - offset from center for editorial feel */}
      <div className="flex-1 flex items-center relative z-10 pt-24 md:pt-32">
        <div className="container-custom w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Company Logo with stagger animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10 md:mb-12"
            >
              <Image
                src="/images/company-logo-original.png"
                alt="未来づくりカンパニー"
                width={200}
                height={200}
                className="h-[160px] md:h-[200px] w-auto object-contain mx-auto"
                priority
              />
            </motion.div>

            {/* Main headline with dramatic typography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading text-[#1A1A1A] leading-[1.15] tracking-tight">
                <span className="block">分断された世界を</span>
                <span className="block mt-2 md:mt-3">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#0B3D91]">事業として結び直す</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-[#0B3D91]/10 -z-0 origin-left"
                    />
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with elegant spacing */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="text-[#4A4A4A] text-base md:text-lg max-w-lg mx-auto leading-relaxed mt-8 md:mt-10 font-gothic"
            >
              社会課題を構造から解決し、
              <br className="hidden sm:block" />
              持続可能な未来を創造する
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="w-16 h-px bg-[#0B3D91]/30 mx-auto mt-10 md:mt-12"
            />

            {/* CTA Button with sophisticated hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10 md:mt-12"
            >
              <a
                href="/about"
                className="group relative inline-flex items-center gap-4 bg-[#0B3D91] text-white px-10 py-5 text-sm tracking-[0.15em] overflow-hidden transition-all duration-500 hover:bg-[#061E4A] hover:shadow-[0_8px_30px_rgba(11,61,145,0.3)] cursor-pointer"
              >
                <span className="relative z-10 font-gothic">私たちについて</span>
                <svg
                  className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                {/* Shine effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - refined with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 pb-12 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#4A4A4A]/60 font-display uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#0B3D91]/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B3D91]/20 to-transparent" />
    </section>
  );
}
