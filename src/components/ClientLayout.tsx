"use client";

import { I18nProvider } from "@/lib/i18n";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <I18nProvider>
      {children}
    </I18nProvider>
  );
}
