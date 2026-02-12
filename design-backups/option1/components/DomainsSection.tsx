"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const domains = [
  {
    id: "relational",
    title: "関係資本",
    titleEn: "Relational Capital",
    subtitle: "人・意識",
    description: "観光・体験事業、ファンコミュニティ、文化・教育を通じて、人と人、人と地域の関係性を構築します。",
    color: "#3B82F6", // blue
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "regional",
    title: "地域資本",
    titleEn: "Regional Capital",
    subtitle: "地域・暮らし",
    description: "地方創生2.0、地域ブランド策定、観光×補助金モデルで、地域の持続可能な発展を支援します。",
    color: "#10B981", // green
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "life",
    title: "生命資本",
    titleEn: "Life Capital",
    subtitle: "健康・身体",
    description: "未病・予防、食・歩行・生活設計を通じて、医療費抑制と健康寿命延伸に取り組みます。",
    color: "#F59E0B", // amber
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "circular",
    title: "循環資本",
    titleEn: "Circular Capital",
    subtitle: "自然・エネルギー",
    description: "分散型エネルギー、廃棄物循環、コンテナファームで、環境・防災・自立性向上を実現します。",
    color: "#8B5CF6", // purple
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function DomainsSection() {
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
          className="text-center mb-16"
        >
          <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
            Business Domains
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#333333] mt-4">
            4つの事業領域
          </h2>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto font-gothic">
            社会課題を横断的に解く、4つの再設計領域
          </p>
        </motion.div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={`/projects?domain=${domain.id}`}
                className="group block bg-white overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${domain.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Icon badge */}
                  <div
                    className="absolute top-4 left-4 w-14 h-14 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: domain.color }}
                  >
                    {domain.icon}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-xs tracking-wider font-gothic">
                      {domain.titleEn}
                    </span>
                    <h3 className="text-white text-2xl font-heading mt-1">
                      {domain.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#555555] text-sm leading-relaxed font-gothic">
                    {domain.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#0B3D91] text-sm font-medium">
                    <span className="font-gothic">詳しく見る</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-2"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
