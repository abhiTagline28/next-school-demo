import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { schoolConfig, getPhoneLink, getEmailLink } from "@/config/school.config";
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Phone,
  Mail,
  AlertCircle,
  Download,
  Users
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admission process for ${schoolConfig.name}. Apply now for ${schoolConfig.admissions.academicYear}.`,
};

export default function AdmissionsPage(): React.ReactElement {
  const admissionProcess = [
    {
      step: 1,
      title: "Inquiry & Registration",
      description: "Visit the school or contact us to collect the admission form. Forms can also be downloaded from this website.",
      icon: <FileText size={24} />,
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Fill the form completely and submit with required documents and registration fee.",
      icon: <CheckCircle size={24} />,
    },
    {
      step: 3,
      title: "Interaction / Assessment",
      description: "Students will have an informal interaction session. For higher grades, a simple assessment may be conducted.",
      icon: <Users size={24} />,
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Selected students will receive admission confirmation. Complete the fee payment to secure the seat.",
      icon: <CheckCircle size={24} />,
    },
  ];

  const requiredDocuments = [
    "Birth Certificate (original for verification)",
    "Aadhar Card copy of student",
    "Transfer Certificate from previous school (for classes 2 and above)",
    "Last year's report card",
    "Passport size photographs (4 copies)",
    "Aadhar Card copies of parents",
    "Address proof",
    "Caste certificate (if applicable)",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {schoolConfig.admissions.isOpen ? (
              <>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Admissions Open Now!
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Join Us for {schoolConfig.admissions.academicYear}
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 mb-8">
                  {schoolConfig.admissions.message || "Enroll your child in Surat's most trusted school"}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Admissions
                </h1>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg inline-block">
                  <p className="text-xl">
                    Admissions for the next academic year will open soon. 
                    Please check back or contact us for more information.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <Section background="white">
        <SectionHeader
          title="Admission Process"
          subtitle="Simple steps to secure your child's future"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionProcess.map((process) => (
            <Card key={process.step} hover>
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  <IconBox
                    icon={process.icon}
                    size="lg"
                    variant="primary"
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Required Documents */}
      <Section background="blue">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Required Documents"
            subtitle="Please keep these documents ready"
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> All documents should be submitted in original for verification 
                    along with self-attested photocopies. Original documents will be returned after verification.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Eligibility Criteria */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Eligibility Criteria"
            subtitle="Age requirements for different grades"
          />

          <Card>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Grade</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Age Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { grade: "Nursery", age: "3+ years as on 31st March" },
                      { grade: "KG (Kindergarten)", age: "4+ years as on 31st March" },
                      { grade: "Class 1", age: "5+ years as on 31st March" },
                      { grade: "Class 2 onwards", age: "Previous class completion certificate required" },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-900 font-semibold">{item.grade}</td>
                        <td className="py-3 px-4 text-gray-600">{item.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Fee Structure Note */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Fee Structure</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                For detailed fee structure information, please contact the school office or 
                download the prospectus. Fee structure varies by grade and includes tuition, 
                books, uniforms, and other charges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">
                  <Download size={18} className="mr-2" />
                  Download Prospectus
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact for Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact for Admission */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Need Help?"
            subtitle="Contact us for admission queries"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover>
              <CardContent className="p-8 text-center">
                <IconBox
                  icon={<Phone size={28} />}
                  size="lg"
                  variant="primary"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Call Us
                </h3>
                <a 
                  href={getPhoneLink()}
                  className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
                >
                  {schoolConfig.contact.phone}
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Mon-Sat: 9:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-8 text-center">
                <IconBox
                  icon={<Mail size={28} />}
                  size="lg"
                  variant="secondary"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Email Us
                </h3>
                <a 
                  href={getEmailLink()}
                  className="text-blue-600 hover:text-blue-700 text-lg font-semibold break-all"
                >
                  {schoolConfig.contact.email}
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
