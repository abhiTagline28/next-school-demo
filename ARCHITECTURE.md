# 🏗️ Website Architecture Documentation

## For Developers

This document explains the technical architecture, design decisions, and implementation details of the school website.

---

## 📊 Tech Stack

### Core
- **Framework:** Next.js 15.1.4 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

### Key Libraries
- `clsx` + `tailwind-merge` - className utilities
- `lucide-react` - Icon system
- `next-themes` - Theme support (future enhancement)

---

## 🎯 Design Principles

### 1. **Trust-Driven UI**
- Clean, professional design
- Prominent trust indicators (years, certifications)
- Principal's message for personal connection
- Real testimonials and results

### 2. **Parent-Centric UX**
- Clear navigation (max 2 clicks to any info)
- Prominent admission CTA
- Easy-to-find contact information
- Mobile-first approach (60%+ traffic)

### 3. **Performance First**
- Static generation where possible
- Optimized images (WebP/AVIF)
- Minimal JavaScript
- Fast loading on 3G networks

### 4. **SEO & Local Discovery**
- Schema.org structured data
- Local business optimization
- Semantic HTML
- Meta tags on every page

### 5. **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast compliance

---

## 📂 Architecture Overview

```
┌─────────────────────────────────────────┐
│         Next.js App Router              │
│  (Server Components by default)         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐  ┌─────────────┐     │
│  │   Config    │  │    Data     │     │
│  │   Layer     │  │   Layer     │     │
│  └─────────────┘  └─────────────┘     │
│         ▼                ▼             │
│  ┌─────────────────────────────┐      │
│  │     Page Components         │      │
│  │  (Server-side rendered)     │      │
│  └─────────────────────────────┘      │
│         ▼                              │
│  ┌─────────────────────────────┐      │
│  │   Reusable UI Components    │      │
│  │  (Client when interactive)  │      │
│  └─────────────────────────────┘      │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🗂️ Folder Structure

### `/app` - Next.js Pages (App Router)
```
app/
├── layout.tsx          # Root layout (Header, Footer, SEO)
├── page.tsx            # Homepage
├── globals.css         # Global styles
├── robots.ts           # robots.txt generation
├── sitemap.ts          # sitemap.xml generation
└── [page]/
    └── page.tsx        # Individual pages
```

**Pattern:** Each page is in its own folder with `page.tsx`

### `/components` - Reusable Components
```
components/
├── home/               # Homepage-specific sections
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── PrincipalMessage.tsx
│   ├── AcademicsOverview.tsx
│   ├── FacilitiesPreview.tsx
│   └── AdmissionCTA.tsx
├── layout/             # Layout components
│   ├── Header.tsx      # Navigation (Client Component)
│   └── Footer.tsx      # Footer (Client Component)
├── seo/                # SEO components
│   └── SchemaOrg.tsx   # Structured data
└── ui/                 # Base UI components
    ├── Button.tsx
    ├── Card.tsx
    ├── Section.tsx
    ├── Input.tsx
    ├── Textarea.tsx
    ├── Badge.tsx
    ├── Container.tsx
    └── IconBox.tsx
```

**Pattern:** 
- Components are Server Components by default
- Add `"use client"` only when needed (forms, interactions)

### `/config` - Configuration Layer
```
config/
└── school.config.ts    # Single source of truth
```

**Purpose:** All school-specific data centralized for easy customization

### `/data` - Data Layer
```
data/
├── faculty.ts          # Faculty members array
└── events.ts           # Events array
```

**Pattern:** Exportable arrays of typed data

### `/lib` - Utilities
```
lib/
└── utils.ts            # Helper functions
```

**Pattern:** Pure utility functions

### `/types` - TypeScript Definitions
```
types/
└── index.ts            # All TypeScript interfaces
```

---

## 🎨 Component Design System

### Base Components (`/components/ui`)

#### Button
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Fully accessible with focus states

#### Card
- Composable: Card, CardHeader, CardContent, CardFooter
- Hover effects optional
- Consistent shadow and spacing

#### Section
- Background variants: white, gray, blue
- Consistent padding
- Max-width container built-in

#### Input/Textarea
- Label support
- Error state handling
- Icon support
- Accessible form controls

#### Badge
- Color variants mapped to categories
- Consistent sizing

#### IconBox
- Wrapper for icons with background
- Size and variant options
- Used for feature highlights

### Page-Specific Components (`/components/home`)

Each homepage section is a separate component:
- **Hero:** Main CTA with admission status
- **Highlights:** Key statistics in cards
- **PrincipalMessage:** Trust-building section
- **AcademicsOverview:** Curriculum preview
- **FacilitiesPreview:** First 6 facilities
- **AdmissionCTA:** Conversion-focused banner

**Pattern:** Self-contained, data-driven, reusable

---

## 🔧 Configuration System

### School Config (`config/school.config.ts`)

**Philosophy:** Single file for all customization

```typescript
interface SchoolConfig {
  // Basic Info
  name: string;
  tagline: string;
  established: number;
  affiliation: string;
  schoolCode: string;
  
  // Contact
  contact: ContactInfo;
  
  // Social
  social: SocialLinks;
  
  // Branding
  branding: BrandConfig;
  
  // Features (toggles)
  features: FeatureFlags;
  
  // SEO
  seo: SEOConfig;
  
  // Content
  principal: PrincipalInfo;
  academics: AcademicsInfo;
  highlights: Highlight[];
  facilities: Facility[];
  admissions: AdmissionInfo;
}
```

**Benefits:**
- Non-developers can customize
- Type-safe
- Single source of truth
- Easy to validate

### Helper Functions
```typescript
getFullAddress()    // Formatted address string
getMapLink()        // Google Maps URL
getPhoneLink()      // tel: protocol link
getEmailLink()      // mailto: protocol link
```

---

## 📱 Responsive Design Strategy

### Breakpoints (Tailwind defaults)
- `sm`: 640px (large phones)
- `md`: 768px (tablets)
- `lg`: 1024px (small laptops)
- `xl`: 1280px (desktops)

### Approach
1. **Mobile-First:** Design for mobile, enhance for desktop
2. **Touch-Friendly:** 44px minimum tap targets
3. **Readable:** 16px minimum font size
4. **Stackable:** Cards stack vertically on mobile
5. **Hidden Elements:** Show/hide based on breakpoint

### Grid Patterns
```
Mobile:    1 column
Tablet:    2 columns
Desktop:   3-4 columns
```

---

## 🚀 Performance Optimizations

### 1. **Static Generation**
- All pages are statically generated at build time
- No server-side rendering needed
- Fast CDN delivery

### 2. **Image Optimization**
- Next.js Image component (future)
- WebP/AVIF format support
- Lazy loading built-in
- Responsive images

### 3. **Code Splitting**
- Automatic route-based splitting
- Dynamic imports for heavy components
- Minimal JavaScript shipped

### 4. **CSS Optimization**
- Tailwind purges unused CSS
- Critical CSS inlined
- Font display swap

### 5. **Accessibility**
- Semantic HTML (better for assistive tech)
- Reduced motion support
- Focus management

---

## 🔍 SEO Implementation

### 1. **Metadata (Every Page)**
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "150 char description",
  // ... more fields
};
```

### 2. **Schema.org Structured Data**
- **Organization:** School details
- **LocalBusiness:** For local search
- **WebSite:** Site-wide data
- **BreadcrumbList:** Navigation hierarchy

### 3. **Local SEO**
- City/locality in content
- Address in structured data
- Geo coordinates
- Local keywords

### 4. **Technical SEO**
- Sitemap.xml (auto-generated)
- Robots.txt
- Semantic HTML
- Mobile-friendly
- Fast loading

---

## ♿ Accessibility Features

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Skip to content (future)
- Escape closes modals

### Screen Readers
- ARIA labels where needed
- Semantic HTML (h1, nav, main, article)
- Alt text on images
- Form labels

### Visual
- 4.5:1 contrast ratio (WCAG AA)
- Focus indicators
- No color-only information
- Readable font sizes

### Motion
- `prefers-reduced-motion` support
- Disable animations if requested

---

## 🎯 Conversion Optimization

### Homepage Flow
1. **Hero:** Immediate value proposition + CTA
2. **Highlights:** Build credibility with numbers
3. **Principal:** Personal connection
4. **Academics:** Core offering
5. **Facilities:** Proof of infrastructure
6. **Admission CTA:** Final push

### Trust Elements
- Years of establishment
- Board affiliation
- Teacher count
- Student count
- Results percentage
- Principal's photo/message

### CTAs
- Primary: "Apply for Admission"
- Secondary: "Contact Us", "Learn More"
- Sticky admission banner (conditional)

---

## 🔄 Data Flow

```
1. User visits page
   ↓
2. Next.js renders static HTML
   ↓
3. Data pulled from config/data files
   ↓
4. Components receive props
   ↓
5. HTML sent to browser (fully rendered)
   ↓
6. Minimal JS hydration
   ↓
7. Interactive elements work
```

**No API calls, no loading states, instant content**

---

## 🛠️ Development Workflow

### Adding a New Page
1. Create folder: `app/new-page/`
2. Add `page.tsx` with metadata
3. Use existing components
4. Add to sitemap.ts
5. Link from navigation

### Adding New Content Type
1. Define TypeScript interface in `types/`
2. Create data file in `data/`
3. Build component in `components/`
4. Use in page

### Customization Workflow
1. Schools edit `config/school.config.ts`
2. No code changes needed
3. Rebuild (`npm run build`)
4. Deploy

---

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] All pages load
- [ ] Links work
- [ ] Forms submit
- [ ] Mobile responsive
- [ ] Keyboard navigation
- [ ] Screen reader friendly
- [ ] Fast loading
- [ ] Images load
- [ ] No console errors

### Automated (Future)
- Unit tests (Jest)
- E2E tests (Playwright)
- Visual regression (Percy)
- Performance (Lighthouse CI)

---

## 📈 Analytics Integration (Future)

### Recommended Tracking
- Page views
- Admission form submissions
- Contact form submissions
- Phone/email clicks
- Time on site
- Bounce rate

### Tools
- Google Analytics 4
- Google Search Console
- Facebook Pixel (optional)

---

## 🚢 Deployment

### Build Process
```bash
npm run build  # Creates optimized build
npm start      # Runs production server
```

### Vercel Deployment
1. Connect GitHub repo
2. Auto-deploy on push
3. Environment variables in dashboard
4. Custom domain setup

### Other Platforms
- Netlify: Similar to Vercel
- Traditional: Upload .next folder + node_modules

---

## 🔐 Security Considerations

### Headers (next.config.ts)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### Input Validation
- Form validation (client + server)
- Sanitize user inputs
- CSRF protection (future forms)

### Environment Variables
- Use .env.local for secrets
- Never commit .env files
- Use NEXT_PUBLIC_ prefix for client vars

---

## 🔮 Future Enhancements

### Phase 2
- [ ] Online admission form with backend
- [ ] Student login portal
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] WhatsApp integration

### Phase 3
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Analytics dashboard
- [ ] Mobile app

---

## 🐛 Common Issues & Solutions

### Build Errors
- **Event handlers in server components:** Add `"use client"`
- **Module not found:** Check imports, run `npm install`
- **Type errors:** Check TypeScript interfaces

### Styling Issues
- **Styles not applying:** Check Tailwind class names
- **Layout breaks:** Check responsive classes
- **Colors wrong:** Update config or Tailwind theme

### Performance Issues
- **Slow loading:** Optimize images, check bundle size
- **Layout shift:** Add height/width to images
- **Long TTI:** Reduce JavaScript, check for blocking scripts

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Schema.org Validator](https://validator.schema.org/)

---

## 🤝 Contributing

### Code Style
- Use TypeScript
- Follow existing patterns
- Comment complex logic
- Keep components small
- Server components by default

### Commit Messages
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
perf: Performance improvement
```

---

**Architecture Version:** 1.0  
**Last Updated:** January 2026  
**Maintainer:** Development Team
