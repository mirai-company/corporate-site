"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { projects, domainLabels, ProjectDomain } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get("domain") as ProjectDomain | null;
  const [activeDomain, setActiveDomain] = useState<ProjectDomain | "all">(
    initialDomain || "all"
  );
  const { t, locale } = useI18n();

  const domainFilters: { value: ProjectDomain | "all"; labelKey: string }[] = [
    { value: "all", labelKey: "projects.filter.all" },
    { value: "relational", labelKey: "projects.filter.relational" },
    { value: "regional", labelKey: "projects.filter.regional" },
    { value: "life", labelKey: "projects.filter.life" },
    { value: "circular", labelKey: "projects.filter.circular" },
  ];

  const filteredProjects = useMemo(() => {
    const filtered = activeDomain === "all" ? projects : projects.filter((p) => p.domain === activeDomain);
    // Sort by year descending (newest first), but coming soon projects go to the end
    return [...filtered].sort((a, b) => {
      // Coming soon projects go to the end
      if (a.comingSoon && !b.comingSoon) return 1;
      if (!a.comingSoon && b.comingSoon) return -1;
      // Otherwise sort by year descending
      return parseInt(b.year) - parseInt(a.year);
    });
  }, [activeDomain]);

  return (
    <>
      {/* Filters */}
      <section className="sticky top-20 md:top-24 z-30 bg-white border-b border-[#E5E5E5]">
        <div className="container-custom">
          <div className="flex gap-2 md:gap-4 py-4 overflow-x-auto scrollbar-hide">
            {domainFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveDomain(filter.value)}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 font-gothic cursor-pointer ${
                  activeDomain === filter.value
                    ? "bg-[#0B3D91] text-white"
                    : "bg-[#F5F5F5] text-[#555] hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const domainInfo = domainLabels[project.domain];
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="group block cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5] mb-4 transition-shadow duration-200 group-hover:shadow-lg">
                        <Image
                          src={project.previewImage || project.image}
                          alt={locale === "en" && project.titleEn ? project.titleEn : project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading={index < 6 ? "eager" : "lazy"}
                        />
                        {/* Domain badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span
                            className="inline-block text-white text-xs px-3 py-1 tracking-wider font-gothic"
                            style={{ backgroundColor: domainInfo.color }}
                          >
                            {locale === "en" ? domainInfo.en : domainInfo.ja}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs tracking-wider font-gothic ${project.comingSoon ? 'text-[#1A1A1A] font-medium' : 'text-[#0B3D91]'}`}>
                            {project.comingSoon ? t("projects.comingSoon") : project.year}
                          </span>
                          {project.location && (
                            <span className="text-xs text-[#555] font-gothic">
                              {locale === "en" && project.locationEn ? project.locationEn : project.location}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-heading text-[#1A1A1A] group-hover:text-[#0B3D91] transition-colors duration-200">
                          {locale === "en" && project.titleEn ? project.titleEn : project.title}
                        </h3>
                        <p className="text-sm text-[#555] mt-2 font-gothic">
                          {locale === "en" && project.subtitleEn ? project.subtitleEn : project.subtitle}
                        </p>
                        <p className="text-sm text-[#555] mt-3 line-clamp-2 font-gothic">
                          {locale === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                        </p>

                        {/* Tags */}
                        {project.tags && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {(locale === "en" && project.tagsEn ? project.tagsEn : project.tags).slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-[#0B3D91] bg-[#0B3D91]/10 px-2 py-1 font-gothic"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#555] font-gothic">
                {t("projects.noProjects")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProjectsPage() {
  const { t } = useI18n();

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
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              {t("projects.pageTitle")}
            </h1>
            <p className="text-[#555] mt-6 max-w-2xl font-gothic">
              {t("projects.pageDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 text-center">{t("projects.loading")}</div>}>
        <ProjectsContent />
      </Suspense>
    </>
  );
}
