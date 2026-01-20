import React from "react";
import { 
  Award, 
  Users, 
  GraduationCap, 
  Trophy,
  BookOpen,
  Target,
  type LucideIcon
} from "lucide-react";
import { schoolConfig } from "@/config/school.config";
import { IconBox } from "@/components/ui/IconBox";

const iconMap: Record<string, LucideIcon> = {
  "award": Award,
  "users": Users,
  "graduation-cap": GraduationCap,
  "trophy": Trophy,
  "book-open": BookOpen,
  "target": Target,
};

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 bg-white relative -mt-20 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolConfig.highlights.map((highlight, index) => {
            const IconComponent = highlight.icon ? iconMap[highlight.icon] : Award;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <IconBox
                  icon={<IconComponent size={28} />}
                  size="lg"
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  className="mx-auto mb-4"
                />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {highlight.value}
                </div>
                <div className="text-gray-600 font-semibold">
                  {highlight.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
