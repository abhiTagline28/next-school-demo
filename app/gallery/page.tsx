"use client";

import React, { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { schoolConfig } from "@/config/school.config";

type GalleryCategory = "all" | "campus" | "events" | "activities" | "achievements";

export default function GalleryPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  // Placeholder gallery data - schools can replace with actual images
  const galleryItems = [
    { id: 1, category: "campus", title: "School Building", placeholder: "🏫" },
    { id: 2, category: "campus", title: "Smart Classroom", placeholder: "📚" },
    { id: 3, category: "campus", title: "Science Lab", placeholder: "🔬" },
    { id: 4, category: "campus", title: "Library", placeholder: "📖" },
    { id: 5, category: "events", title: "Annual Day Celebration", placeholder: "🎉" },
    { id: 6, category: "events", title: "Sports Day", placeholder: "🏃" },
    { id: 7, category: "events", title: "Independence Day", placeholder: "🇮🇳" },
    { id: 8, category: "events", title: "Teachers Day", placeholder: "👨‍🏫" },
    { id: 9, category: "activities", title: "Art Class", placeholder: "🎨" },
    { id: 10, category: "activities", title: "Music Session", placeholder: "🎵" },
    { id: 11, category: "activities", title: "Science Exhibition", placeholder: "🧪" },
    { id: 12, category: "activities", title: "Dance Performance", placeholder: "💃" },
    { id: 13, category: "achievements", title: "Award Ceremony", placeholder: "🏆" },
    { id: 14, category: "achievements", title: "Winner Students", placeholder: "🥇" },
    { id: 15, category: "achievements", title: "Certificate Distribution", placeholder: "📜" },
    { id: 16, category: "campus", title: "Playground", placeholder: "⚽" },
    { id: 17, category: "campus", title: "Cafeteria", placeholder: "🍽️" },
    { id: 18, category: "events", title: "Gandhi Jayanti", placeholder: "🕊️" },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "campus", label: "Campus" },
    { id: "events", label: "Events" },
    { id: "activities", label: "Activities" },
    { id: "achievements", label: "Achievements" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Glimpses of life at {schoolConfig.name}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Section background="white">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as GalleryCategory)}
              className="transition-all"
            >
              <Badge
                variant={activeCategory === category.id ? "primary" : "secondary"}
                className={`cursor-pointer text-base px-6 py-2 ${
                  activeCategory === category.id 
                    ? "ring-2 ring-blue-600 ring-offset-2" 
                    : "hover:bg-gray-200"
                }`}
              >
                {category.label}
              </Badge>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-8xl">
                {item.placeholder}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <Badge variant="secondary" className="mt-2 text-xs capitalize">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Schools */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Note:</strong> This gallery uses placeholder icons. 
              Replace with actual school photos by adding images to the <code className="bg-white px-2 py-1 rounded text-sm">/public/gallery</code> folder 
              and updating the gallery data.
            </p>
          </div>
        </div>
      </Section>

      {/* Video Section Placeholder */}
      <Section background="blue">
        <SectionHeader
          title="Video Gallery"
          subtitle="Watch our school in action"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: "School Tour", icon: "🎥" },
            { title: "Annual Day Highlights", icon: "🎬" },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-6xl">
                {video.icon}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Coming soon...</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
