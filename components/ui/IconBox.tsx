import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning";
}

export const IconBox: React.FC<IconBoxProps> = ({
  icon,
  className,
  size = "md",
  variant = "primary",
}) => {
  const sizes = {
    sm: "w-10 h-10 text-base",
    md: "w-14 h-14 text-xl",
    lg: "w-20 h-20 text-3xl",
  };

  const variants = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-orange-100 text-orange-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {icon}
    </div>
  );
};
