import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "solid" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  children: ReactNode;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function Button({
  variant = "solid",
  size = "default",
  children,
  href,
  onClick,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 rounded-xl font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    solid:
      "bg-purple-600 border border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 active:bg-purple-800 active:border-purple-800 hover:scale-105 shadow-sm hover:shadow-md",
    outline:
      "bg-white text-purple-600 border border-purple-300 hover:bg-purple-50 active:bg-purple-100 hover:border-purple-400 hover:text-purple-700 shadow-sm",
    ghost:
      "hover:bg-gray-100 hover:text-gray-900 text-gray-600",
    destructive:
      "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300 hover:text-red-700 shadow-sm",
  };

  const sizeClasses = {
    default: "h-12 px-6 text-base",
    sm: "h-9 px-3 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10",
  };

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

