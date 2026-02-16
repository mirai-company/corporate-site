"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function PhilosophyTeaser() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Label */}
          <div>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              {t("philosophy.label")}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-heading text-[#1A1A1A] mt-4 leading-[1.2]">
            {t("philosophy.headline1")}
            <br />
            {t("philosophy.headline2")}
          </h2>

          {/* Brief Summary */}
          <p className="text-base md:text-lg text-[#555] leading-[2] font-gothic mt-8 max-w-2xl">
            {t("philosophy.summary1")}
            <br />
            {t("philosophy.summary2")}
          </p>

          {/* Link to Philosophy */}
          <div className="mt-10">
            <Link
              href="/philosophy"
              className="group inline-flex items-center gap-2 text-[#0B3D91] text-sm font-gothic font-medium hover:gap-3 transition-all duration-300"
            >
              <span>{t("philosophy.link")}</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
