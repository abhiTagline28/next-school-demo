/**
 * SCHOOL CONFIGURATION FILE
 * 
 * This is the MAIN file schools will edit to customize their website.
 * All school-specific content, branding, and settings are centralized here.
 * 
 * Instructions for schools:
 * 1. Replace placeholder text with your school's information
 * 2. Update contact details, social media links
 * 3. Add your school's colors (optional, defaults to professional palette)
 * 4. Enable/disable sections as needed
 */

export interface SchoolConfig {
  // Basic Information
  name: string;
  tagline: string;
  established: number;
  affiliation: string; // "CBSE" | "GSEB" | "ICSE" | "State Board"
  schoolCode: string;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
    };
  };
  
  // Social Media (optional)
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  
  // Branding
  branding: {
    primaryColor?: string; // Hex color
    secondaryColor?: string;
    accentColor?: string;
    logo?: string; // Path to logo image
    tone: "modern" | "traditional" | "premium";
  };
  
  // Features to Enable/Disable
  features: {
    showGallery: boolean;
    showEvents: boolean;
    showTestimonials: boolean;
    showFaculty: boolean;
    showAdmissionForm: boolean;
    enableGujarati: boolean;
  };
  
  // SEO & Local Search
  seo: {
    description: string;
    keywords: string[];
    location: {
      city: string;
      state: string;
      locality: string; // Specific area like "Adajan", "Vesu"
    };
  };
  
  // Principal's Message
  principal: {
    name: string;
    message: string;
    image?: string;
  };
  
  // Academic Information
  academics: {
    grades: string; // e.g., "Nursery to 12th"
    medium: string[]; // ["English", "Gujarati"]
    streams?: string[]; // For 11-12: ["Science", "Commerce", "Arts"]
  };
  
  // Key Highlights (for homepage)
  highlights: Array<{
    title: string;
    value: string;
    icon?: string;
  }>;
  
  // Facilities
  facilities: Array<{
    name: string;
    description: string;
    icon?: string;
  }>;
  
  // Admission Details
  admissions: {
    isOpen: boolean;
    academicYear: string;
    startDate?: string;
    endDate?: string;
    message?: string;
  };
}

// DEFAULT CONFIGURATION - Easy to customize
export const schoolConfig: SchoolConfig = {
  // ==================== BASIC INFORMATION ====================
  name: "Vidyanjali School",
  tagline: "Nurturing Young Minds, Building Bright Futures",
  established: 1995,
  affiliation: "CBSE",
  schoolCode: "42001",
  
  // ==================== CONTACT ====================
  contact: {
    phone: "+91 261 1234567",
    email: "info@vidyanjali.edu.in",
    address: {
      street: "123, Education Lane",
      area: "Adajan",
      city: "Surat",
      state: "Gujarat",
      pincode: "395009",
    },
  },
  
  // ==================== SOCIAL MEDIA ====================
  social: {
    facebook: "https://facebook.com/vidyanjali",
    instagram: "https://instagram.com/vidyanjali",
    youtube: "https://youtube.com/@vidyanjali",
    // twitter: "", // Optional
  },
  
  // ==================== BRANDING ====================
  branding: {
    // Leave undefined to use default professional colors
    primaryColor: "#1E40AF", // Professional Blue
    secondaryColor: "#F59E0B", // Warm Orange
    accentColor: "#059669", // Trust Green
    tone: "modern",
    // logo: "/logo.png", // Add your logo to public folder
  },
  
  // ==================== FEATURES ====================
  features: {
    showGallery: true,
    showEvents: true,
    showTestimonials: true,
    showFaculty: true,
    showAdmissionForm: true,
    enableGujarati: false, // Set to true for bilingual
  },
  
  // ==================== SEO ====================
  seo: {
    description: "Vidyanjali School - Premier CBSE affiliated school in Adajan, Surat. Quality education from Nursery to 12th with modern facilities and experienced faculty.",
    keywords: [
      "CBSE School Surat",
      "Best School in Adajan",
      "English Medium School Surat",
      "Admission in Surat Schools",
      "Top Schools in Surat",
      "Vidyanjali School",
      "Quality Education Surat",
    ],
    location: {
      city: "Surat",
      state: "Gujarat",
      locality: "Adajan",
    },
  },
  
  // ==================== PRINCIPAL'S MESSAGE ====================
  principal: {
    name: "Dr. Anjali Sharma",
    message: "Welcome to Vidyanjali School! For over 25 years, we have been committed to providing quality education that nurtures not just academic excellence but also character, creativity, and compassion. Our dedicated faculty, modern infrastructure, and student-centric approach ensure that every child reaches their full potential. We believe in creating responsible citizens who will lead tomorrow's world with integrity and innovation.",
    // image: "/principal.jpg", // Optional
  },
  
  // ==================== ACADEMICS ====================
  academics: {
    grades: "Nursery to 12th Standard",
    medium: ["English", "Hindi"],
    streams: ["Science", "Commerce"], // For 11-12
  },
  
  // ==================== KEY HIGHLIGHTS ====================
  highlights: [
    {
      title: "Years of Excellence",
      value: "25+",
      icon: "award",
    },
    {
      title: "Expert Teachers",
      value: "50+",
      icon: "users",
    },
    {
      title: "Students",
      value: "1000+",
      icon: "graduation-cap",
    },
    {
      title: "Board Result",
      value: "98%",
      icon: "trophy",
    },
  ],
  
  // ==================== FACILITIES ====================
  facilities: [
    {
      name: "Smart Classrooms",
      description: "Air-conditioned classrooms with interactive smart boards and digital learning resources",
      icon: "monitor",
    },
    {
      name: "Science Labs",
      description: "Well-equipped Physics, Chemistry, Biology, and Computer labs for practical learning",
      icon: "flask-conical",
    },
    {
      name: "Library",
      description: "Extensive collection of books, magazines, and digital resources for all grades",
      icon: "library",
    },
    {
      name: "Sports Complex",
      description: "Indoor and outdoor sports facilities including cricket, football, basketball, and chess",
      icon: "trophy",
    },
    {
      name: "Transportation",
      description: "Safe and secure GPS-enabled bus service covering all major areas of Surat",
      icon: "bus",
    },
    {
      name: "Cafeteria",
      description: "Hygienic and nutritious meals prepared with care for growing children",
      icon: "utensils",
    },
  ],
  
  // ==================== ADMISSIONS ====================
  admissions: {
    isOpen: true,
    academicYear: "2026-27",
    startDate: "January 15, 2026",
    endDate: "March 31, 2026",
    message: "Limited seats available! Enroll your child in Surat's most trusted school.",
  },
};

// Helper function to get full address
export const getFullAddress = (): string => {
  const { street, area, city, state, pincode } = schoolConfig.contact.address;
  return `${street}, ${area}, ${city}, ${state} - ${pincode}`;
};

// Helper function to get Google Maps link
export const getMapLink = (): string => {
  const address = getFullAddress();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};

// Helper function to format phone for tel: link
export const getPhoneLink = (): string => {
  return `tel:${schoolConfig.contact.phone.replace(/\s/g, "")}`;
};

// Helper function to get email link
export const getEmailLink = (): string => {
  return `mailto:${schoolConfig.contact.email}`;
};
