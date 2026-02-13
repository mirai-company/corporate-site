"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const ceoTimeline = [
  {
    year: "1985",
    event: "名古屋大学卒業　博報堂入社　大手食品会社を担当",
    eventEn: "Graduated from Nagoya University, joined Hakuhodo. Handled major food company accounts"
  },
  {
    year: "1989",
    event: "九州支社に異動。福岡市を担当し、アジア太平洋博覧会、アジアフォーカス福岡映画祭等自治体業務を担当。",
    eventEn: "Transferred to Kyushu branch. In charge of Fukuoka City, Asia-Pacific Expo, Asia Focus Fukuoka Film Festival and other municipal projects"
  },
  {
    year: "1993",
    event: "東京本社に異動し、大手金融グループ、大手飲酒メーカーを中心に担当。",
    eventEn: "Transferred to Tokyo headquarters, handling major financial groups and beverage manufacturers"
  },
  {
    year: "2002-06",
    event: "KPO キリンプラザ大阪の現代アート展覧会プロデュースを担当。",
    eventEn: "Produced contemporary art exhibitions at KPO Kirin Plaza Osaka"
  },
  {
    year: "2012",
    event: "テーマ開発局へ異動。文化ジャンルの著名人と地域を旅する「cultra」スタート（JTBと共同）",
    eventEn: "Transferred to Theme Development Bureau. Started 'cultra' - travel experiences with cultural celebrities (joint venture with JTB)"
  },
  {
    year: "2014",
    event: "岡山県和気町地域活性化戦略プロデューサー",
    eventEn: "Regional Revitalization Strategy Producer for Wake Town, Okayama Prefecture"
  },
  {
    year: "2015",
    event: "一般社団未病息災推進協議会立ち上げ",
    eventEn: "Established Mibyou Sokusai Promotion Council (General Incorporated Association)"
  },
  {
    year: "2018",
    event: "博報堂を独立し、株式会社未来づくりカンパニー設立して、社会課題解決を目指して、観光、環境、食、健康をテーマに事業を推進。「地域が稼ぐ観光」を出版",
    eventEn: "Left Hakuhodo and established MIRAI Creation Company. Pursuing business focused on tourism, environment, food, and health to solve social issues. Published 'Tourism That Profits Regions'"
  },
  {
    year: "2020",
    event: "日本茶の啓蒙普及活動 JAPAN TEA ACTION スタート",
    eventEn: "Launched JAPAN TEA ACTION - Japanese tea promotion and awareness initiative"
  },
  {
    year: "2021",
    event: "旅行業の取扱い事業者となり、未来づくりエクスペリエンススタート",
    eventEn: "Became registered travel business operator. Launched MIRAI Creation Experience"
  },
  {
    year: "2024",
    event: "未来へのごちそうスタート",
    eventEn: "Launched 'Feast for the Future' (Mirai e no Gochisou) initiative"
  },
  {
    year: "2025",
    event: "ミトエールスタート　深結の神結び事業スタート",
    eventEn: "Launched Mitoale. Started 'Shinyu no Kamimusubi' sacred connections business"
  },
];

const teamMembers = [
  { name: "T. Goto", role: "n8n Verified Creator", roleEn: "n8n Verified Creator", image: "/images/members/goto.jpg" },
  { name: "T. Toyoda", role: "プロジェクトマネージャー", roleEn: "Project Manager", image: "/images/members/toyoda.jpg" },
  { name: "M. Kan", role: "国内旅行業務取扱管理者", roleEn: "Domestic Travel Business Manager", image: "/images/members/kan.jpg" },
  { name: "M. Bait", role: "デザイナー", roleEn: "Designer", image: "/images/members/bait.jpg" },
];

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

export default function AboutPage() {
  const { t, locale } = useI18n();

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
              {t("about.label")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              {t("about.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <SectionFade>
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              {t("about.ceo.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4 mb-12">
              {t("about.ceo.title")}
            </h2>
          </SectionFade>

          <SectionFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Photo */}
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/members/oba.jpg')`,
                  }}
                />
              </div>

              {/* Bio */}
              <div>
                <div className="mb-8">
                  <p className="text-sm text-[#0B3D91] tracking-wider font-gothic leading-relaxed">
                    {t("about.ceo.company")}<br />
                    {t("about.ceo.position")}
                  </p>
                  <h3 className="text-3xl font-heading text-[#1A1A1A] mt-4">
                    {t("about.ceo.name")}
                  </h3>
                  <p className="text-sm text-[#555] mt-1 font-gothic">{t("about.ceo.nameEn")}</p>
                </div>

                {/* Roles */}
                <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
                  <p className="text-sm text-[#555] font-gothic leading-relaxed whitespace-pre-line">
                    {t("about.ceo.roles")}
                  </p>
                </div>

                {/* Career */}
                <div className="space-y-4 text-[#555] font-gothic">
                  <h4 className="text-sm font-medium text-[#1A1A1A] tracking-wider">{t("about.ceo.career")}</h4>
                  <p className="leading-[1.9]">
                    {t("about.ceo.career1")}
                  </p>
                  <p className="leading-[1.9]">
                    {t("about.ceo.career2")}
                  </p>
                  <p className="text-sm leading-[1.9]">
                    {t("about.ceo.book")}
                  </p>
                </div>

                {/* Statement */}
                <div className="mt-8 pt-8 border-t border-[#E5E5E5]">
                  <p className="text-base text-[#1A1A1A] font-gothic font-medium leading-[1.9] whitespace-pre-line">
                    {t("about.ceo.statement")}
                  </p>
                </div>
              </div>
            </div>
          </SectionFade>

          {/* CEO Timeline */}
          <SectionFade className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0B3D91]/20 to-transparent" />
              <h3 className="text-xl font-heading text-[#1A1A1A] px-4">{t("about.ceo.timeline")}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0B3D91]/20 to-transparent" />
            </div>
            <div className="max-w-4xl mx-auto">
              {ceoTimeline.map((item, index) => {
                const isKeyMilestone = ["2018", "2025"].includes(item.year);
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`group flex gap-4 md:gap-8 pb-8 border-l-2 pl-6 md:pl-8 relative transition-all duration-300 hover:bg-[#0B3D91]/[0.02] -ml-px ${
                      isKeyMilestone
                        ? "border-[#0B3D91] bg-[#0B3D91]/[0.03]"
                        : "border-[#0B3D91]/20"
                    } ${index === ceoTimeline.length - 1 ? "pb-0 border-l-0" : ""}`}
                  >
                    {/* Timeline Node */}
                    <div
                      className={`absolute left-0 top-0 -translate-x-1/2 transition-transform duration-300 group-hover:scale-125 ${
                        isKeyMilestone ? "w-4 h-4 -translate-x-[7px]" : "w-3 h-3 -translate-x-[5px]"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full ${
                          isKeyMilestone
                            ? "bg-[#0B3D91] ring-4 ring-[#0B3D91]/20"
                            : "bg-[#0B3D91] group-hover:ring-4 group-hover:ring-[#0B3D91]/10"
                        }`}
                      />
                    </div>

                    {/* Year Badge */}
                    <div className="shrink-0">
                      <span
                        className={`inline-block font-medium font-gothic transition-all duration-300 ${
                          isKeyMilestone
                            ? "text-white bg-[#0B3D91] px-3 py-1 text-sm rounded"
                            : "text-[#0B3D91] text-sm group-hover:text-[#0B3D91]"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Event Description */}
                    <div className="flex-1 pt-0.5">
                      <p
                        className={`font-gothic leading-relaxed transition-colors duration-300 ${
                          isKeyMilestone
                            ? "text-[#1A1A1A] font-medium"
                            : "text-[#555] group-hover:text-[#333]"
                        }`}
                      >
                        {locale === "en" ? item.eventEn : item.event}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SectionFade>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-custom">
          <SectionFade>
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              {t("about.team.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4 mb-12">
              {t("about.team.title")}
            </h2>
          </SectionFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gray-200 mb-4 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                </div>
                <h3 className="font-heading text-[#1A1A1A]">{member.name}</h3>
                <p className="text-xs text-[#555] mt-1 font-gothic">
                  {locale === "en" ? member.roleEn : member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Company Logo - Centered Symbol Mark */}
          <SectionFade>
            <div className="flex flex-col items-center text-center mb-16">
              <div className="mb-8">
                <Image
                  src="/images/company-logo-original.png"
                  alt="未来づくりカンパニー シンボルマーク"
                  width={180}
                  height={180}
                  className="h-36 md:h-44 w-auto object-contain"
                />
              </div>
              <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
                {t("about.company.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4">
                {t("about.company.title")}
              </h2>
            </div>
          </SectionFade>

          <SectionFade>
            <div className="max-w-3xl">
              <table className="w-full">
                <tbody className="divide-y divide-[#E5E5E5]">
                  {[
                    { labelKey: "about.company.name", valueKey: "about.company.nameValue" },
                    { labelKey: "about.company.representative", value: locale === "en" ? "Akihito Oba" : "大羽　昭仁" },
                    { labelKey: "about.company.capital", valueKey: "about.company.capitalValue" },
                    { labelKey: "about.company.location", valueKey: "about.company.locationValue" },
                    { labelKey: "about.company.license", valueKey: "about.company.licenseValue" },
                    { labelKey: "about.company.association", valueKey: "about.company.associationValue" },
                    { labelKey: "about.company.affiliate", valueKey: "about.company.affiliateValue" },
                  ].map((row) => (
                    <tr key={row.labelKey}>
                      <th className="py-4 pr-8 text-left text-sm text-[#555] font-normal align-top w-40 font-gothic">
                        {t(row.labelKey)}
                      </th>
                      <td className="py-4 text-[#1A1A1A] whitespace-pre-line font-gothic">
                        {row.valueKey ? t(row.valueKey) : row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionFade>
        </div>
      </section>
    </>
  );
}
