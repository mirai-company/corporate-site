"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import { I18nProvider } from "@/lib/i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const SPLASH_SHOWN_KEY = "mirai_splash_shown";

// Critical images to preload before showing homepage
// These are the featured project images shown on homepage
const CRITICAL_IMAGES = [
  "/images/preview-mito.webp",   // Featured project 1
  "/images/preview-JTA.webp",    // Featured project 2
  "/images/preview-mirai.webp",  // Featured project 3
];

// Preload an image and return a promise
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // Don't block on error
    img.src = src;
  });
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show splash on homepage AND only once per session
    const isHomePage = pathname === "/" || pathname === "";
    const hasSeenSplash = sessionStorage.getItem(SPLASH_SHOWN_KEY) === "true";

    // Skip splash if: not homepage, already seen this session, or prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isHomePage || hasSeenSplash || prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Mark splash as shown for this session
    sessionStorage.setItem(SPLASH_SHOWN_KEY, "true");

    // Splash timing:
    // - 2s minimum: allows brand logo to be seen + images to start loading
    // - 4s maximum: timeout for slow connections
    const MIN_DISPLAY_TIME = 2000;
    const MAX_DISPLAY_TIME = 4000;

    // Preload critical images
    const imageLoadPromise = Promise.all(CRITICAL_IMAGES.map(preloadImage));
    const fontLoadPromise = document.fonts.ready;
    const minTimePromise = new Promise(resolve => setTimeout(resolve, MIN_DISPLAY_TIME));
    const maxTimePromise = new Promise(resolve => setTimeout(resolve, MAX_DISPLAY_TIME));

    // Wait for: (fonts + images + min time) OR max time (whichever comes first)
    Promise.race([
      Promise.all([fontLoadPromise, imageLoadPromise, minTimePromise]),
      maxTimePromise
    ]).then(() => {
      // Smooth fade out transition
      setTimeout(() => setIsLoading(false), 100);
    });
  }, [pathname]);

  return (
    <I18nProvider>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </I18nProvider>
  );
}
