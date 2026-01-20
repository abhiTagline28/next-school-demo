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

      <Card className="max-w-5xl mx-auto hover">
        <CardContent className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Principal Image */}
            <div className="md:col-span-1">
              <div className="relative group">
                {schoolConfig.principal.image ? (
                  <img
                    src={schoolConfig.principal.image}
                    alt={schoolConfig.principal.name}
                    className="w-full rounded-2xl shadow-2xl object-cover aspect-square border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-white">
                    {schoolConfig.principal.name.charAt(0)}
                  </div>
                )}
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {schoolConfig.principal.name}
                </h3>
                <p className="text-gray-600 font-bold">Principal</p>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <div className="inline-flex p-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl mb-4 shadow-lg">
                <Quote className="text-white" size={48} />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  {schoolConfig.principal.message}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900">{schoolConfig.principal.name}</p>
                    <p className="text-sm text-gray-600 font-semibold">Principal, {schoolConfig.name}</p>
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
