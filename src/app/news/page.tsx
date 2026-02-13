"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { newsItems, categoryLabels, NewsCategory } from "@/data/news";
import { useI18n } from "@/lib/i18n";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">("all");
  const { t, locale } = useI18n();

  const newsFilters: { value: NewsCategory | "all"; label: { ja: string; en: string } }[] = [
    { value: "all", label: { ja: "すべて", en: "All" } },
    { value: "event", label: { ja: "イベント", en: "Event" } },
    { value: "media", label: { ja: "メディア掲載", en: "Media" } },
    { value: "announcement", label: { ja: "お知らせ", en: "Announcement" } },
    { value: "release", label: { ja: "プレスリリース", en: "Press Release" } },
  ];

  const filteredNews = useMemo(() => {
    if (activeCategory === "all") return newsItems;
    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              {t("news.label")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#333333] mt-4 leading-tight">
              {t("news.title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 md:top-24 z-30 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex gap-2 md:gap-4 py-4 overflow-x-auto scrollbar-hide">
            {newsFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveCategory(filter.value)}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 font-gothic cursor-pointer ${
                  activeCategory === filter.value
                    ? "bg-[#0B3D91] text-white"
                    : "bg-gray-100 text-[#555555] hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                {locale === "en" ? filter.label.en : filter.label.ja}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <Link
                      href={`/news/${item.id}`}
                      className="group block py-8 md:py-10 cursor-pointer"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-8 items-start">
                        {/* Image */}
                        {item.image && (
                          <div className="aspect-[16/9] bg-gray-100 overflow-hidden transition-shadow duration-200 group-hover:shadow-lg">
                            <div
                              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                              style={{ backgroundImage: `url('${item.image}')` }}
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className={item.image ? "" : "md:col-span-2"}>
                          {/* Meta */}
                          <div className="flex items-center gap-4 mb-3">
                            <time className="text-sm text-[#555555] font-gothic">
                              {item.date}
                            </time>
                            <span className="text-xs bg-[#0B3D91]/10 text-[#0B3D91] px-2 py-1 font-gothic">
                              {locale === "en"
                                ? categoryLabels[item.category].en
                                : categoryLabels[item.category].ja}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-lg md:text-xl font-heading text-[#333333] group-hover:text-[#0B3D91] transition-colors duration-200 leading-relaxed">
                            {locale === "en" && item.titleEn ? item.titleEn : item.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-sm text-[#555555] mt-3 line-clamp-2 font-gothic">
                            {locale === "en" && item.excerptEn ? item.excerptEn : item.excerpt}
                          </p>

                          {/* Read more */}
                          <div className="mt-4 flex items-center text-[#0B3D91] text-sm">
                            <span className="font-gothic">{t("news.readMore")}</span>
                            <svg
                              className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredNews.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#555555] font-gothic">
                  {t("news.noNews")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
