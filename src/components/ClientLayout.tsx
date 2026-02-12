"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { I18nProvider } from "@/lib/i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Brand splash timing (based on UX research):
    // - 1.5s minimum: allows brand logo to be seen and remembered
    // - 2.5s maximum: stays under 3s frustration threshold
    // - Luxury brands like Chanel, Prada use 2-3s for brand impact
    const MIN_DISPLAY_TIME = 1500;
    const MAX_DISPLAY_TIME = 2500;

    // Wait for both fonts AND minimum brand time
    const fontLoadPromise = document.fonts.ready;
    const minTimePromise = new Promise(resolve => setTimeout(resolve, MIN_DISPLAY_TIME));
    const maxTimePromise = new Promise(resolve => setTimeout(resolve, MAX_DISPLAY_TIME));

    // Show loading for at least MIN_DISPLAY_TIME, but never exceed MAX_DISPLAY_TIME
    Promise.race([
      Promise.all([fontLoadPromise, minTimePromise]),
      maxTimePromise
    ]).then(() => {
      // Smooth fade out transition
      setTimeout(() => setIsLoading(false), 100);
    });
  }, []);

  return (
    <I18nProvider>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </I18nProvider>
  );
}
