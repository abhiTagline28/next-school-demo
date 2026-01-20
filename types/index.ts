// Type definitions for the school website

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: "academic" | "sports" | "cultural" | "announcement";
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  subjects?: string[];
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "campus" | "events" | "activities" | "achievements";
  title?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: "Parent" | "Student" | "Alumni";
  message: string;
  image?: string;
  year?: string;
}

export interface AcademicProgram {
  grade: string;
  description: string;
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdmissionFormData {
  // Student Details
  studentName: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  grade: string;
  previousSchool?: string;
  
  // Parent Details
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
  
  // Contact
  email: string;
  address: string;
  city: string;
  pincode: string;
}
