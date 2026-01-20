import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { schoolConfig } from "@/config/school.config";
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  TrendingUp,
  BookOpen,
  Quote
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${schoolConfig.name} - Our history, mission, vision, and values. Established in ${schoolConfig.established}.`,
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About {schoolConfig.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100">
              {schoolConfig.tagline}
            </p>
            <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-4xl font-bold text-orange-400">
                  {schoolConfig.established}
                </div>
                <div className="text-base text-blue-200">Established</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400">
                  {new Date().getFullYear() - schoolConfig.established}+
                </div>
                <div className="text-base text-blue-200">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">
                  {schoolConfig.affiliation}
                </div>
                <div className="text-sm text-blue-200">Affiliated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Story"
            subtitle="A legacy of educational excellence"
          />
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in <strong>{schoolConfig.established}</strong>, {schoolConfig.name} has 
                  been a beacon of quality education in {schoolConfig.seo.location.city}, 
                  {schoolConfig.seo.location.state}. For over {new Date().getFullYear() - schoolConfig.established} years, 
                  we have been committed to nurturing young minds and building future leaders.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a proud {schoolConfig.affiliation}-affiliated institution (School Code: {schoolConfig.schoolCode}), 
                  we follow a comprehensive curriculum that balances academic rigor with holistic development. 
                  Our journey has been marked by consistent excellence in board examinations, co-curricular achievements, 
                  and the success of our alumni.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of {schoolConfig.seo.location.locality}, we serve families across 
                  {schoolConfig.seo.location.city}, providing a safe, nurturing, and stimulating environment 
                  where students can discover their potential and grow into responsible global citizens.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section background="blue">
        <SectionHeader
          title="Our Guiding Principles"
          subtitle="What drives us forward"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card hover>
            <CardContent className="p-8 text-center">
              <IconBox
                icon={<Target size={32} />}
                size="lg"
                variant="primary"
                className="mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, 
                and values needed to excel in academics and become responsible citizens who 
                contribute positively to society.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card hover>
            <CardContent className="p-8 text-center">
              <IconBox
                icon={<Eye size={32} />}
                size="lg"
                variant="secondary"
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as a leading educational institution that nurtures creative, 
                compassionate, and confident individuals who are prepared to face global challenges 
                with integrity and excellence.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card hover>
            <CardContent className="p-8 text-center">
              <IconBox
                icon={<Heart size={32} />}
                size="lg"
                variant="success"
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Excellence in all endeavors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Integrity and honesty
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Respect for diversity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Innovation and creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Compassion and empathy
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <SectionHeader
          title="Why Choose Us?"
          subtitle="What makes us stand out"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users size={24} />,
              title: "Experienced Faculty",
              description: "Highly qualified and dedicated teachers with years of teaching experience",
            },
            {
              icon: <Award size={24} />,
              title: "Academic Excellence",
              description: "Consistent track record of outstanding board examination results",
            },
            {
              icon: <TrendingUp size={24} />,
              title: "Holistic Development",
              description: "Focus on academics, sports, arts, and character building",
            },
            {
              icon: <BookOpen size={24} />,
              title: "Modern Curriculum",
              description: "Latest NCERT syllabus with innovative teaching methodologies",
            },
            {
              icon: <Target size={24} />,
              title: "Individual Attention",
              description: "Small class sizes ensuring personalized learning for every student",
            },
            {
              icon: <Heart size={24} />,
              title: "Safe Environment",
              description: "Secure campus with CCTV surveillance and trained staff",
            },
          ].map((item, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <IconBox
                  icon={item.icon}
                  variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "success"}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Principal's Message */}
      <Section background="gray" id="principal">
        <SectionHeader
          title="Principal's Message"
          subtitle="A word from our visionary leader"
        />

        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative">
                  {schoolConfig.principal.image ? (
                    <img
                      src={schoolConfig.principal.image}
                      alt={schoolConfig.principal.name}
                      className="w-full rounded-xl shadow-lg object-cover aspect-square"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                      {schoolConfig.principal.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {schoolConfig.principal.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">Principal</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <Quote className="text-orange-400 mb-4" size={48} />
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-xl">
                    {schoolConfig.principal.message}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                    <div>
                      <p className="font-bold text-gray-900">{schoolConfig.principal.name}</p>
                      <p className="text-base text-gray-600">Principal, {schoolConfig.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
