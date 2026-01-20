"use client";

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
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20 animate-grid-move">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs with Morphing */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animate-morph" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animate-morph" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional Floating Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-wave"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-wave" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Rotating Gradient Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-orange-500/30 rounded-full filter blur-3xl animate-rotate-bg"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-300/30 to-purple-500/30 rounded-full filter blur-3xl animate-rotate-bg" style={{ animationDirection: "reverse", animationDuration: "25s" }}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-particle animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>

      {/* AI Background Animation */}
      <AiCircuitBackground className="absolute inset-0 z-0 pointer-events-none opacity-30 animate-move-bg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            {schoolConfig.admissions.isOpen && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-gray-900 px-6 py-3 rounded-full text-base font-bold mb-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 animate-bounce-in animate-glow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-900"></span>
                </span>
                Admissions Open for {schoolConfig.admissions.academicYear}
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animate-delay-200">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent mt-2 animate-fade-in-up animate-delay-300">
                {schoolConfig.name}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-yellow-100 mb-4 font-semibold animate-fade-in-up animate-delay-400">
              {schoolConfig.tagline}
            </p>

            {/* Description */}
            <p className="text-xl text-purple-100 mb-8 leading-relaxed animate-fade-in-up animate-delay-500">
              Providing quality {schoolConfig.affiliation} education in {schoolConfig.seo.location.locality}, 
              {schoolConfig.seo.location.city} since {schoolConfig.established}. 
              Building future leaders with values, knowledge, and character.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-1 animate-scale-in animate-delay-600 group">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-gray-900 group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{new Date().getFullYear() - schoolConfig.established}+</div>
                  <div className="text-sm text-yellow-200 font-medium">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-1 animate-scale-in animate-delay-700 group">
                <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">1000+</div>
                  <div className="text-sm text-yellow-200 font-medium">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-1 animate-scale-in animate-delay-800 group">
                <div className="p-2 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white group-hover:rotate-12 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-sm text-yellow-200 font-medium">Results</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-600">
              <Link href="/admissions" className="group/button">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto group animate-scale-in animate-delay-700"
                >
                  Apply for Admission
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-all duration-300 group-hover:scale-110" size={20} />
                </Button>
              </Link>
              <Link href="/about" className="group/button">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-blue-900 animate-scale-in animate-delay-800"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Affiliation Badge */}
            <div className="mt-8 flex items-center gap-3 animate-fade-in animate-delay-900">
              <div className="glass bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/30 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <span className="text-sm font-bold text-white">{schoolConfig.affiliation} Affiliated</span>
                <span className="text-xs text-yellow-200 ml-2 font-medium">Code: {schoolConfig.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="hidden lg:block">
            <div className="relative animate-fade-in-right animate-delay-400">
              {/* Main Visual - Can be replaced with actual image */}
              <div className="relative glass bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl animate-float">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-center transform hover:scale-115 hover:rotate-3 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in animate-delay-600 group/card">
                    <GraduationCap size={48} className="mx-auto mb-3 text-gray-900 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-gray-900 group-hover/card:scale-110 transition-transform duration-300">Quality</div>
                    <div className="text-sm text-gray-800 font-semibold">Education</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-center transform hover:scale-115 hover:-rotate-3 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in animate-delay-700 group/card">
                    <Award size={48} className="mx-auto mb-3 text-white group-hover/card:scale-110 group-hover/card:-rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-white group-hover/card:scale-110 transition-transform duration-300">Excellence</div>
                    <div className="text-sm text-purple-100 font-semibold">Academic</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-center transform hover:scale-115 hover:rotate-3 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in animate-delay-800 group/card">
                    <Users size={48} className="mx-auto mb-3 text-white group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300" />
                    <div className="text-2xl font-bold text-white group-hover/card:scale-110 transition-transform duration-300">Expert</div>
                    <div className="text-sm text-pink-100 font-semibold">Faculty</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-6 text-center transform hover:scale-115 hover:-rotate-3 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in animate-delay-900 group/card">
                    <div className="text-4xl mb-3 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300 inline-block">🏆</div>
                    <div className="text-2xl font-bold text-white group-hover/card:scale-110 transition-transform duration-300">Top</div>
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
