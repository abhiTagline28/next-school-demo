import React from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { schoolConfig } from "@/config/school.config";
import { Quote } from "lucide-react";

export const PrincipalMessage: React.FC = () => {
  return (
    <Section background="blue" id="principal">
      <SectionHeader
        title="Principal's Message"
        subtitle="A word from our visionary leader"
      />

      <Card className="max-w-5xl mx-auto">
        <CardContent className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Principal Image */}
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

            {/* Message */}
            <div className="md:col-span-2">
              <Quote className="text-orange-400 mb-4" size={48} />
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {schoolConfig.principal.message}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                  <div>
                    <p className="font-bold text-gray-900">{schoolConfig.principal.name}</p>
                    <p className="text-sm text-gray-600">Principal, {schoolConfig.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};
