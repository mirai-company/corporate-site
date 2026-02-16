"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function DomainsSection() {
  const { t, locale } = useI18n();

  const domains = [
    {
      id: "relational",
      titleKey: "domains.relational.title",
      titleEnKey: "domains.relational.titleEn",
      descriptionKey: "domains.relational.description",
    },
    {
      id: "regional",
      titleKey: "domains.regional.title",
      titleEnKey: "domains.regional.titleEn",
      descriptionKey: "domains.regional.description",
    },
    {
      id: "life",
      titleKey: "domains.life.title",
      titleEnKey: "domains.life.titleEn",
      descriptionKey: "domains.life.description",
    },
    {
      id: "circular",
      titleKey: "domains.circular.title",
      titleEnKey: "domains.circular.titleEn",
      descriptionKey: "domains.circular.description",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container-custom">
        {/* Section Header - No animation, visible immediately */}
        <div className="mb-16">
          <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
            {t("domains.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-4">
            {t("domains.title")}
          </h2>
          <p className="text-[#555] mt-4 max-w-xl font-gothic text-sm md:text-base leading-relaxed">
            {t("domains.description")}
          </p>
        </div>

        {/* Domain Cards - Clean 2x2 Grid, no fade animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={`/projects?domain=${domain.id}`}
              className="group block bg-white p-6 sm:p-8 md:p-10 border border-[#E5E5E5] hover:border-[#0B3D91]/30 hover:shadow-sm transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className="text-xs text-[#888] tracking-[0.15em] uppercase font-gothic">
                    {t(domain.titleEnKey)}
                  </span>
                  <h3 className="text-2xl font-heading text-[#1A1A1A] mt-2 mb-4 group-hover:text-[#0B3D91] transition-colors duration-300">
                    {locale === "ja" ? t(domain.titleKey) : t(domain.titleEnKey)}
                  </h3>
                  <p className="text-sm text-[#555] leading-[1.9] font-gothic">
                    {t(domain.descriptionKey)}
                  </p>
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center text-[#888] group-hover:text-[#0B3D91] transition-colors duration-300">
                <span className="text-xs tracking-wide font-gothic">{t("domains.viewProjects")}</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
