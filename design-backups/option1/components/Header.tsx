"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/about", label: "私たちについて", labelEn: "About" },
  { href: "/projects", label: "事業紹介", labelEn: "Projects" },
  { href: "/news", label: "お知らせ", labelEn: "News" },
  { href: "/contact", label: "お問い合わせ", labelEn: "Contact" },
];

const mobileNavItems = [
  { href: "/", label: "ホーム", labelEn: "Home" },
  ...navItems,
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(11,61,145,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/images/logo_miraidukuri.png"
                alt="未来づくりカンパニー"
                width={526}
                height={50}
                className="h-5 md:h-6 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Editorial style */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-gothic tracking-wide cursor-pointer"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      scrolled
                        ? "text-[#1A1A1A] group-hover:text-[#0B3D91]"
                        : "text-[#1A1A1A] group-hover:text-[#0B3D91]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Elegant underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0B3D91] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              {/* Contact button - Accent */}
              <Link
                href="/contact"
                className="ml-2 px-5 py-2.5 text-sm font-gothic tracking-wide border border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-all duration-300 cursor-pointer"
              >
                お問い合わせ
              </Link>
            </nav>

            {/* Hamburger Button - Refined */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-12 h-12 flex lg:hidden flex-col items-center justify-center gap-1.5 cursor-pointer group"
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${
                  isOpen ? "bg-white" : "bg-[#1A1A1A] group-hover:bg-[#0B3D91]"
                }`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${
                  isOpen ? "bg-white" : "bg-[#1A1A1A] group-hover:bg-[#0B3D91]"
                }`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`block w-6 h-[1.5px] transition-colors duration-300 ${
                  isOpen ? "bg-white" : "bg-[#1A1A1A] group-hover:bg-[#0B3D91]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation - Sophisticated dark overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden overflow-hidden"
          >
            {/* Background with gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#061E4A]"
            />

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0B3D91]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C4A35A]/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
                className="text-center space-y-6"
              >
                {mobileNavItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 30 },
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group block cursor-pointer py-2"
                    >
                      <span className="block text-white/40 text-[10px] tracking-[0.4em] uppercase mb-2 font-display transition-colors duration-300 group-hover:text-[#C4A35A]">
                        {item.labelEn}
                      </span>
                      <span className="block text-white text-3xl md:text-4xl font-heading tracking-wide group-hover:text-white/80 transition-all duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Footer info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-0 right-0 text-center"
              >
                <p className="text-white/30 text-[10px] tracking-[0.2em] font-display">
                  MIRAI CREATION COMPANY
                </p>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
