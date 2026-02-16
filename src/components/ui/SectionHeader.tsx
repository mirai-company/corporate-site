"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SectionHeaderProps {
  label: string;
  title: string;
  isInView?: boolean;
  linkHref?: string;
  linkText?: string;
}

export default function SectionHeader({
  label,
  title,
  isInView = true,
  linkHref,
  linkText,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
    >
      <div>
        <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
          {label}
        </span>
        <h2 className="text-3xl md:text-4xl font-heading text-[#1A1A1A] mt-3">
          {title}
        </h2>
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="group mt-6 md:mt-0 inline-flex items-center text-[#0B3D91] text-xs tracking-wide hover:text-[#061E4A] transition-colors duration-300 font-gothic cursor-pointer"
        >
          <span>{linkText}</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </motion.div>
  );
}
