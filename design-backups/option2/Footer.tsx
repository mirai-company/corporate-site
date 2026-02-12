import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container-custom py-16 md:py-20">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-6 cursor-pointer hover:opacity-70 transition-opacity duration-200">
              <span className="text-xl font-heading tracking-wide">
                未来づくりカンパニー
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed font-gothic">
              社会課題を構造から解決し、
              <br />
              持続可能な未来を創造する
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 md:gap-12">
            <div>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-gothic cursor-pointer"
                    >
                      {link.label}
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
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors duration-200 cursor-pointer"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
