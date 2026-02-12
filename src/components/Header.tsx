"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { href: "/philosophy", labelKey: "nav.philosophy" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/projects", labelKey: "nav.projects" },
    { href: "/news", labelKey: "nav.news" },
    { href: "/contact", labelKey: "nav.contact" },
  ];

  const mobileNavItems = [
    { href: "/", labelKey: "nav.home" },
    ...navItems,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 cursor-pointer transition-opacity duration-200 hover:opacity-60"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={isHomePage && !scrolled ? "/images/logo_miraidukuri_white.png" : "/images/logo_miraidukuri.png"}
                alt="未来づくりカンパニー"
                width={526}
                height={50}
                className="h-4 md:h-5 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-gothic transition-colors duration-200 tracking-wide cursor-pointer ${
                    isHomePage && !scrolled
                      ? "text-white hover:text-white/70"
                      : "text-[#1A1A1A] hover:text-[#0B3D91]"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              ))}

              {/* Language Toggle */}
              <div className={`flex items-center text-[12px] font-gothic ${
                isHomePage && !scrolled ? "text-white/70" : "text-[#1A1A1A]/50"
              }`}>
                <button
                  onClick={() => setLocale("ja")}
                  className={`px-3 py-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                    locale === "ja"
                      ? isHomePage && !scrolled
                        ? "text-white font-medium"
                        : "text-[#1A1A1A] font-medium"
                      : "hover:opacity-70"
                  }`}
                >
                  JP
                </button>
                <span className="text-current">/</span>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                    locale === "en"
                      ? isHomePage && !scrolled
                        ? "text-white font-medium"
                        : "text-[#1A1A1A] font-medium"
                      : "hover:opacity-70"
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button - 44px touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-11 h-11 flex lg:hidden items-center justify-center cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-3">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-0 left-0 w-full h-[1.5px] ${
                    isOpen || (isHomePage && !scrolled) ? "bg-white" : "bg-[#1A1A1A]"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 ${
                    isOpen || (isHomePage && !scrolled) ? "bg-white" : "bg-[#1A1A1A]"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                    isOpen || (isHomePage && !scrolled) ? "bg-white" : "bg-[#1A1A1A]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0B3D91]"
          >
            <div className="h-full flex flex-col items-center justify-center">
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                }}
                className="space-y-6"
              >
                {mobileNavItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    className="text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl font-heading tracking-wide hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </motion.li>
                ))}

                {/* Mobile Language Toggle */}
                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  className="text-center pt-6"
                >
                  <div className="flex items-center justify-center gap-2 text-white/60 text-lg">
                    <button
                      onClick={() => setLocale("ja")}
                      className={`px-2 transition-colors duration-200 cursor-pointer ${
                        locale === "ja" ? "text-white font-medium" : "hover:text-white/80"
                      }`}
                    >
                      JP
                    </button>
                    <span>/</span>
                    <button
                      onClick={() => setLocale("en")}
                      className={`px-2 transition-colors duration-200 cursor-pointer ${
                        locale === "en" ? "text-white font-medium" : "hover:text-white/80"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
