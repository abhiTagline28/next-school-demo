import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { schoolConfig } from "@/config/school.config";
import { GraduationCap, Award, Users, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            {schoolConfig.admissions.isOpen && (
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Admissions Open for {schoolConfig.admissions.academicYear}
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to
              <span className="block text-orange-400 mt-2">
                {schoolConfig.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              {schoolConfig.tagline}
            </p>

            {/* Description */}
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Providing quality {schoolConfig.affiliation} education in {schoolConfig.seo.location.locality}, 
              {schoolConfig.seo.location.city} since {schoolConfig.established}. 
              Building future leaders with values, knowledge, and character.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Award className="text-orange-400" size={24} />
                <div>
                  <div className="text-2xl font-bold">{new Date().getFullYear() - schoolConfig.established}+</div>
                  <div className="text-sm text-blue-200">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-orange-400" size={24} />
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-orange-400" size={24} />
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-blue-200">Results</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto group"
                >
                  Apply for Admission
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Affiliation Badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="text-sm font-semibold">{schoolConfig.affiliation} Affiliated</span>
                <span className="text-xs text-blue-200 ml-2">Code: {schoolConfig.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              {/* Main Visual - Can be replaced with actual image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-400 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                    <GraduationCap size={48} className="mx-auto mb-3" />
                    <div className="text-2xl font-bold">Quality</div>
                    <div className="text-sm">Education</div>
                  </div>
                  <div className="bg-blue-600 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                    <Award size={48} className="mx-auto mb-3" />
                    <div className="text-2xl font-bold">Excellence</div>
                    <div className="text-sm">Academic</div>
                  </div>
                  <div className="bg-blue-600 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                    <Users size={48} className="mx-auto mb-3" />
                    <div className="text-2xl font-bold">Expert</div>
                    <div className="text-sm">Faculty</div>
                  </div>
                  <div className="bg-orange-400 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🏆</div>
                    <div className="text-2xl font-bold">Top</div>
                    <div className="text-sm">Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
