import React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { schoolConfig } from "@/config/school.config";
import { 
  Monitor, 
  FlaskConical, 
  Library, 
  Trophy,
  Bus,
  Utensils,
  type LucideIcon
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";

const iconMap: Record<string, LucideIcon> = {
  "monitor": Monitor,
  "flask-conical": FlaskConical,
  "library": Library,
  "trophy": Trophy,
  "bus": Bus,
  "utensils": Utensils,
};

export const FacilitiesPreview: React.FC = () => {
  // Show only first 6 facilities
  const displayFacilities = schoolConfig.facilities.slice(0, 6);

  return (
    <Section background="white">
      <SectionHeader
        title="World-Class Facilities"
        subtitle="Modern infrastructure designed for holistic development"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displayFacilities.map((facility, index) => {
          const IconComponent = facility.icon ? iconMap[facility.icon] : Monitor;
          
          return (
            <Card key={index} hover>
              <CardContent className="p-6">
                <IconBox
                  icon={<IconComponent size={24} />}
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Link href="/facilities">
          <Button variant="primary" size="lg">
            View All Facilities
          </Button>
        </Link>
      </div>
    </Section>
  );
};
