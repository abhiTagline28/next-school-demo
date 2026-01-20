"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { schoolConfig, getPhoneLink, getEmailLink } from "@/config/school.config";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (href: string): boolean => {
    // Remove hash fragments for comparison
    const cleanHref = href.split("#")[0];
    const cleanPathname = pathname.split("#")[0];
    
    if (cleanHref === "/") {
      return cleanPathname === "/";
    }
    // Exact match or starts with the href followed by /
    return cleanPathname === cleanHref || cleanPathname.startsWith(`${cleanHref}/`);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      submenu: [
        { name: "About School", href: "/about" },
        { name: "Principal's Message", href: "/about#principal" },
        { name: "Infrastructure", href: "/facilities" },
      ]
    },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-rose-900 text-white py-3 relative overflow-hidden border-b border-purple-800/30">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-3 md:gap-0">
            <div className="flex items-center gap-6 md:gap-10 text-base md:text-lg">
              <a 
                href={getPhoneLink()} 
                className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300 group"
                aria-label={`Call ${schoolConfig.name}`}
              >
                <Phone size={20} className="text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span className="font-bold">{schoolConfig.contact.phone}</span>
              </a>
              <a 
                href={getEmailLink()} 
                className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300 group"
                aria-label={`Email ${schoolConfig.name}`}
              >
                <Mail size={20} className="text-yellow-400 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                <span className="font-bold hidden sm:inline">{schoolConfig.contact.email}</span>
                <span className="font-bold sm:hidden">Email</span>
              </a>
            </div>
            
            {schoolConfig.admissions.isOpen && (
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-gray-900 px-7 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-orange-300/50 hover:border-orange-200">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gray-900"></span>
                </span>
                <span className="whitespace-nowrap">
                  Admissions Open for {schoolConfig.admissions.academicYear}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white shadow-lg backdrop-blur-md border-gray-200" 
            : "bg-white border-gray-100"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo & School Name */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 shadow-lg border-2 border-white/20">
                  {schoolConfig.name.charAt(0)}
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight tracking-tight">
                  {schoolConfig.name}
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-bold mt-1.5">
                  {schoolConfig.affiliation} | Est. {schoolConfig.established}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center max-w-6xl mx-8">
              {navigation.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-6 py-3.5 text-lg font-bold transition-all duration-300 flex items-center gap-2 rounded-xl relative group",
                        !isActive && "text-gray-700 hover:text-purple-600"
                      )}
                    >
                      {/* Active Tab Background Glow */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-xl opacity-50 blur-md -z-10"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-xl -z-10"></div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full shadow-lg z-0"></div>
                        </>
                      )}
                      
                      {/* Hover Background Effect */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 via-pink-50/0 to-rose-50/0 rounded-xl group-hover:from-purple-50/90 group-hover:via-pink-50/90 group-hover:to-rose-50/90 transition-all duration-300 scale-95 group-hover:scale-100 -z-10"></div>
                      )}
                      
                      <span 
                        className={cn(
                          "relative z-20 transition-all duration-300 font-bold",
                          isActive 
                            ? "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent scale-110" 
                            : "text-inherit group-hover:scale-110"
                        )}
                        style={isActive ? {
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        } : {}}
                      >
                        {item.name}
                      </span>
                      
                      {item.submenu && (
                        <ChevronDown 
                          size={18} 
                          className={cn(
                            "relative z-20 transition-all duration-300",
                            isActive && "text-purple-600",
                            !isActive && "text-gray-700 group-hover:text-purple-600 group-hover:scale-110",
                            activeDropdown === item.name && "rotate-180"
                          )} 
                        />
                      )}
                      
                      {/* Hover Underline Effect */}
                      {!isActive && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full group-hover:w-4/5 transition-all duration-300 z-0"></div>
                      )}
                    </Link>
                    
                    {item.submenu && (
                      <div 
                        className={cn(
                          "absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-3 mt-2 border border-gray-200/50 transition-all duration-300 backdrop-blur-sm",
                          activeDropdown === item.name 
                            ? "opacity-100 visible translate-y-0 scale-100" 
                            : "opacity-0 invisible -translate-y-2 scale-95"
                        )}
                      >
                        {item.submenu.map((subItem) => {
                          const isSubActive = isActiveRoute(subItem.href);
                          return (
                              <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block px-5 py-3 text-gray-700 transition-all duration-300 font-bold mx-2 rounded-xl text-lg relative group/item",
                                isSubActive
                                  ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600"
                                  : "hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600"
                              )}
                            >
                              {isSubActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"></div>
                              )}
                              <span className={cn(
                                "relative transition-all duration-300",
                                isSubActive && "scale-105",
                                !isSubActive && "group-hover/item:scale-105"
                              )}>
                                {subItem.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/admissions"
              className="hidden lg:block relative group flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 text-lg border-2 border-white/30">
                Apply Now
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-gradient-to-b from-white to-purple-50/30">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-6 py-4 text-lg font-bold rounded-xl transition-all duration-300 relative",
                          isActive
                            ? "bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 border-l-4 border-purple-500"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 hover:scale-[1.02]"
                        )}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {isActive && (
                          <>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full z-10"></div>
                            <span 
                              className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent scale-105 font-bold z-20"
                              style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {item.name}
                            </span>
                          </>
                        )}
                        {!isActive && (
                          <span className="relative transition-all duration-300 font-bold">
                            {item.name}
                          </span>
                        )}
                      </Link>
                      {item.submenu && (
                        <div className="ml-6 space-y-1 mt-2 border-l-2 border-purple-200 pl-4">
                          {item.submenu.map((subItem) => {
                            const isSubActive = isActiveRoute(subItem.href);
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block px-5 py-3 text-base text-gray-600 rounded-lg transition-all duration-300 font-bold",
                                  isSubActive
                                    ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 scale-105"
                                    : "hover:text-purple-600 hover:bg-purple-50 hover:scale-[1.02]"
                                )}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                <Link
                  href="/admissions"
                  className="block px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-pink-600 transition-all duration-300 text-center mt-3 shadow-xl hover:shadow-2xl hover:scale-105 text-xl border-2 border-white/30"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
