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

    // Wait for fonts to load (typically 200-500ms), with 800ms max timeout
    const fontLoadPromise = document.fonts.ready;
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, 800));

    Promise.race([fontLoadPromise, timeoutPromise]).then(() => {
      // Small delay for smooth transition
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
