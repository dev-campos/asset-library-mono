"use client";

import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  label,
  onClick,
  variant = "primary",
  className,
  icon,
}: ButtonProps) => {
  const base =
    "flex items-center justify-center px-4 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-900 focus:ring-gray-800",
    secondary: "bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-400",
  };

  return (
    <button onClick={onClick} className={cn(base, styles[variant], className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
