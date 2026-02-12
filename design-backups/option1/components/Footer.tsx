import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "私たちについて", labelEn: "About" },
  { href: "/projects", label: "事業紹介", labelEn: "Projects" },
  { href: "/news", label: "お知らせ", labelEn: "News" },
  { href: "/contact", label: "お問い合わせ", labelEn: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#061E4A] text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91]/20 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#0B3D91]/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20 md:py-28">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Logo & Philosophy - Takes more space */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block mb-8 cursor-pointer transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/images/company-logo-white.png"
                alt="未来づくりカンパニー"
                width={180}
                height={180}
                className="h-16 w-auto object-contain opacity-90"
              />
            </Link>

            <p className="text-white/60 text-sm leading-[2] max-w-sm font-gothic mb-8">
              社会課題を「構造」から捉え、
              <br />
              分断された世界を事業として結び直す
            </p>

            {/* Editorial quote mark */}
            <div className="flex items-start gap-4 mt-8 pt-8 border-t border-white/10">
              <span className="text-5xl font-display text-[#C4A35A]/40 leading-none">"</span>
              <p className="text-white/50 text-xs leading-relaxed font-display italic tracking-wide">
                Reconnecting the divided world
                <br />
                through sustainable business
              </p>
            </div>
          </div>

          {/* Navigation - Elegant vertical list */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/40 font-display">
              Navigation
            </h3>
            <ul className="space-y-5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-4 cursor-pointer"
                  >
                    <span className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-heading">
                      {link.label}
                    </span>
                    <span className="text-[10px] text-white/30 tracking-wider font-display group-hover:text-white/50 transition-colors duration-300">
                      {link.labelEn}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Refined */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/40 font-display">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/70 space-y-3 font-gothic">
              <p className="text-white/40 text-xs tracking-wider">〒107-0052</p>
              <p className="leading-relaxed">
                東京都港区赤坂3-13-4
                <br />
                第3吉田ビル3F
              </p>
              <div className="pt-4 space-y-2">
                <p>
                  <a
                    href="tel:03-6230-9855"
                    className="hover:text-white transition-colors duration-300 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span className="text-white/40 text-xs">Tel</span>
                    <span>03-6230-9855</span>
                  </a>
                </p>
                <p>
                  <span className="text-white/40 text-xs mr-2">Fax</span>
                  <span className="text-white/50">03-6230-9856</span>
                </p>
              </div>
            </address>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar - Minimal */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-display tracking-wider">
            © {new Date().getFullYear()} MIRAI Creation Company Co., Ltd.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-white/20 text-[10px] tracking-[0.2em] font-display">
              CONNECTING THE FUTURE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
