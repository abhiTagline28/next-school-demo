import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { schoolConfig } from "@/config/school.config";
import { facultyData } from "@/data/faculty";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty",
  description: `Meet our experienced and qualified faculty at ${schoolConfig.name}. Expert teachers dedicated to student success.`,
};

export default function FacultyPage(): React.ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Faculty
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Meet our team of dedicated and experienced educators
            </p>
            <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-blue-200">Expert Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">200+</div>
                <div className="text-sm text-blue-200">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-blue-200">Qualified & Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Philosophy */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Teaching Philosophy"
            subtitle="Committed to excellence in education"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={28} />,
                title: "Qualified Educators",
                description: "All our teachers hold relevant degrees and teaching certifications",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Continuous Learning",
                description: "Regular training and professional development programs",
              },
              {
                icon: <Award size={28} />,
                title: "Student-Centric",
                description: "Dedicated to individual attention and student success",
              },
            ].map((item, index) => (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Faculty Members */}
      <Section background="blue">
        <SectionHeader
          title="Meet Our Teachers"
          subtitle="Experienced professionals dedicated to your child's success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((member) => (
            <Card key={member.id} hover>
              <CardContent className="p-6">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                {/* Name & Designation */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold text-sm">
                    {member.designation}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600">{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-green-600" />
                    <span className="text-sm text-gray-600">{member.experience} experience</span>
                  </div>
                </div>

                {/* Subjects */}
                {member.subjects && member.subjects.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                      Subjects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.subjects.map((subject, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Faculty Support Staff */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Support Staff"
            subtitle="Our dedicated team ensuring smooth operations"
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    role: "Administrative Staff",
                    description: "Efficient office team managing admissions, records, and daily operations",
                  },
                  {
                    role: "Lab Assistants",
                    description: "Trained technicians supporting practical learning in science and computer labs",
                  },
                  {
                    role: "Library Staff",
                    description: "Professional librarians maintaining resources and assisting students",
                  },
                  {
                    role: "Medical Staff",
                    description: "Qualified nurse providing first aid and health support",
                  },
                  {
                    role: "Transport Team",
                    description: "Experienced drivers and attendants ensuring safe commute",
                  },
                  {
                    role: "Maintenance Staff",
                    description: "Dedicated team keeping campus clean, safe, and well-maintained",
                  },
                ].map((staff, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{staff.role}</h4>
                      <p className="text-gray-600 text-sm">{staff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
