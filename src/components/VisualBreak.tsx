"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function VisualBreak() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="relative h-[50vh] md:h-[60vh] overflow-hidden"
    >
      {/* Background Image - Fireworks
          Note: bg-fixed (parallax) breaks on iOS/mobile, so we only use it on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url('/images/fireworks.webp')`,
        }}
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </motion.section>
  );
}
