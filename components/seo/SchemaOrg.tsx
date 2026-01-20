import React from "react";
import { schoolConfig } from "@/config/school.config";

export const SchemaOrg: React.FC = () => {
  const baseUrl = "https://www.example.com"; // Schools should replace with actual domain

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": schoolConfig.name,
    "alternateName": schoolConfig.tagline,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": schoolConfig.seo.description,
    "foundingDate": schoolConfig.established.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${schoolConfig.contact.address.street}, ${schoolConfig.contact.address.area}`,
      "addressLocality": schoolConfig.contact.address.city,
      "addressRegion": schoolConfig.contact.address.state,
      "postalCode": schoolConfig.contact.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1702", // Schools should update with actual coordinates
      "longitude": "72.8311",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": schoolConfig.contact.phone,
      "contactType": "Admissions",
      "email": schoolConfig.contact.email,
      "availableLanguage": ["English", "Hindi", "Gujarati"],
    },
    "sameAs": [
      schoolConfig.social.facebook,
      schoolConfig.social.instagram,
      schoolConfig.social.youtube,
      schoolConfig.social.twitter,
    ].filter(Boolean),
    "areaServed": {
      "@type": "City",
      "name": schoolConfig.seo.location.city,
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "16:00",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#localbusiness`,
    "name": schoolConfig.name,
    "image": `${baseUrl}/logo.png`,
    "telephone": schoolConfig.contact.phone,
    "email": schoolConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${schoolConfig.contact.address.street}, ${schoolConfig.contact.address.area}`,
      "addressLocality": schoolConfig.contact.address.city,
      "addressRegion": schoolConfig.contact.address.state,
      "postalCode": schoolConfig.contact.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1702",
      "longitude": "72.8311",
    },
    "url": baseUrl,
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": schoolConfig.name,
    "description": schoolConfig.seo.description,
    "publisher": {
      "@id": `${baseUrl}#organization`,
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    "inLanguage": "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${baseUrl}/about`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Admissions",
        "item": `${baseUrl}/admissions`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
