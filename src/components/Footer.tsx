"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = [
    { href: "/about", labelKey: "footer.links.about" },
    { href: "/projects", labelKey: "footer.links.projects" },
    { href: "/news", labelKey: "footer.links.news" },
    { href: "/contact", labelKey: "footer.links.contact" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container-custom py-16 md:py-20">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-6 cursor-pointer hover:opacity-70 transition-opacity duration-200">
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
          <nav className="flex gap-8 md:gap-12">
            <div>
              <ul className="space-y-1">
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

          {/* Contact */}
          <div>
            <address className="not-italic text-sm text-white/50 space-y-2 font-gothic">
              <p className="text-white/70">東京都港区赤坂3-13-4</p>
              <p>第3吉田ビル3F</p>
              <p className="pt-2">
                <a
                  href="tel:03-6230-9855"
                  className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  03-6230-9855
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-gothic">
            © {new Date().getFullYear()} MIRAI Creation Company
          </p>
        </div>
      </div>
    </footer>
  );
}
