import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { schoolConfig } from "@/config/school.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${schoolConfig.name}. How we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage(): React.ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100">
              Last updated: January 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12 prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                {schoolConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy 
                and security of personal information. This Privacy Policy explains how we collect, 
                use, and safeguard information from students, parents, and website visitors.
              </p>

              <h2>Information We Collect</h2>
              <h3>Student Information</h3>
              <ul>
                <li>Personal details (name, date of birth, gender)</li>
                <li>Parent/guardian contact information</li>
                <li>Academic records and progress reports</li>
                <li>Attendance records</li>
                <li>Medical information (if necessary)</li>
                <li>Photographs and videos (for school activities)</li>
              </ul>

              <h3>Parent/Guardian Information</h3>
              <ul>
                <li>Name and contact details</li>
                <li>Address and identification documents</li>
                <li>Emergency contact information</li>
              </ul>

              <h3>Website Visitors</h3>
              <ul>
                <li>Contact form submissions</li>
                <li>Inquiry details</li>
                <li>Website usage data (analytics)</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul>
                <li>Student enrollment and academic administration</li>
                <li>Communication with parents regarding student progress</li>
                <li>Health and safety purposes</li>
                <li>School events and activities</li>
                <li>Legal and regulatory compliance</li>
                <li>Improving our educational services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell or rent personal information. Information may be shared with:
              </p>
              <ul>
                <li>Educational boards ({schoolConfig.affiliation}) for examination purposes</li>
                <li>Government authorities when legally required</li>
                <li>Service providers (transport, medical) as necessary</li>
                <li>Parents/guardians regarding their child&apos;s information</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect personal information:
              </p>
              <ul>
                <li>Secure physical storage of documents</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
              </ul>

              <h2>Photography and Media</h2>
              <p>
                Photographs and videos may be taken during school activities for:
              </p>
              <ul>
                <li>School website and social media</li>
                <li>Yearbooks and publications</li>
                <li>Promotional materials</li>
              </ul>
              <p>
                Parents can opt-out of media publication by notifying the school in writing.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your child&apos;s information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of data (subject to legal requirements)</li>
                <li>Opt-out of non-essential communications</li>
                <li>Lodge a complaint about data handling</li>
              </ul>

              <h2>Retention of Information</h2>
              <p>
                We retain student records as required by educational regulations and legal 
                requirements. Generally, records are maintained for the duration of enrollment 
                and for a specified period thereafter as mandated by law.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices of these external sites.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                We take special care in handling children&apos;s information in compliance with 
                applicable laws and regulations regarding child data protection.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this 
                page with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                For questions about this Privacy Policy or to exercise your rights, contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg not-prose">
                <p className="font-semibold text-gray-900 mb-2">{schoolConfig.name}</p>
                <p className="text-gray-700 text-sm mb-1">
                  Email: {schoolConfig.contact.email}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  Phone: {schoolConfig.contact.phone}
                </p>
                <p className="text-gray-700 text-sm">
                  Address: {schoolConfig.contact.address.street}, {schoolConfig.contact.address.area}, 
                  {schoolConfig.contact.address.city}, {schoolConfig.contact.address.state} - 
                  {schoolConfig.contact.address.pincode}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
