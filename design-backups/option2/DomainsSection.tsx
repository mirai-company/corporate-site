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
    description:
      "観光・体験事業、ファンコミュニティ、文化・教育を通じて、人と人、人と地域の関係性を構築します。",
    color: "#0B3D91",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "regional",
    title: "地域資本",
    titleEn: "Regional Capital",
    subtitle: "地域・暮らし",
    description:
      "地方創生2.0、地域ブランド策定、観光×補助金モデルで、地域の持続可能な発展を支援します。",
    color: "#0B3D91",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "life",
    title: "生命資本",
    titleEn: "Life Capital",
    subtitle: "健康・身体",
    description:
      "未病・予防、食・歩行・生活設計を通じて、医療費抑制と健康寿命延伸に取り組みます。",
    color: "#0B3D91",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "circular",
    title: "循環資本",
    titleEn: "Circular Capital",
    subtitle: "自然・エネルギー",
    description:
      "分散型エネルギー、廃棄物循環、コンテナファームで、環境・防災・自立性向上を実現します。",
    color: "#0B3D91",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function DomainsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
            Business Domains
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-3">
            4つの事業領域
          </h2>
          <p className="text-[#666] mt-4 max-w-xl font-gothic text-sm">
            社会課題を横断的に解く、4つの再設計領域
          </p>
        </motion.div>

        {/* Domain Cards - Clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects?domain=${domain.id}`}
                className="group block bg-white p-8 md:p-10 cursor-pointer transition-colors duration-300 hover:bg-[#FAFAF9]"
              >
                {/* Number + Title */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[10px] text-[#999] tracking-[0.15em] uppercase font-gothic">
                      {domain.titleEn}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading text-[#1A1A1A] mt-2 group-hover:text-[#0B3D91] transition-colors duration-300">
                      {domain.title}
                    </h3>
                  </div>
                  <span className="text-[#E5E5E5] text-5xl font-heading leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#666] text-sm leading-relaxed font-gothic mb-6">
                  {domain.description}
                </p>

                {/* Minimal arrow link */}
                <div className="flex items-center text-[#0B3D91] text-xs tracking-wide font-gothic">
                  <span>View projects</span>
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
