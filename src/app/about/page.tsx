"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const ceoTimeline = [
  { year: "1985", event: "名古屋大学卒業　博報堂入社", eventEn: "Graduated from Nagoya University, joined Hakuhodo" },
  { year: "1989", event: "九州支社に異動。福岡市を担当し、アジア太平洋博覧会、アジアフォーカス福岡映画祭等自治体業務を担当。", eventEn: "Transferred to Kyushu branch. In charge of Fukuoka City, Asia-Pacific Expo, Asia Focus Fukuoka Film Festival" },
  { year: "1993", event: "東京本社に異動し、大手金融グループ、大手飲酒メーカーを中心に担当。", eventEn: "Transferred to Tokyo headquarters, handling major financial groups and beverage manufacturers" },
  { year: "2002-06", event: "KPOキリンプラザ大阪の現代アート展覧会プロデュースを担当。", eventEn: "Produced contemporary art exhibitions at KPO Kirin Plaza Osaka" },
  { year: "2012", event: "テーマ開発局へ異動。文化ジャンルの著名人と地域を旅する「cultra」スタート（JTBと共同）", eventEn: "Transferred to Theme Development. Started 'cultra' travel experiences with cultural celebrities (with JTB)" },
  { year: "2013", event: "地域資源を巡るサイクリングイベント「RIDEQUEST」スタート（JTBと共同）", eventEn: "Started 'RIDEQUEST' cycling events exploring regional resources (with JTB)" },
  { year: "2014", event: "岡山県和気町地域活性化戦略プロデューサー", eventEn: "Regional Revitalization Strategy Producer for Wake Town, Okayama Prefecture" },
  { year: "2015", event: "一般社団未病息災推進協議会立ち上げ", eventEn: "Established Mibyou Sokusai Promotion Council" },
  { year: "2016", event: "一般社団環境価値創出機構立ち上げ / かすみがうら未来づくりカンパニー設立 ビジネスプロデュース", eventEn: "Established Environmental Value Creation Organization / Kasumigaura MIRAI Creation Company" },
  { year: "2017", event: "信州未来づくりカンパニー設立 ビジネスプロデュース", eventEn: "Established Shinshu MIRAI Creation Company" },
  { year: "2018", event: "博報堂を独立し、Team未来づくりの中核となる株式会社未来づくりカンパニー設立", eventEn: "Left Hakuhodo and established MIRAI Creation Company as the core of Team MIRAI" },
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
          <SectionFade className="mt-16">
            <h3 className="text-xl font-heading text-[#1A1A1A] mb-8">{t("about.ceo.timeline")}</h3>
            <div className="max-w-3xl">
              {ceoTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-6 pb-6 border-l-2 border-[#0B3D91]/20 pl-6 relative"
                >
                  <div className="absolute left-0 top-1 w-2 h-2 bg-[#0B3D91] rounded-full -translate-x-[5px]" />
                  <span className="text-[#0B3D91] font-medium w-20 shrink-0 text-sm font-gothic">
                    {item.year}
                  </span>
                  <p className="text-sm text-[#555] font-gothic">
                    {locale === "en" ? item.eventEn : item.event}
                  </p>
                </motion.div>
              ))}
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
