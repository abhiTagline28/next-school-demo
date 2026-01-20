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
            const gradients = [
              "from-indigo-500 to-purple-600",
              "from-orange-500 to-pink-600",
              "from-cyan-500 to-blue-600",
              "from-yellow-400 to-orange-500",
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-3 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-2xl group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {highlight.value}
                </div>
                <div className="text-gray-700 font-bold">
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
