import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "solid" | "outline";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  variant = "solid",
  children,
  href,
  onClick,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "h-12 px-6 border border-solid text-base font-medium cursor-pointer text-center inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 rounded-xl shadow-sm hover:shadow-md";
  
  const variantClasses = {
    solid:
      "bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 active:bg-pink-700 active:border-pink-700 hover:scale-105",
    outline:
      "bg-white text-pink-600 border-pink-300 hover:bg-pink-50 active:bg-pink-100 hover:border-pink-400 hover:text-pink-700",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

