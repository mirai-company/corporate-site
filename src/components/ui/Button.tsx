"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-[#0B3D91] hover:bg-white/90",
  secondary:
    "border border-white/40 text-white hover:bg-white/10 hover:border-white/60",
  ghost:
    "text-[#0B3D91] hover:text-[#061E4A]",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide transition-all duration-300 font-gothic font-medium cursor-pointer";

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
