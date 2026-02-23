"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="dark-surface relative min-h-screen flex flex-col overflow-hidden bg-[#050810]">
      {/* Gradient Background - CSS animations for GPU performance */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] via-[#061228] to-[#050810]" />

        {/* Aurora waves - CSS animated */}
        <div
          className="absolute -top-1/2 -left-1/4 w-[120%] h-[80%] opacity-40 animate-aurora-1"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(11,61,145,0.4) 25%, rgba(30,91,181,0.3) 50%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[100%] h-[70%] opacity-30 animate-aurora-2"
          style={{
            background: 'linear-gradient(225deg, transparent 0%, rgba(59,130,246,0.3) 30%, rgba(11,61,145,0.4) 60%, transparent 100%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Orbs - CSS animated */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#3B82F6]/30 blur-[80px] animate-orb-1" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] rounded-full bg-[#0B3D91]/40 blur-[60px] animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1E5BB5]/25 blur-[100px] animate-pulse-slow" />

        {/* Floating particles - reduced to 3, CSS animated */}
        <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-1" style={{ left: '20%', top: '30%' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-2" style={{ left: '50%', top: '40%' }} />
        <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-3" style={{ left: '75%', top: '25%' }} />

        {/* Grid pattern */}
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

        {/* Radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,61,145,0.15)_0%,_transparent_60%)]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,8,16,0.5)_100%)]" />
      </div>

      {/* Main Content - keep Framer Motion for one-time entrance animations only */}
      <div className="flex-1 flex items-center relative z-10 pt-24 md:pt-32">
        <div className="container-custom w-full">
          <div className="max-w-5xl mx-auto">
            {/* Headline */}
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center text-white text-base md:text-lg max-w-xl mx-auto mt-8 font-gothic font-medium leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Description */}
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
              <Link
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
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-gothic font-medium cursor-pointer"
              >
                <span>{t("hero.cta.about")}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - CSS animated */}
      <div className="relative z-10 pb-8 flex justify-center opacity-60">
        <div className="animate-bounce-slow">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M10 4v12M6 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
