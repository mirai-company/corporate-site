import type { Metadata } from "next";
import { Cormorant_Garamond, Zen_Kaku_Gothic_New, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Elegant serif for display - editorial sophistication
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Modern Japanese sans-serif for headings
const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Clean body text
const notoSansJP = Noto_Sans_JP({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "未来づくりカンパニー | MIRAI Creation Company",
  description: "社会課題を「構造」から捉え、分断された世界を事業として結び直す",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
