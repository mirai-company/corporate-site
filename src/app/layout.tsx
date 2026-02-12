import type { Metadata } from "next";
import { Cormorant_Garamond, Zen_Kaku_Gothic_New, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

// Elegant serif for display - editorial sophistication
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap", // Show text immediately with fallback font
});

// Modern Japanese sans-serif for headings
const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

// Clean body text
const notoSansJP = Noto_Sans_JP({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miraidukuri.co.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "未来づくりカンパニー | MIRAI Creation Company",
    template: "%s | 未来づくりカンパニー",
  },
  description: "社会課題を「構造」から捉え、分断された世界を事業として結び直す。関係資本・地域資本・生命資本・循環資本の4つの領域で、持続可能な未来を創造します。",
  keywords: ["未来づくりカンパニー", "MIRAI Creation Company", "社会課題", "地域創生", "持続可能", "SDGs", "ソーシャルビジネス"],
  authors: [{ name: "株式会社未来づくりカンパニー" }],
  creator: "株式会社未来づくりカンパニー",
  publisher: "株式会社未来づくりカンパニー",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "未来づくりカンパニー",
    title: "未来づくりカンパニー | MIRAI Creation Company",
    description: "社会課題を「構造」から捉え、分断された世界を事業として結び直す",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "未来づくりカンパニー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "未来づくりカンパニー | MIRAI Creation Company",
    description: "社会課題を「構造」から捉え、分断された世界を事業として結び直す",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cormorant.variable} ${zenKakuGothic.variable} ${notoSansJP.variable} antialiased`}
      >
        <ClientLayout>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#0B3D91] focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:rounded"
          >
            メインコンテンツへスキップ
          </a>
          <Header />
          <main id="main-content" role="main">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
