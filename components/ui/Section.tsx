import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue";
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = "white",
  id,
}) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gradient-to-br from-gray-50 to-white",
    blue: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mt-6",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
};
