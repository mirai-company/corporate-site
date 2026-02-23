"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

interface Props {
  project: Project;
  domainInfo: { ja: string; en: string; color: string };
  relatedProjects: Project[];
}

export default function ProjectDetailClient({ project, domainInfo, relatedProjects }: Props) {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 md:pt-40 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8 font-gothic">
              <Link href="/" className="text-[#555555] hover:text-[#0B3D91] transition-colors duration-200 cursor-pointer">
                {isEn ? "Home" : "ホーム"}
              </Link>
              <span className="text-[#555555]">/</span>
              <Link
                href="/projects"
                className="text-[#555555] hover:text-[#0B3D91] transition-colors duration-200 cursor-pointer"
              >
                {isEn ? "Projects" : "事業紹介"}
              </Link>
              <span className="text-[#555555]">/</span>
              <span className="text-[#333333]">{isEn && project.titleEn ? project.titleEn : project.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="inline-block text-white text-xs px-3 py-1 tracking-wider font-gothic"
                style={{ backgroundColor: domainInfo.color }}
              >
                {isEn ? domainInfo.en : domainInfo.ja}
              </span>
              <span className={`text-sm font-gothic ${project.comingSoon ? 'text-[#1A1A1A] font-medium' : 'text-[#0B3D91]'}`}>
                {project.comingSoon ? (isEn ? 'Coming Soon' : '近日公開') : project.year}
              </span>
              {project.location && (
                <span className="text-sm text-[#555555] font-gothic">
                  {isEn && project.locationEn ? project.locationEn : project.location}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#333333] leading-tight">
              {isEn && project.titleEn ? project.titleEn : project.title}
            </h1>
            {project.titleEn && (
              <p className="text-lg text-[#555555] mt-2 font-gothic">
                {isEn ? project.title : project.titleEn}
              </p>
            )}
            <p className="text-xl text-[#555555] mt-4 font-gothic">
              {isEn && project.subtitleEn ? project.subtitleEn : project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-heading text-[#333333] mb-6">
                {isEn ? "Project Overview" : "プロジェクト概要"}
              </h2>
              <div className="prose prose-lg max-w-none font-gothic text-[#555555]">
                <p className="leading-relaxed">
                  {isEn
                    ? (project.fullDescriptionEn || project.descriptionEn || project.fullDescription || project.description)
                    : (project.fullDescription || project.description)}
                </p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-heading text-[#333333] mb-6">
                    {isEn ? "Gallery" : "ギャラリー"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] bg-gray-100 overflow-hidden"
                      >
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="sticky top-32 space-y-8">
                {/* Project Info */}
                <div className="bg-[#FAFAFA] p-6">
                  <h3 className="text-sm font-medium text-[#333333] mb-4 font-gothic">
                    {isEn ? "Project Information" : "プロジェクト情報"}
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-[#555555] font-gothic">{isEn ? "Domain" : "事業領域"}</dt>
                      <dd className="text-[#333333] mt-1 font-gothic">
                        {isEn ? domainInfo.en : domainInfo.ja}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#555555] font-gothic">{project.comingSoon ? (isEn ? 'Status' : 'ステータス') : (isEn ? 'Year Started' : '開始年')}</dt>
                      <dd className="text-[#333333] mt-1 font-gothic">
                        {project.comingSoon ? (isEn ? 'Coming Soon' : '近日公開') : project.year}
                      </dd>
                    </div>
                    {project.location && (
                      <div>
                        <dt className="text-[#555555] font-gothic">{isEn ? "Location" : "場所"}</dt>
                        <dd className="text-[#333333] mt-1 font-gothic">
                          {isEn && project.locationEn ? project.locationEn : project.location}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-[#333333] mb-4 font-gothic">
                      {isEn ? "Tags" : "タグ"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(isEn && project.tagsEn ? project.tagsEn : project.tags).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[#0B3D91] bg-[#0B3D91]/10 px-3 py-1.5 font-gothic"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* External Link */}
                {project.externalUrl && (
                  <div className="pt-4">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full text-center border-2 border-[#0B3D91] text-[#0B3D91] px-6 py-4 text-sm hover:bg-[#0B3D91] hover:text-white hover:shadow-lg transition-all duration-200 font-gothic cursor-pointer"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isEn ? "Visit Official Site" : "公式サイトを見る"}
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                )}

                {/* CTA */}
                <div className={project.externalUrl ? "pt-2" : "pt-4"}>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#0B3D91] text-white px-6 py-4 text-sm hover:bg-[#072B66] hover:shadow-lg transition-all duration-200 font-gothic cursor-pointer"
                  >
                    {isEn ? "Inquire About This Project" : "このプロジェクトについて相談する"}
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-[#FAFAFA]">
          <div className="container-custom">
            <h2 className="text-2xl font-heading text-[#333333] mb-8">
              {isEn ? "Related Projects" : "関連プロジェクト"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.id}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-4 transition-shadow duration-200 group-hover:shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${related.image}')` }}
                    />
                  </div>
                  <h3 className="text-lg font-heading text-[#333333] group-hover:text-[#0B3D91] transition-colors duration-200">
                    {isEn && related.titleEn ? related.titleEn : related.title}
                  </h3>
                  <p className="text-sm text-[#555555] mt-1 font-gothic">
                    {isEn && related.subtitleEn ? related.subtitleEn : related.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
