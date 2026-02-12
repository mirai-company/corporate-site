"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const featuredProjects = [
  {
    id: "mito-yell",
    title: "Mito-yell",
    subtitle: "水戸市 地域活性化プロジェクト",
    category: "地域資本",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
  },
  {
    id: "japan-tea-action",
    title: "Japan Tea Action",
    subtitle: "日本茶業体制強化推進協議会",
    category: "生命資本",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2864&auto=format&fit=crop",
    year: "2019",
  },
  {
    id: "jomon-experience",
    title: "JOMON EXPERIENCE",
    subtitle: "十日町市 縄文文化体験プログラム",
    category: "関係資本",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2940&auto=format&fit=crop",
    year: "2022",
  },
];

export default function ProjectsSection() {
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
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-3">
              事業紹介
            </h2>
          </div>
          <Link
            href="/projects"
            className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-xs tracking-wide hover:text-[#061E4A] transition-colors duration-300 font-gothic cursor-pointer"
          >
            <span>すべての事業を見る</span>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] text-[#999] tracking-wider font-gothic">
                      {project.year}
                    </span>
                    <span className="text-[10px] text-[#0B3D91] px-2 py-0.5 border border-[#0B3D91]/20 font-gothic">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-[#1A1A1A] group-hover:text-[#0B3D91] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#666] mt-2 font-gothic">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
