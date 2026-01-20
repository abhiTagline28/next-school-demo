import React from "react";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { schoolConfig } from "@/config/school.config";
import { eventsData } from "@/data/events";
import { Calendar, Clock, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & Announcements",
  description: `Latest events, announcements, and activities at ${schoolConfig.name}. Stay updated with school calendar.`,
};

export default function EventsPage(): React.ReactElement {
  // Sort events by date (newest first)
  const sortedEvents = [...eventsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Separate upcoming and past events
  const today = new Date();
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= today);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < today);

  const categoryColors = {
    academic: "primary",
    sports: "success",
    cultural: "warning",
    announcement: "secondary",
  } as const;

  const categoryIcons = {
    academic: "📚",
    sports: "🏃",
    cultural: "🎭",
    announcement: "📢",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Events & Announcements
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Stay updated with latest happenings at {schoolConfig.name}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <Section background="white">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Mark your calendar for these exciting events"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">
                      {categoryIcons[event.category]}
                    </div>
                    <Badge variant={categoryColors[event.category]} className="capitalize">
                      {event.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={18} className="text-blue-600" />
                      <span className="font-semibold">{formatDate(event.date)}</span>
                    </div>
                    {event.image && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-orange-600" />
                        <span>School Campus</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <Section background="blue">
          <SectionHeader
            title="Past Events"
            subtitle="Recent activities and celebrations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">
                      {categoryIcons[event.category]}
                    </div>
                    <Badge variant="secondary" className="capitalize text-xs">
                      {event.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {event.description.slice(0, 100)}...
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Important Announcements */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Important Announcements"
            subtitle="Stay informed about school updates"
          />

          <div className="space-y-4">
            {[
              {
                title: `Admissions Open for ${schoolConfig.admissions.academicYear}`,
                description: "Limited seats available for all grades. Early bird discount applicable for registrations before February 28, 2026.",
                date: "2026-01-15",
                urgent: true,
              },
              {
                title: "Winter Break Schedule",
                description: "School will remain closed from December 25, 2025 to January 2, 2026 for winter vacation. School reopens on January 3, 2026.",
                date: "2025-12-20",
                urgent: false,
              },
              {
                title: "Mandatory Parent-Teacher Meeting",
                description: "All parents are requested to attend the PTM on February 5, 2026. Individual time slots will be shared via SMS.",
                date: "2026-01-25",
                urgent: true,
              },
              {
                title: "New Transportation Routes Added",
                description: "School bus service now available for Vesu and Pal areas. Contact office for route details and fees.",
                date: "2026-01-10",
                urgent: false,
              },
            ].map((announcement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {announcement.urgent && (
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl">
                          ⚠️
                        </div>
                      )}
                      {!announcement.urgent && (
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                          📢
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {announcement.title}
                        </h3>
                        {announcement.urgent && (
                          <Badge variant="danger" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {announcement.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>Posted on {formatDate(announcement.date)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Academic Calendar */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Academic Calendar Highlights"
            subtitle={`Key dates for ${schoolConfig.admissions.academicYear}`}
          />

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { event: "Session Begins", date: "April 1, 2026" },
                  { event: "First Term Exams", date: "July 15-25, 2026" },
                  { event: "Mid-Term Break", date: "September 25-30, 2026" },
                  { event: "Second Term Exams", date: "December 10-20, 2026" },
                  { event: "Annual Exams (Classes 1-9)", date: "February 15-28, 2027" },
                  { event: "Board Exams (Classes 10, 12)", date: "March 2027" },
                  { event: "Result Declaration", date: "March 31, 2027" },
                  { event: "Summer Vacation", date: "April 1-30, 2027" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Calendar className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
