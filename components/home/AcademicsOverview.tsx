import React from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { schoolConfig } from "@/config/school.config";
import { BookOpen, Globe, Award, ArrowRight } from "lucide-react";

export const AcademicsOverview: React.FC = () => {
  return (
    <Section background="gray">
      <SectionHeader
        title="Academic Excellence"
        subtitle="Comprehensive curriculum designed for all-round development"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left - Key Info */}
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="text-blue-600" size={32} />
              Our Academic Program
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Grade Levels
                </h4>
                <p className="text-xl font-bold text-gray-900">
                  {schoolConfig.academics.grades}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Medium of Instruction
                </h4>
                <div className="flex flex-wrap gap-2">
                  {schoolConfig.academics.medium.map((medium) => (
                    <Badge key={medium} variant="primary">
                      {medium}
                    </Badge>
                  ))}
                </div>
              </div>

              {schoolConfig.academics.streams && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Streams (11th-12th)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {schoolConfig.academics.streams.map((stream) => (
                      <Badge key={stream} variant="secondary">
                        {stream}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Affiliation
                </h4>
                <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Award className="text-orange-500" size={24} />
                  {schoolConfig.affiliation}
                  <span className="text-sm text-gray-500 font-normal">
                    (Code: {schoolConfig.schoolCode})
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right - Key Features */}
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Globe className="text-orange-600" size={32} />
              Why Choose Our Academics?
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                "Experienced and qualified teachers",
                "Interactive smart classroom learning",
                "Regular assessments and feedback",
                "Focus on conceptual understanding",
                "Practical and hands-on learning",
                "Co-curricular activities integration",
                "Individual attention to each student",
                "Latest NCERT curriculum and teaching methods",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/academics">
          <Button variant="primary" size="lg" className="group">
            Explore Academic Programs
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </Link>
      </div>
    </Section>
  );
};
