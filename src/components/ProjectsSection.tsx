"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Link from "next/link";
import { projects, domainLabels } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

// Get the 3 newest projects (sorted by year descending, coming soon at end)
const getFeaturedProjects = () => {
  return [...projects]
    .sort((a, b) => {
      // Coming soon projects go to the end
      if (a.comingSoon && !b.comingSoon) return 1;
      if (!a.comingSoon && b.comingSoon) return -1;
      // Otherwise sort by year descending
      return parseInt(b.year) - parseInt(a.year);
    })
    .slice(0, 3);
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = useMemo(() => getFeaturedProjects(), []);
  const { t, locale } = useI18n();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <div>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("projects.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4">
              {t("projects.title")}
            </h2>
          </div>
          <Link
            href="/projects"
            className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-sm tracking-wide hover:text-[#061E4A] transition-colors duration-300 font-gothic"
          >
            <span>{t("projects.viewAll")}</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const domainInfo = domainLabels[project.domain];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#F5F5F5] mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.previewImage || project.image}')` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs tracking-wider font-gothic tabular-nums ${project.comingSoon ? 'text-[#1A1A1A] font-medium' : 'text-[#888]'}`}>
                      {project.comingSoon ? t("projects.comingSoon") : project.year}
                    </span>
                    <span className="text-xs text-[#0B3D91] px-2.5 py-1 bg-[#0B3D91]/5 font-gothic">
                      {locale === "en" ? domainInfo.en : domainInfo.ja}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-[#1A1A1A] group-hover:text-[#0B3D91] transition-colors duration-300">
                    {locale === "en" && project.titleEn ? project.titleEn : project.title}
                  </h3>
                  <p className="text-sm text-[#555] mt-2 font-gothic leading-relaxed">
                    {project.subtitle}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
