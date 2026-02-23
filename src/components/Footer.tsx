"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t, locale } = useI18n();

  const footerLinks = [
    { href: "/about", labelKey: "footer.links.about" },
    { href: "/projects", labelKey: "footer.links.projects" },
    { href: "/news", labelKey: "footer.links.news" },
    { href: "/contact", labelKey: "footer.links.contact" },
  ];

  return (
    <footer role="contentinfo" className="dark-surface bg-[#1A1A1A] text-white">
      <div className="container-custom py-16 md:py-20">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="ホームに戻る" className="inline-block mb-6 cursor-pointer hover:opacity-70 transition-opacity duration-200">
              <Image
                src="/images/companylogowhite.png"
                alt="未来づくりカンパニー"
                width={200}
                height={200}
                className="h-28 md:h-32 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed font-gothic">
              {t("footer.tagline1")}
              <br />
              {t("footer.tagline2")}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="フッターナビゲーション" className="flex gap-8 md:gap-12">
            <div>
              <ul className="space-y-1" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 font-gothic cursor-pointer"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="lg:text-right">
            <address className="not-italic text-sm text-white/50 space-y-3 font-gothic">
              {/* Address */}
              <div>
                <p className="text-white/70">〒107-0052</p>
                <p className="text-white/70">
                  {locale === "en" ? "3-13-4 Akasaka, Minato-ku, Tokyo" : "東京都港区赤坂3-13-4"}
                </p>
                <p>{locale === "en" ? "3F Yoshida Building No. 3" : "第3吉田ビル3F"}</p>
              </div>

              {/* Phone & Fax */}
              <div className="flex flex-col sm:flex-row sm:gap-4 lg:justify-end">
                <p>
                  <span className="text-white/40">TEL: </span>
                  <a
                    href="tel:03-6230-9855"
                    aria-label="電話をかける: 03-6230-9855"
                    className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    03-6230-9855
                  </a>
                </p>
                <p>
                  <span className="text-white/40">FAX: </span>
                  <span className="text-white/70">03-6230-9856</span>
                </p>
              </div>

              {/* Email */}
              <p>
                <span className="text-white/40">E-mail: </span>
                <a
                  href="mailto:info@miraidukuri.co.jp"
                  aria-label="メールを送る: info@miraidukuri.co.jp"
                  className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  info@miraidukuri.co.jp
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-white/30 font-gothic order-2 sm:order-1">
            Copyright © {new Date().getFullYear()} MIRAI Creation Company Co., Ltd.
          </p>

          {/* Social Links & Privacy Policy */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/expmirai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/expmirai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <span className="w-px h-4 bg-white/20" aria-hidden="true" />

            {/* Privacy Policy Link */}
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-white transition-colors duration-200 font-gothic cursor-pointer"
            >
              {locale === "en" ? "Privacy Policy" : "プライバシーポリシー"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
