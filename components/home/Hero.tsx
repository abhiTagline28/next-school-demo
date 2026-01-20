import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { schoolConfig } from "@/config/school.config";
import { GraduationCap, Award, Users, ArrowRight } from "lucide-react";
import { AiCircuitBackground } from "@/components/home/AiCircuitBackground";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-gradient opacity-90"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* AI Background Animation */}
      <AiCircuitBackground className="absolute inset-0 z-0 pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            {schoolConfig.admissions.isOpen && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-gray-900 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-900"></span>
                </span>
                Admissions Open for {schoolConfig.admissions.academicYear}
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent mt-2">
                {schoolConfig.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-yellow-100 mb-4 font-semibold">
              {schoolConfig.tagline}
            </p>

            {/* Description */}
            <p className="text-lg text-purple-100 mb-8 leading-relaxed">
              Providing quality {schoolConfig.affiliation} education in {schoolConfig.seo.location.locality}, 
              {schoolConfig.seo.location.city} since {schoolConfig.established}. 
              Building future leaders with values, knowledge, and character.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                  <Award className="text-gray-900" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{new Date().getFullYear() - schoolConfig.established}+</div>
                  <div className="text-sm text-yellow-200 font-medium">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-sm text-yellow-200 font-medium">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-2 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-yellow-200 font-medium">Results</div>
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
              <div className="glass bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 shadow-xl">
                <span className="text-sm font-bold text-white">{schoolConfig.affiliation} Affiliated</span>
                <span className="text-xs text-yellow-200 ml-2 font-medium">Code: {schoolConfig.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Visual - Can be replaced with actual image */}
              <div className="relative glass bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl">
                    <GraduationCap size={48} className="mx-auto mb-3 text-gray-900" />
                    <div className="text-2xl font-bold text-gray-900">Quality</div>
                    <div className="text-sm text-gray-800 font-semibold">Education</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-center transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-xl">
                    <Award size={48} className="mx-auto mb-3 text-white" />
                    <div className="text-2xl font-bold text-white">Excellence</div>
                    <div className="text-sm text-purple-100 font-semibold">Academic</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl">
                    <Users size={48} className="mx-auto mb-3 text-white" />
                    <div className="text-2xl font-bold text-white">Expert</div>
                    <div className="text-sm text-pink-100 font-semibold">Faculty</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-6 text-center transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-xl">
                    <div className="text-4xl mb-3">🏆</div>
                    <div className="text-2xl font-bold text-white">Top</div>
                    <div className="text-sm text-cyan-100 font-semibold">Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
