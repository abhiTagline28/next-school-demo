"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter,
  ArrowUp
} from "lucide-react";
import { schoolConfig, getFullAddress, getPhoneLink, getEmailLink, getMapLink } from "@/config/school.config";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const importantLinks = [
    { name: "Faculty", href: "/faculty" },
    { name: "Events", href: "/events" },
    { name: "Facilities", href: "/facilities" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* School Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {schoolConfig.name}
              </h3>
              <p className="text-orange-400 font-semibold text-sm">
                {schoolConfig.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Established in {schoolConfig.established}, we are committed to providing 
              quality education and nurturing young minds to become responsible citizens.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                {schoolConfig.affiliation}
              </span>
              <span className="text-gray-400">
                Code: {schoolConfig.schoolCode}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getMapLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0 group-hover:text-orange-400" />
                  <span className="text-sm">{getFullAddress()}</span>
                </a>
              </li>
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <Phone size={20} className="flex-shrink-0 group-hover:text-orange-400" />
                  <span className="text-sm">{schoolConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink()}
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <Mail size={20} className="flex-shrink-0 group-hover:text-orange-400" />
                  <span className="text-sm break-all">{schoolConfig.contact.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex items-center gap-3">
                {schoolConfig.social.facebook && (
                  <a
                    href={schoolConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                )}
                {schoolConfig.social.instagram && (
                  <a
                    href={schoolConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {schoolConfig.social.youtube && (
                  <a
                    href={schoolConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                )}
                {schoolConfig.social.twitter && (
                  <a
                    href={schoolConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {schoolConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed with ❤️ for quality education
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="mx-auto" />
      </button>
    </footer>
  );
};
