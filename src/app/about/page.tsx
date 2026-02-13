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
    year: "2002-2006",
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

const ceoMedia = [
  {
    type: "magazine" as const,
    title: "生涯活躍のまち 創刊号",
    titleEn: "Lifelong Active Community Magazine (Inaugural Issue)",
    description: "「持続的に暮らしくみで、未来を楽しくする」特集記事掲載",
    descriptionEn: "Featured article on 'Creating sustainable communities for an enjoyable future'",
    link: "https://miraidukuri.co.jp/38xp7a/wp-content/themes/mirai-custom/images/media.pdf",
    year: "2018年8月",
  },
  {
    type: "book" as const,
    title: "地域が稼ぐ観光",
    titleEn: "Tourism That Profits Regions",
    description: "ポストコロナ時代のトレンドをイチ早くとらえた観光書籍",
    descriptionEn: "A tourism book that captures post-COVID trends ahead of its time",
    link: "https://www.amazon.co.jp/%E5%9C%B0%E5%9F%9F%E3%81%8C%E7%A8%BC%E3%81%90%E8%A6%B3%E5%85%89-%E5%A4%A7%E7%BE%BD%E6%98%AD%E4%BB%81/dp/488335444X/ref=sr_1_1?ie=UTF8&qid=1537336452&sr=8-1&keywords=%E5%9C%B0%E5%9F%9F%E3%81%8C%E7%A8%BC%E3%81%90%E8%A6%B3%E5%85%89",
  },
  {
    type: "online" as const,
    title: "カラふる",
    titleEn: "Colorfuru",
    description: "「ニッポンの未来づくり考察」連載コラム",
    descriptionEn: "'Japan's Future-Building Considerations' column series",
    link: "https://colorfuru.jp/tag/%E3%83%8B%E3%83%83%E3%83%9D%E3%83%B3%E3%81%AE%E6%9C%AA%E6%9D%A5%E3%81%A5%E3%81%8F%E3%82%8A%E8%80%83%E5%AF%9F",
  },
  {
    type: "lecture" as const,
    title: "観光総合研究所公開講座",
    titleEn: "Tourism Research Institute Public Lecture",
    description: "第16回公開講座「ポストコロナ時代の観光の在り方」",
    descriptionEn: "16th Public Lecture: 'The Future of Tourism in the Post-COVID Era'",
    link: "https://miraidukuri.co.jp/38xp7a/wp-content/themes/mirai-custom/images/20211125_kankosoken.pdf",
    year: "2021年11月25日",
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
          <SectionFade className="mt-16">
            <h3 className="text-lg font-heading text-[#1A1A1A] mb-8 tracking-wide">
              {t("about.ceo.timeline")}
            </h3>
            <div className="border-t border-[#E5E5E5]">
              {ceoTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-4 border-b border-[#E5E5E5]"
                >
                  <span className={`text-[#0B3D91] text-sm font-gothic tabular-nums ${item.year === "2018" ? "font-bold" : ""}`}>
                    {item.year}
                  </span>
                  <p className="text-sm text-[#333] font-gothic leading-relaxed">
                    {locale === "en" ? item.eventEn : item.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionFade>

          {/* CEO Media Information */}
          <SectionFade className="mt-16">
            <h3 className="text-lg font-heading text-[#1A1A1A] mb-8 tracking-wide">
              {locale === "en" ? "Media Information" : "メディア情報"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ceoMedia.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-[#FAFAFA] p-5 border border-[#E5E5E5] hover:border-[#0B3D91]/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-[#0B3D91]/10 flex items-center justify-center shrink-0">
                      {item.type === "book" && (
                        <svg className="w-5 h-5 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {item.type === "magazine" && (
                        <svg className="w-5 h-5 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      )}
                      {item.type === "online" && (
                        <svg className="w-5 h-5 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )}
                      {item.type === "lecture" && (
                        <svg className="w-5 h-5 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {item.year && (
                          <span className="text-xs text-[#0B3D91] font-gothic">{item.year}</span>
                        )}
                        <span className="text-xs text-[#999] font-gothic">
                          {item.type === "book" && (locale === "en" ? "Book" : "書籍")}
                          {item.type === "magazine" && (locale === "en" ? "Magazine" : "雑誌")}
                          {item.type === "online" && (locale === "en" ? "Online" : "ウェブ")}
                          {item.type === "lecture" && (locale === "en" ? "Lecture" : "講演")}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-[#1A1A1A] font-gothic leading-snug">
                        {locale === "en" ? item.titleEn : item.title}
                      </h4>
                      <p className="text-xs text-[#555] mt-1 font-gothic">
                        {locale === "en" ? item.descriptionEn : item.description}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#0B3D91] mt-2 font-gothic hover:underline"
                        >
                          <span>{locale === "en" ? "View" : "詳細"}</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
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
