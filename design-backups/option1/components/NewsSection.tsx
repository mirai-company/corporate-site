"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const newsItems = [
  {
    id: "1",
    date: "2025.10.14",
    title: "2025年11月2日・滝田洋二郎監督をお迎えしてトークイベントを開催いたします。",
    category: "イベント",
  },
  {
    id: "2",
    date: "2025.09.24",
    title: "株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立しました。",
    category: "プレスリリース",
  },
  {
    id: "3",
    date: "2025.04.02",
    title: "『Anchor』4月号に弊社代表大羽とつまみ枝豆氏の対談記事が記載されました。",
    category: "メディア",
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              News
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#333333] mt-4">
              お知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-sm hover:text-[#072B66] transition-colors duration-200 font-gothic cursor-pointer"
          >
            <span>すべてのお知らせを見る</span>
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
          </Link>
        </motion.div>

        {/* News List */}
        <div className="space-y-0 divide-y divide-gray-200">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col md:flex-row md:items-center gap-4 py-6 hover:bg-white/50 transition-all duration-200 -mx-4 px-4 cursor-pointer"
              >
                {/* Date */}
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <time className="text-sm text-[#555555] font-gothic">
                    {item.date}
                  </time>
                  <span className="text-xs bg-[#0B3D91]/10 text-[#0B3D91] px-2 py-1 font-gothic">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 text-[#333333] group-hover:text-[#0B3D91] transition-colors duration-200 font-gothic">
                  {item.title}
                </h3>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-[#0B3D91] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 hidden md:block"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
