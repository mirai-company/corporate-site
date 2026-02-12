"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

function SectionFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PhilosophyPage() {
  const questionsRef = useRef(null);
  const questionsInView = useInView(questionsRef, { once: true, margin: "-100px" });
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  const questions = [
    { typeKey: "philosophy.page.questions.circulation", questionKey: "philosophy.page.questions.circulationQ" },
    { typeKey: "philosophy.page.questions.connection", questionKey: "philosophy.page.questions.connectionQ" },
    { typeKey: "philosophy.page.questions.time", questionKey: "philosophy.page.questions.timeQ" },
    { typeKey: "philosophy.page.questions.role", questionKey: "philosophy.page.questions.roleQ" },
  ];

  const principles = [
    { titleKey: "philosophy.page.principles.circulation", descKey: "philosophy.page.principles.circulationDesc" },
    { titleKey: "philosophy.page.principles.prayer", descKey: "philosophy.page.principles.prayerDesc" },
    { titleKey: "philosophy.page.principles.coexistence", descKey: "philosophy.page.principles.coexistenceDesc" },
    { titleKey: "philosophy.page.principles.time", descKey: "philosophy.page.principles.timeDesc" },
    { titleKey: "philosophy.page.principles.story", descKey: "philosophy.page.principles.storyDesc" },
  ];

  const capitals = [
    { en: "People to People", ja: "人 × 人", descJa: "分断された関係性を回復し、関係資本を再構築する", descEn: "Restoring fragmented relationships and rebuilding relational capital" },
    { en: "People to Region", ja: "人 × 地域", descJa: "埋もれてきた地域資源を読み替え、地域価値を再編集する", descEn: "Reinterpreting hidden regional resources and re-editing regional value" },
    { en: "People to Nature", ja: "人 × 自然", descJa: "人と自然の関係を再設計し、循環型社会を実現する", descEn: "Redesigning the relationship between people and nature to achieve a circular society" },
    { en: "People to Body", ja: "人 × 身体", descJa: "人を「機能」ではなく、生命として捉え直す", descEn: "Reframing people not as 'functions' but as life itself" },
    { en: "People to Food", ja: "人 × 食", descJa: "生命循環の起点として、食を捉え直す", descEn: "Reframing food as the starting point of life circulation" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              {t("philosophy.page.label")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              {t("philosophy.page.headline1")}
              <br />
              {t("philosophy.page.headline2")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <SectionFade>
            <div className="max-w-4xl">
              <div className="space-y-6 text-[#555] leading-relaxed font-gothic">
                <p className="text-lg md:text-xl text-[#1A1A1A]">
                  {t("philosophy.page.mission1")}
                </p>
                <p className="text-base md:text-lg">
                  {t("philosophy.page.content1")}
                </p>
                <p>
                  {t("philosophy.page.content2")}
                </p>
              </div>
            </div>
          </SectionFade>

          {/* Mission Statement */}
          <SectionFade className="mt-12">
            <div className="bg-[#1A1A1A] py-12 px-8 max-w-4xl">
              <p className="text-white/90 text-base md:text-lg leading-[2] font-gothic">
                {t("philosophy.page.missionStatement")}
              </p>
            </div>
          </SectionFade>
        </div>
      </section>

      {/* Questions Framework */}
      <section ref={questionsRef} className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={questionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
                {t("philosophy.page.framework.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4 leading-[1.3]">
                {t("philosophy.page.framework.title1")}
                <br />
                {t("philosophy.page.framework.title2")}
              </h2>
              <p className="text-sm md:text-base text-[#555] mt-6 leading-[1.9] font-gothic">
                {t("philosophy.page.framework.description")}
              </p>
            </motion.div>

            {/* Right - Questions */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {questions.map((item, index) => (
                  <motion.div
                    key={item.typeKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={questionsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative p-6 sm:p-8 bg-white hover:bg-[#F5F5F5] transition-all duration-300 border-l-2 border-transparent hover:border-[#0B3D91]/30"
                  >
                    <span className="text-xs text-[#0B3D91] font-gothic tracking-[0.1em]">
                      {t(item.typeKey)}{locale === "ja" ? "の問い" : ""}
                    </span>
                    <p className="text-xl md:text-2xl font-heading text-[#1A1A1A] mt-4 leading-[1.4]">
                      {t(item.questionKey)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section ref={principlesRef} className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("philosophy.page.principles.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white mt-4">
              {t("philosophy.page.principles.title")}
            </h2>
            <p className="text-white/50 mt-4 font-gothic text-sm md:text-base">
              {t("philosophy.page.principles.description")}
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="relative"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white mb-3 sm:mb-4">
                  {t(principle.titleKey)}
                </h3>
                <p className="text-sm text-white/40 leading-[1.9] font-gothic">
                  {t(principle.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Capitals */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <SectionFade>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("philosophy.page.capitals.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4 mb-12">
              {t("philosophy.page.capitals.title")}
            </h2>
          </SectionFade>

          <SectionFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {capitals.map((capital, index) => (
                <motion.div
                  key={capital.ja}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs text-[#0B3D91]/60 tracking-[0.15em] uppercase font-gothic">
                    {capital.en}
                  </span>
                  <h4 className="text-xl font-heading text-[#1A1A1A] mt-2 mb-3">
                    {locale === "en" ? capital.en : capital.ja}
                  </h4>
                  <p className="text-sm text-[#555] leading-[1.8] font-gothic">
                    {locale === "en" ? capital.descEn : capital.descJa}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Statement */}
            <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
              <p className="text-lg md:text-xl text-[#1A1A1A] font-heading leading-relaxed">
                {t("philosophy.page.capitals.statement")}
              </p>
            </div>
          </SectionFade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="container-custom">
          <SectionFade>
            <div className="text-center">
              <p className="text-[#555] font-gothic mb-8">
                {t("philosophy.page.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 bg-[#0B3D91] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#0B3D91]/90 transition-all duration-300 font-gothic"
                >
                  <span>{t("philosophy.page.cta.projects")}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-4 text-sm tracking-wide hover:bg-[#1A1A1A]/5 transition-all duration-300 font-gothic"
                >
                  <span>{t("philosophy.page.cta.about")}</span>
                </Link>
              </div>
            </div>
          </SectionFade>
        </div>
      </section>
    </>
  );
}
