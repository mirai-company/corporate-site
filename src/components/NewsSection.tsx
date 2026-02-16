"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const newsItems = [
  {
    id: "1",
    date: "2025.10.14",
    title: "2025年11月2日・滝田洋二郎監督をお迎えしてトークイベントを開催いたします。",
    titleEn: "Talk event with Director Yojiro Takita on November 2, 2025",
    category: "イベント告知",
    categoryEn: "Announcement",
  },
  {
    id: "2",
    date: "2025.09.24",
    title: "株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立しました。",
    titleEn: "Established 'Capital Development Club' jointly with Light Corporation",
    category: "イベントレポート",
    categoryEn: "Event Report",
  },
  {
    id: "3",
    date: "2025.04.02",
    title: "『Anchor』4月号に弊社代表大羽とつまみ枝豆氏の対談記事が記載されました。",
    titleEn: "Interview with our CEO Oba and Tsumami Edamame featured in Anchor April issue",
    category: "イベントレポート",
    categoryEn: "Event Report",
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useI18n();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("news.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4">
              {t("news.title")}
            </h2>
          </div>
          <Link
            href="/news"
            className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-sm tracking-wide hover:text-[#061E4A] transition-colors duration-300 font-gothic"
          >
            <span>{t("news.viewAll")}</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* News List */}
        <div className="border-t border-[#E5E5E5]">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-6 border-b border-[#E5E5E5] hover:bg-[#FAFAFA] transition-colors duration-300 -mx-4 px-4"
              >
                {/* Date & Category */}
                <div className="flex items-center gap-4 md:w-52 shrink-0">
                  <time className="text-xs text-[#888] font-gothic tabular-nums">
                    {item.date}
                  </time>
                  <span className="text-xs text-[#0B3D91] px-2 py-0.5 bg-[#0B3D91]/5 font-gothic">
                    {locale === "en" ? item.categoryEn : item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 text-[#1A1A1A] text-sm md:text-base group-hover:text-[#0B3D91] transition-colors duration-300 font-gothic leading-[1.8]">
                  {locale === "en" ? item.titleEn : item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
