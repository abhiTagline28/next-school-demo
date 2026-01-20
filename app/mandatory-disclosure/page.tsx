import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { schoolConfig, getFullAddress } from "@/config/school.config";

export const metadata: Metadata = {
  title: "Mandatory Disclosure",
  description: `Mandatory disclosure as per ${schoolConfig.affiliation} norms for ${schoolConfig.name}.`,
};

export default function MandatoryDisclosurePage(): React.ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mandatory Disclosure
            </h1>
            <p className="text-lg text-blue-100">
              As per {schoolConfig.affiliation} Affiliation Bye-Laws
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* General Information */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                A. GENERAL INFORMATION
              </h2>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900 w-1/3">
                        Name of School
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.name}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        Affiliation No.
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.schoolCode}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        School Code
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.schoolCode}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        Complete Address
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {getFullAddress()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        Principal Name
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.principal.name}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        School Email ID
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.contact.email}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        Contact Details
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {schoolConfig.contact.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Documents and Information */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                B. DOCUMENTS AND INFORMATION
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Copies of Affiliation/Upgradation Letter</h3>
                  <p className="text-gray-600 text-sm">Available at school office for inspection</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Copies of Societies/Trust/Company Registration</h3>
                  <p className="text-gray-600 text-sm">Available at school office for inspection</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Copy of No Objection Certificate (NOC)</h3>
                  <p className="text-gray-600 text-sm">Issued by State Government</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Copies of Recognition Certificate</h3>
                  <p className="text-gray-600 text-sm">Available at school office for inspection</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5. Copy of Building Safety Certificate</h3>
                  <p className="text-gray-600 text-sm">Issued by competent authority</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">6. Copy of Fire Safety Certificate</h3>
                  <p className="text-gray-600 text-sm">Issued by competent authority</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">7. Copy of DEO Certificate</h3>
                  <p className="text-gray-600 text-sm">Available at school office for inspection</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">8. Water, Health and Sanitation Certificates</h3>
                  <p className="text-gray-600 text-sm">Issued by competent authority</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Staff Information */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                C. STAFF (TEACHING)
              </h2>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Level</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Total</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">PGT</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">TGT</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">PRT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-700">Primary</td>
                      <td className="py-3 px-4 text-gray-700">15</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                      <td className="py-3 px-4 text-gray-700">15</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-700">Secondary</td>
                      <td className="py-3 px-4 text-gray-700">20</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                      <td className="py-3 px-4 text-gray-700">20</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-700">Senior Secondary</td>
                      <td className="py-3 px-4 text-gray-700">15</td>
                      <td className="py-3 px-4 text-gray-700">15</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                      <td className="py-3 px-4 text-gray-700">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                D. SCHOOL INFRASTRUCTURE
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-gray-900">Total Campus Area:</span>
                  <span className="text-gray-700 ml-2">10,000 sq. ft.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Built-up Area:</span>
                  <span className="text-gray-700 ml-2">8,000 sq. ft.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Number of Classrooms:</span>
                  <span className="text-gray-700 ml-2">40</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Number of Laboratories:</span>
                  <span className="text-gray-700 ml-2">5</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Library Books:</span>
                  <span className="text-gray-700 ml-2">10,000+</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Playground Area:</span>
                  <span className="text-gray-700 ml-2">2,000 sq. ft.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fee Structure */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                E. SCHOOL FEE STRUCTURE
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                For detailed fee structure, please contact the school office or download the prospectus.
              </p>
              <p className="text-sm text-gray-500">
                Note: Fee structure is subject to revision as per school management decisions.
              </p>
            </CardContent>
          </Card>

          {/* Academic Results */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">
                F. ACADEMIC SESSION & RESULTS
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Academic Session</h3>
                  <p className="text-gray-700">April to March</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Board Examination Results (Previous Year)</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm text-gray-600">Class 10 Pass %</p>
                      <p className="text-2xl font-bold text-green-600">98%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Class 12 Pass %</p>
                      <p className="text-2xl font-bold text-green-600">96%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
