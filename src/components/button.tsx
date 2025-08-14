import Link from "next/link";

interface ButtonProps {
  buttonText?: string;
  className?: string;
  href?: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({
  buttonText,
  className = "",
  href,
  onClick,
  children,
}: ButtonProps) => {
  return href ? (
    <Link
      href={href}
      className={`rounded-xl font-semibold block cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button type="button" className={`${className}`}>
      {buttonText}
    </button>
  );
};
