"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050810]">
      {/* Gradient Background with intense dynamic elements */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient - deeper, more dramatic */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] via-[#061228] to-[#050810]" />

        {/* Animated aurora-like waves */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[120%] h-[80%] opacity-40"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(11,61,145,0.4) 25%, rgba(30,91,181,0.3) 50%, transparent 75%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[100%] h-[70%] opacity-30"
          style={{
            background: 'linear-gradient(225deg, transparent 0%, rgba(59,130,246,0.3) 30%, rgba(11,61,145,0.4) 60%, transparent 100%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Bright accent orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#3B82F6]/30 blur-[80px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] rounded-full bg-[#0B3D91]/40 blur-[60px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1E5BB5]/25 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Grid pattern - more visible */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial light burst from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,61,145,0.15)_0%,_transparent_60%)]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        {/* Strong vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,8,16,0.5)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10 pt-24 md:pt-32">
        <div className="container-custom w-full">
          <div className="max-w-5xl mx-auto">
            {/* Headline - centered, white extra bold Noto Sans, no shadow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-gothic font-black text-white leading-[1.15] tracking-[-0.02em]">
                {t("hero.headline1")}
                <br />
                {t("hero.headline2")}
              </h1>
            </motion.div>

            {/* Subtitle - what we do */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center text-white text-base md:text-lg max-w-xl mx-auto mt-8 font-gothic font-medium leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Service descriptor - concrete deliverables */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center text-white/60 text-xs md:text-sm max-w-lg mx-auto mt-4 font-gothic tracking-wide"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-14"
            >
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#0B3D91] px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-all duration-300 font-gothic font-medium cursor-pointer"
              >
                <span>{t("hero.cta.consult")}</span>
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
              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-gothic font-medium cursor-pointer"
              >
                <span>{t("hero.cta.about")}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - white */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <svg
            className="w-4 h-4 text-white"
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
