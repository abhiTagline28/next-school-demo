import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { schoolConfig } from "@/config/school.config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${schoolConfig.name} - ${schoolConfig.tagline}`,
    template: `%s | ${schoolConfig.name}`,
  },
  description: schoolConfig.seo.description,
  keywords: schoolConfig.seo.keywords,
  authors: [{ name: schoolConfig.name }],
  creator: schoolConfig.name,
  publisher: schoolConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.example.com",
    siteName: schoolConfig.name,
    title: schoolConfig.name,
    description: schoolConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: schoolConfig.name,
    description: schoolConfig.seo.description,
  },
  verification: {
    google: "google-site-verification-code", // Schools should add their code
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-sans antialiased text-gray-900">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <Header />
        <main className="min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
