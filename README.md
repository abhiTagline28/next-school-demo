# 🏫 Premium School Website Template

A **production-ready**, **SEO-optimized**, and **highly customizable** school website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed specifically for schools in Surat, Gujarat, India (and easily adaptable for schools anywhere).

## ✨ Features

### 🎯 **For Schools**
- ✅ **Easy to Customize** - Single configuration file for all school details
- ✅ **No Coding Required** - Update school info, colors, and content without touching code
- ✅ **Mobile-First Design** - Perfect on phones, tablets, and desktops
- ✅ **Fast Loading** - Optimized for slow internet connections
- ✅ **SEO Optimized** - Rank higher on Google for local searches
- ✅ **Accessibility Compliant** - WCAG 2.1 AA standards

### 🚀 **Technical Features**
- ⚡ Built with **Next.js 15** (App Router)
- 📱 Fully **Responsive** Design
- 🎨 **Tailwind CSS** for modern UI
- 🔍 **SEO-First** Architecture with Schema.org
- 🌐 **TypeScript** for type safety
- ♿ **Accessible** (Keyboard navigation, screen readers)
- 🏆 **Performance Optimized** (LCP < 2.5s)

### 📄 **Complete Pages**
1. **Home** - Hero, highlights, principal's message, academics overview
2. **About Us** - School story, mission, vision, values
3. **Academics** - Curriculum, subjects, teaching methodology
4. **Admissions** - Process, requirements, eligibility, contact
5. **Facilities** - Infrastructure, labs, library, sports
6. **Faculty** - Teacher profiles, qualifications, experience
7. **Gallery** - Photo gallery with category filters
8. **Events** - Upcoming/past events, announcements
9. **Contact** - Form, map, office hours, FAQ
10. **Privacy Policy** - Data protection information
11. **Mandatory Disclosure** - CBSE/Board compliance

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Basic understanding of terminal/command line

### Installation

1. **Clone or Download the project**
```bash
cd school-demo
```

2. **Install Dependencies**
```bash
npm install
```

3. **Customize Your School Information**
   - Open `config/school.config.ts`
   - Replace placeholder text with your school's details
   - Update contact info, colors, facilities, etc.

4. **Run Development Server**
```bash
npm run dev
```

5. **Open Browser**
   - Visit: http://localhost:3000
   - Your school website is live locally!

---

## 📝 Customization Guide

### 1️⃣ **Update School Information**

**File:** `config/school.config.ts`

This is the MAIN file you need to edit. Everything is centralized here:

```typescript
export const schoolConfig: SchoolConfig = {
  name: "Your School Name",
  tagline: "Your School Tagline",
  established: 1995,
  affiliation: "CBSE", // or "GSEB", "ICSE"
  schoolCode: "42001",
  
  contact: {
    phone: "+91 261 1234567",
    email: "info@yourschool.edu.in",
    address: {
      street: "Your Street Address",
      area: "Your Area",
      city: "Your City",
      state: "Gujarat",
      pincode: "395009",
    },
  },
  
  // ... and much more!
}
```

### 2️⃣ **Update Colors (Optional)**

In the same config file, update branding colors:

```typescript
branding: {
  primaryColor: "#1E40AF",    // Your primary color
  secondaryColor: "#F59E0B",  // Your accent color
  accentColor: "#059669",     // Your highlight color
  tone: "modern", // or "traditional", "premium"
}
```

### 3️⃣ **Add Your Logo**

1. Add your logo to `/public/logo.png`
2. Update in config:
```typescript
branding: {
  logo: "/logo.png",
}
```

### 4️⃣ **Add Photos to Gallery**

1. Add images to `/public/gallery/`
2. Update `app/gallery/page.tsx` with actual image paths

### 5️⃣ **Update Faculty**

**File:** `data/faculty.ts`

Add/remove/edit faculty members:

```typescript
{
  name: "Mrs. Teacher Name",
  designation: "Subject Teacher",
  qualification: "M.A., B.Ed",
  experience: "10 years",
  subjects: ["Math", "Science"],
}
```

---

## 🎨 Color Customization

### Default Color Palette (Education-Friendly)

- **Primary Blue:** `#1E40AF` - Trust, professionalism
- **Orange:** `#F59E0B` - Energy, warmth
- **Green:** `#059669` - Growth, success
- **Gray:** Various shades for text and backgrounds

### How to Change Colors

**Option 1:** Use the config file (Recommended)
```typescript
// config/school.config.ts
branding: {
  primaryColor: "#YOUR_COLOR",
}
```

**Option 2:** Edit Tailwind directly
```typescript
// tailwind.config.ts (Advanced users)
```

---

## 📱 Pages Overview

### Homepage Sections
1. **Hero** - Main welcome section with CTA
2. **Highlights** - Key statistics (years, teachers, results)
3. **Principal's Message** - Trust-building section
4. **Academics Overview** - Quick look at curriculum
5. **Facilities Preview** - Infrastructure highlights
6. **Admission CTA** - Prominent enrollment call-to-action

### About Page
- School history and story
- Mission, vision, and values
- Why choose us
- Principal's detailed message

### Academics Page
- Curriculum structure by grade
- Subject overview
- Teaching methodology
- Assessment system

### Admissions Page
- Step-by-step admission process
- Required documents checklist
- Eligibility criteria
- Fee structure information
- Contact for queries

### And More!
- Facilities, Faculty, Gallery, Events, Contact pages
- Legal pages (Privacy Policy, Mandatory Disclosure)

---

## 🔍 SEO Configuration

### Update Domain & Metadata

1. **Update base URL** in multiple files:
   - `components/seo/SchemaOrg.tsx` - Line 7
   - `app/robots.ts` - Line 9
   - `app/sitemap.ts` - Line 4

2. **Update metadata** in `app/layout.tsx`:
   - Automatically pulls from `school.config.ts`

3. **Update Google Maps Coordinates**:
   - `components/seo/SchemaOrg.tsx` - Lines 23-24
   - Get coordinates from Google Maps

### SEO Features Included
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph for social sharing
- ✅ Schema.org structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Local SEO optimization

---

## 🚀 Deployment

### Option 1: Vercel (Recommended - FREE)

1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Click "Deploy"
4. Your site is live in 2 minutes!

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed
- SSL certificate automatically provided

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Connect repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

### Option 3: Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Upload `.next`, `public`, and `node_modules` to your server

3. Run with PM2 or similar:
```bash
npm start
```

---

## 📊 Performance Metrics

This template is optimized for:
- ⚡ **LCP (Largest Contentful Paint):** < 2.5s
- 🎯 **FID (First Input Delay):** < 100ms
- 📏 **CLS (Cumulative Layout Shift):** < 0.1
- 🏆 **Lighthouse Score:** 95+

### Built-in Optimizations
- Image optimization (WebP, AVIF)
- Code splitting and lazy loading
- CSS optimization
- Font optimization
- Reduced motion support
- Accessibility features

---

## ♿ Accessibility

Compliant with **WCAG 2.1 AA** standards:
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast ratios
- ✅ Focus indicators
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Skip to content links
- ✅ Responsive text sizing

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel/Netlify ready

---

## 📂 Project Structure

```
school-demo/
├── app/                      # Next.js pages
│   ├── about/               # About page
│   ├── academics/           # Academics page
│   ├── admissions/          # Admissions page
│   ├── facilities/          # Facilities page
│   ├── faculty/             # Faculty page
│   ├── gallery/             # Gallery page
│   ├── events/              # Events page
│   ├── contact/             # Contact page
│   ├── privacy-policy/      # Privacy Policy
│   ├── mandatory-disclosure/# Mandatory Disclosure
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── home/                # Homepage sections
│   ├── layout/              # Header, Footer
│   ├── seo/                 # SEO components
│   └── ui/                  # Reusable UI components
├── config/
│   └── school.config.ts     # MAIN CONFIG FILE ⭐
├── data/
│   ├── faculty.ts           # Faculty data
│   └── events.ts            # Events data
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets
```

---

## 📝 Common Tasks

### Change School Name
→ Edit `config/school.config.ts` → `name` field

### Update Contact Info
→ Edit `config/school.config.ts` → `contact` section

### Add/Remove Pages
→ Create/delete folder in `app/` directory

### Change Colors
→ Edit `config/school.config.ts` → `branding` section

### Add Teachers
→ Edit `data/faculty.ts`

### Add Events
→ Edit `data/events.ts`

### Update Meta Tags
→ Edit page-specific `metadata` in each page file

---

## 🆘 Support & Help

### For Schools (Non-Technical)
1. Contact your developer/agency who set this up
2. Refer them to this README
3. Most changes are in `config/school.config.ts`

### For Developers
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- TypeScript Docs: https://www.typescriptlang.org/docs

---

## 📜 License

This is a commercial template. You can:
- ✅ Use for multiple schools
- ✅ Customize freely
- ✅ Remove/add features
- ❌ Resell as a template
- ❌ Claim as your own creation

---

## 🎯 Why This Template?

### For Schools
- **Affordable:** One-time setup, no recurring costs
- **Professional:** Modern design that builds trust
- **Maintainable:** Easy updates without technical knowledge
- **Fast:** Quick loading even on slow internet
- **Mobile-First:** Majority of parents browse on phones

### For Developers
- **Well-Structured:** Clean, organized codebase
- **Type-Safe:** Full TypeScript coverage
- **Reusable:** Use for multiple clients
- **Modern:** Latest Next.js best practices
- **Documented:** Comprehensive inline comments

---

## 🚀 Future Enhancements (Optional)

- 📝 Online admission form with payment gateway
- 📚 Student/Parent login portal
- 📱 Mobile app version
- 🎥 Video integration
- 📊 Analytics dashboard
- 🌐 Multi-language support (English, Gujarati, Hindi)
- 💬 WhatsApp integration
- 📧 Newsletter subscription
- 🔔 Push notifications

---

## 📞 Questions?

For customization requests or issues:
1. Check this README first
2. Review `config/school.config.ts` comments
3. Check Next.js documentation
4. Contact your developer

---

**Built with ❤️ for quality education in India** 🇮🇳

---

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Compatible With:** Next.js 15+, Node 18+
