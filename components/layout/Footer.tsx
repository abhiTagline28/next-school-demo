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
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* School Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {schoolConfig.name}
              </h3>
              <p className="text-yellow-300 font-semibold text-sm">
                {schoolConfig.tagline}
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-300">
              Established in {schoolConfig.established}, we are committed to providing 
              quality education and nurturing young minds to become responsible citizens.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full font-bold shadow-lg">
                {schoolConfig.affiliation}
              </span>
              <span className="text-gray-400 font-medium">
                Code: {schoolConfig.schoolCode}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-150"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              <span className="relative z-10">Important Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-150"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getMapLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-200 group"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform">{getFullAddress()}</span>
                </a>
              </li>
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-200 group"
                >
                  <Phone size={20} className="flex-shrink-0 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform font-medium">{schoolConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink()}
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-200 group"
                >
                  <Mail size={20} className="flex-shrink-0 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all group-hover:translate-x-1 transition-transform font-medium">{schoolConfig.contact.email}</span>
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
                    className="relative group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                    aria-label="Facebook"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Facebook size={18} className="relative z-10" />
                  </a>
                )}
                {schoolConfig.social.instagram && (
                  <a
                    href={schoolConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/50"
                    aria-label="Instagram"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Instagram size={18} className="relative z-10" />
                  </a>
                )}
                {schoolConfig.social.youtube && (
                  <a
                    href={schoolConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/50"
                    aria-label="YouTube"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Youtube size={18} className="relative z-10" />
                  </a>
                )}
                {schoolConfig.social.twitter && (
                  <a
                    href={schoolConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/50"
                    aria-label="Twitter"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Twitter size={18} className="relative z-10" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {schoolConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed with <span className="text-red-400">❤️</span> for quality education
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full shadow-2xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="mx-auto group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};
