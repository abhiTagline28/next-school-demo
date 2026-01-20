import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
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

export const metadata: Metadata = {
  title: "Facilities",
  description: `Infrastructure and facilities at ${schoolConfig.name}. Modern classrooms, labs, library, sports complex, and more.`,
};

const iconMap: Record<string, LucideIcon> = {
  "monitor": Monitor,
  "flask-conical": FlaskConical,
  "library": Library,
  "trophy": Trophy,
  "bus": Bus,
  "utensils": Utensils,
};

export default function FacilitiesPage(): React.ReactElement {
  const additionalFacilities = [
    {
      name: "Medical Room",
      description: "Well-equipped medical room with qualified nurse available during school hours for any medical emergencies",
      icon: "heart",
    },
    {
      name: "CCTV Surveillance",
      description: "Complete campus security with 24/7 CCTV monitoring ensuring safety of students and staff",
      icon: "shield",
    },
    {
      name: "Water Purifiers",
      description: "RO water purifiers installed throughout the campus providing safe drinking water",
      icon: "droplet",
    },
    {
      name: "Playground",
      description: "Spacious outdoor playground with equipment for various sports and physical activities",
      icon: "activity",
    },
    {
      name: "Art & Music Rooms",
      description: "Dedicated spaces for artistic expression with instruments, art supplies, and practice areas",
      icon: "music",
    },
    {
      name: "Auditorium",
      description: "Modern auditorium with seating capacity for hosting events, performances, and assemblies",
      icon: "tv",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Modern infrastructure designed for holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <Section background="white">
        <SectionHeader
          title="Our Infrastructure"
          subtitle="State-of-the-art facilities for comprehensive education"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolConfig.facilities.map((facility, index) => {
            const IconComponent = facility.icon ? iconMap[facility.icon] : Monitor;
            
            return (
              <Card key={index} hover>
                <CardContent className="p-8">
                  <IconBox
                    icon={<IconComponent size={28} />}
                    size="lg"
                    variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "success"}
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
      </Section>

      {/* Additional Facilities */}
      <Section background="blue">
        <SectionHeader
          title="Additional Amenities"
          subtitle="Everything needed for a comfortable learning environment"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFacilities.map((facility, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">
                  {facility.icon === "heart" && "❤️"}
                  {facility.icon === "shield" && "🛡️"}
                  {facility.icon === "droplet" && "💧"}
                  {facility.icon === "activity" && "⚽"}
                  {facility.icon === "music" && "🎵"}
                  {facility.icon === "tv" && "🎭"}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Safety & Security */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Safety & Security"
            subtitle="Your child's safety is our top priority"
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "24/7 CCTV Monitoring",
                    description: "Complete campus surveillance with monitored security systems",
                  },
                  {
                    title: "Controlled Entry & Exit",
                    description: "Strict visitor policies and student pickup protocols",
                  },
                  {
                    title: "Trained Security Staff",
                    description: "Professional security personnel on duty throughout school hours",
                  },
                  {
                    title: "Emergency Preparedness",
                    description: "Regular safety drills and emergency response plans",
                  },
                  {
                    title: "Medical Assistance",
                    description: "Qualified nurse and first aid facilities available",
                  },
                  {
                    title: "GPS-Enabled Transport",
                    description: "Real-time tracking of school buses for parent peace of mind",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Campus Highlights */}
      <Section background="gray">
        <SectionHeader
          title="Campus Highlights"
          subtitle="What makes our campus special"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              metric: "10,000+",
              label: "Sq. Ft. Campus",
              description: "Spacious and green campus",
            },
            {
              metric: "40+",
              label: "Smart Classrooms",
              description: "Air-conditioned with digital boards",
            },
            {
              metric: "10,000+",
              label: "Books in Library",
              description: "Diverse collection for all grades",
            },
          ].map((stat, index) => (
            <Card key={index} hover>
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
