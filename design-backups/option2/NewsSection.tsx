"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const newsItems = [
  {
    id: "1",
    date: "2025.10.14",
    title:
      "2025年11月2日・滝田洋二郎監督をお迎えしてトークイベントを開催いたします。",
    category: "イベント",
  },
  {
    id: "2",
    date: "2025.09.24",
    title:
      "株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立しました。",
    category: "プレスリリース",
  },
  {
    id: "3",
    date: "2025.04.02",
    title:
      "『Anchor』4月号に弊社代表大羽とつまみ枝豆氏の対談記事が記載されました。",
    category: "メディア",
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#FAFAF9]">
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
              News
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-3">
              お知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-xs tracking-wide hover:text-[#061E4A] transition-colors duration-300 font-gothic cursor-pointer"
          >
            <span>すべてのお知らせを見る</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
        </motion.div>

        {/* News List */}
        <div className="border-t border-gray-200">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-6 border-b border-gray-200 hover:bg-white/50 transition-colors duration-300 -mx-4 px-4 cursor-pointer"
              >
                {/* Date & Category */}
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <time className="text-xs text-[#999] font-gothic tabular-nums">
                    {item.date}
                  </time>
                  <span className="text-[10px] text-[#0B3D91] px-2 py-0.5 border border-[#0B3D91]/20 font-gothic">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 text-[#1A1A1A] text-sm group-hover:text-[#0B3D91] transition-colors duration-300 font-gothic leading-relaxed">
                  {item.title}
                </h3>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-[#0B3D91] opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 hidden md:block"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
