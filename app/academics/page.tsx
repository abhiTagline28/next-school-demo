import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { schoolConfig } from "@/config/school.config";
import { 
  BookOpen, 
  Award, 
  Users, 
  Target,
  Globe,
  FlaskConical,
  Calculator,
  Languages,
  Palette,
  Music,
  type LucideIcon
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";

export const metadata: Metadata = {
  title: "Academics",
  description: `Academic programs at ${schoolConfig.name}. ${schoolConfig.affiliation} curriculum from ${schoolConfig.academics.grades}.`,
};

interface Subject {
  name: string;
  icon: LucideIcon;
  description: string;
}

export default function AcademicsPage(): React.ReactElement {
  const coreSubjects: Subject[] = [
    {
      name: "Mathematics",
      icon: Calculator,
      description: "Building strong analytical and problem-solving skills",
    },
    {
      name: "Science",
      icon: FlaskConical,
      description: "Exploring the wonders of Physics, Chemistry, and Biology",
    },
    {
      name: "Languages",
      icon: Languages,
      description: "English, Hindi, and regional language proficiency",
    },
    {
      name: "Social Studies",
      icon: Globe,
      description: "Understanding history, geography, and civics",
    },
    {
      name: "Arts & Crafts",
      icon: Palette,
      description: "Nurturing creativity and artistic expression",
    },
    {
      name: "Music & Dance",
      icon: Music,
      description: "Cultural education and performing arts",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Academic Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive {schoolConfig.affiliation} curriculum designed for excellence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge variant="primary" className="text-lg px-6 py-3 bg-white text-blue-900">
                {schoolConfig.academics.grades}
              </Badge>
              {schoolConfig.academics.medium.map((medium) => (
                <Badge key={medium} variant="warning" className="text-lg px-6 py-3">
                  {medium} Medium
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Overview */}
      <Section background="white">
        <SectionHeader
          title="Our Academic Approach"
          subtitle="Building strong foundations for lifelong learning"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-blue-600" size={32} />
                Curriculum Structure
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Section (Nursery - 5th)</h4>
                  <p className="text-gray-600">
                    Focus on foundational skills, play-based learning, and developing love for education. 
                    Activity-based teaching methods ensure joyful learning experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Middle School (6th - 8th)</h4>
                  <p className="text-gray-600">
                    Comprehensive subject introduction with emphasis on conceptual understanding, 
                    practical learning, and developing critical thinking skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secondary (9th - 10th)</h4>
                  <p className="text-gray-600">
                    Board examination preparation with rigorous curriculum, regular assessments, 
                    and personalized attention to ensure excellent results.
                  </p>
                </div>
                {schoolConfig.academics.streams && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Higher Secondary (11th - 12th)</h4>
                    <p className="text-gray-600 mb-2">
                      Specialized stream-based education for career-focused learning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {schoolConfig.academics.streams.map((stream) => (
                        <Badge key={stream} variant="primary">
                          {stream} Stream
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Award className="text-orange-600" size={32} />
                Academic Features
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Experienced and qualified teachers",
                  "Smart classrooms with digital learning",
                  "Regular assessments and feedback",
                  "Personalized attention to each student",
                  "Well-equipped laboratories for practicals",
                  "Extensive library with diverse resources",
                  "Activity-based and experiential learning",
                  "Regular parent-teacher meetings",
                  "Remedial classes for struggling students",
                  "Advanced learning programs for talented students",
                  "Focus on competitive exam preparation",
                  "Life skills and value education",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Subjects */}
      <Section background="blue">
        <SectionHeader
          title="Core Subjects"
          subtitle="Comprehensive education across all disciplines"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSubjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <IconBox
                    icon={<Icon size={28} />}
                    size="lg"
                    variant={index % 2 === 0 ? "primary" : "secondary"}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Teaching Methodology */}
      <Section background="white">
        <SectionHeader
          title="Teaching Methodology"
          subtitle="Modern approaches for effective learning"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Target size={24} />,
              title: "Conceptual Learning",
              description: "Focus on understanding concepts rather than rote memorization. We encourage students to ask questions, explore ideas, and develop deep understanding of subjects.",
            },
            {
              icon: <Users size={24} />,
              title: "Interactive Classes",
              description: "Engaging classroom sessions with discussions, group activities, and collaborative learning. Students actively participate in their education journey.",
            },
            {
              icon: <FlaskConical size={24} />,
              title: "Practical Approach",
              description: "Hands-on learning through experiments, projects, and real-world applications. Laboratory sessions and field trips enhance theoretical knowledge.",
            },
            {
              icon: <Globe size={24} />,
              title: "Digital Integration",
              description: "Smart classrooms with multimedia resources, educational software, and online learning platforms to make education engaging and relevant.",
            },
          ].map((method, index) => (
            <Card key={index} hover>
              <CardContent className="p-8">
                <IconBox
                  icon={method.icon}
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Assessment & Evaluation */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Assessment & Evaluation"
            subtitle="Comprehensive evaluation system"
          />

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="text-blue-600" size={24} />
                    Continuous and Comprehensive Evaluation (CCE)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Following the {schoolConfig.affiliation} evaluation pattern, we assess students through:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Regular class tests and quizzes",
                      "Unit tests and term examinations",
                      "Project work and assignments",
                      "Practical assessments",
                      "Co-curricular activities evaluation",
                      "Personality and behavior assessment",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Progress Reporting</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Detailed progress cards are shared with parents regularly, highlighting academic 
                    performance, areas of improvement, and overall development. Regular parent-teacher 
                    meetings ensure transparent communication about student progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
