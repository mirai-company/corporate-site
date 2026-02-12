"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NewsItem } from "@/data/news";

interface Props {
  newsItem: NewsItem;
  otherNews: NewsItem[];
}

export default function NewsDetailClient({ newsItem, otherNews }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8 font-gothic">
              <Link href="/" className="text-[#555555] hover:text-[#0B3D91] transition-colors duration-200 cursor-pointer">
                ホーム
              </Link>
              <span className="text-[#555555]">/</span>
              <Link
                href="/news"
                className="text-[#555555] hover:text-[#0B3D91] transition-colors duration-200 cursor-pointer"
              >
                お知らせ
              </Link>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <time className="text-sm text-[#0B3D91] font-gothic">
                {newsItem.date}
              </time>
              <span className="text-xs bg-[#0B3D91]/10 text-[#0B3D91] px-2 py-1 font-gothic">
                {newsItem.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-[#333333] leading-relaxed">
              {newsItem.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {newsItem.image && (
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl aspect-[16/9] bg-gray-100 overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${newsItem.image}')` }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <div className="prose prose-lg max-w-none font-gothic text-[#555555]">
              {(newsItem.content || newsItem.excerpt).split("\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news"
                className="group inline-flex items-center text-[#0B3D91] text-sm hover:text-[#072B66] transition-colors duration-200 font-gothic cursor-pointer"
              >
                <svg
                  className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span>お知らせ一覧に戻る</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other News */}
      {otherNews.length > 0 && (
        <section className="section-padding bg-[#FAFAFA]">
          <div className="container-custom">
            <h2 className="text-2xl font-heading text-[#333333] mb-8">
              その他のお知らせ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group block bg-white p-6 cursor-pointer transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs text-[#555555] font-gothic">
                      {item.date}
                    </time>
                    <span className="text-xs bg-[#0B3D91]/10 text-[#0B3D91] px-2 py-0.5 font-gothic">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-heading text-[#333333] group-hover:text-[#0B3D91] transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
