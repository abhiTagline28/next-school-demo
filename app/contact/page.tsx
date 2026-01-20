"use client";

import React, { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { 
  schoolConfig, 
  getFullAddress, 
  getPhoneLink, 
  getEmailLink, 
  getMapLink 
} from "@/config/school.config";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";

export default function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We&apos;d love to hear from you. Get in touch with us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card hover>
            <CardContent className="p-6 text-center">
              <IconBox
                icon={<MapPin size={24} />}
                variant="primary"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <a
                href={getMapLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                {getFullAddress()}
              </a>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6 text-center">
              <IconBox
                icon={<Phone size={24} />}
                variant="secondary"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <a
                href={getPhoneLink()}
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                {schoolConfig.contact.phone}
              </a>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6 text-center">
              <IconBox
                icon={<Mail size={24} />}
                variant="success"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href={getEmailLink()}
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors break-all"
              >
                {schoolConfig.contact.email}
              </a>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6 text-center">
              <IconBox
                icon={<Clock size={24} />}
                variant="warning"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Sat<br />9:00 AM - 4:00 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="blue">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionHeader
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you shortly"
              centered={false}
            />

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />

                  <Input
                    label="Subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                  />

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map & Additional Info */}
          <div>
            <SectionHeader
              title="Find Us on Map"
              subtitle="Locate our campus easily"
              centered={false}
            />

            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <a
                    href={getMapLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl hover:scale-110 transition-transform"
                  >
                    🗺️
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Address:</span>
                    <p className="text-gray-600">{getFullAddress()}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Nearest Landmark:</span>
                    <p className="text-gray-600">Near {schoolConfig.seo.location.locality} Circle</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Affiliation:</span>
                    <p className="text-gray-600">
                      {schoolConfig.affiliation} (Code: {schoolConfig.schoolCode})
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Office Hours:</span>
                    <p className="text-gray-600">Monday to Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common queries"
          />

          <div className="space-y-4">
            {[
              {
                question: "What are the school timings?",
                answer: "School timings are 8:00 AM to 2:30 PM (Monday to Saturday). Extended day care is available till 5:00 PM.",
              },
              {
                question: "How can I schedule a campus tour?",
                answer: "You can call us or send an email to schedule a campus tour. We offer guided tours on weekdays between 10:00 AM to 12:00 PM.",
              },
              {
                question: "Is transportation available?",
                answer: "Yes, we provide GPS-enabled bus service covering major areas of Surat. Contact the office for route details and fees.",
              },
              {
                question: "What is the admission process?",
                answer: "Visit our Admissions page for detailed process. You can download the form from our website or collect it from the school office.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
