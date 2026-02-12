"use client";

import { I18nProvider } from "@/lib/i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // Removed artificial loading delay - static sites don't need loading screens
  // The HTML is pre-rendered, so content should appear immediately
  return <I18nProvider>{children}</I18nProvider>;
}
