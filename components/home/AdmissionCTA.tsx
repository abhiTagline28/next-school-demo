import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { schoolConfig } from "@/config/school.config";
import { Calendar, Users, ArrowRight, CheckCircle } from "lucide-react";

export const AdmissionCTA: React.FC = () => {
  if (!schoolConfig.admissions.isOpen) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Limited Seats Available
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Admissions Open for {schoolConfig.admissions.academicYear}
          </h2>

          {/* Message */}
          {schoolConfig.admissions.message && (
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              {schoolConfig.admissions.message}
            </p>
          )}

          {/* Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {schoolConfig.admissions.startDate && (
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Calendar size={24} />
                <div className="text-left">
                  <div className="text-sm text-orange-100">Application Period</div>
                  <div className="font-semibold">
                    {schoolConfig.admissions.startDate}
                    {schoolConfig.admissions.endDate && ` - ${schoolConfig.admissions.endDate}`}
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users size={24} />
              <div className="text-left">
                <div className="text-sm text-orange-100">Grade Levels</div>
                <div className="font-semibold">{schoolConfig.academics.grades}</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "Online Application Available",
              "Easy Document Submission",
              "Quick Processing",
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
              >
                <CheckCircle size={20} />
                <span className="font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions">
              <Button 
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 group shadow-xl"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-orange-600"
              >
                Contact for Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
