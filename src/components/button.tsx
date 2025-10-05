"use client";

import Link from "next/link";

interface ButtonProps {
  buttonText?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  buttonText,
  className = "",
  href,
  onClick,
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`block rounded-xl px-4 py-2 font-semibold transition-colors duration-200 ${className}`}
      >
        {children ?? buttonText}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl px-4 py-2 font-semibold transition-colors duration-200 ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"} ${className}`}
    >
      {children ?? buttonText}
    </button>
  );
};
