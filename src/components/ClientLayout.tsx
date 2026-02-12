"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { I18nProvider } from "@/lib/i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Skip loading animation if user prefers reduced motion
    const loadingDuration = mediaQuery.matches ? 0 : 1500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, []);

  // Skip loading screen entirely for reduced motion
  if (prefersReducedMotion) {
    return <I18nProvider>{children}</I18nProvider>;
  }

  return (
    <I18nProvider>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </I18nProvider>
  );
}
