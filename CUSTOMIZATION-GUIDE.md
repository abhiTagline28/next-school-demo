# 🎨 School Website Customization Guide

## For School Administrators (Non-Technical)

This guide will help you customize your school website **without any coding knowledge**.

---

## 📋 Step-by-Step Customization

### Step 1: Update Basic School Information

Open the file: `config/school.config.ts`

Find and update these sections:

#### School Name & Details
```typescript
name: "Your School Name Here",
tagline: "Your School Motto or Tagline",
established: 1995,  // Year your school was established
affiliation: "CBSE",  // Change to "GSEB", "ICSE", etc.
schoolCode: "42001",  // Your affiliation code
```

#### Contact Information
```typescript
contact: {
  phone: "+91 261 1234567",  // Your phone number
  email: "info@yourschool.edu.in",  // Your email
  address: {
    street: "Your Street Address",
    area: "Your Area/Locality",
    city: "Your City",
    state: "Gujarat",
    pincode: "395009",
  },
},
```

#### Social Media Links
```typescript
social: {
  facebook: "https://facebook.com/yourschool",
  instagram: "https://instagram.com/yourschool",
  youtube: "https://youtube.com/@yourschool",
  twitter: "https://twitter.com/yourschool",  // Optional
},
```

### Step 2: Update Colors (Optional)

You can change your school's brand colors:

```typescript
branding: {
  primaryColor: "#1E40AF",    // Main color (Blue by default)
  secondaryColor: "#F59E0B",  // Accent color (Orange)
  accentColor: "#059669",     // Highlight color (Green)
  tone: "modern",  // Options: "modern", "traditional", "premium"
  logo: "/logo.png",  // Add your logo to public folder
},
```

**How to pick colors:**
- Use a color picker tool online
- Get the color code (like #1E40AF)
- Replace the existing code

### Step 3: Update Principal's Information

```typescript
principal: {
  name: "Dr. Your Principal Name",
  message: "Write your principal's message here. This appears on multiple pages and builds trust with parents.",
  image: "/principal.jpg",  // Optional: Add photo to public folder
},
```

### Step 4: Update Academic Information

```typescript
academics: {
  grades: "Nursery to 12th Standard",  // Change as needed
  medium: ["English", "Hindi"],  // Add or remove languages
  streams: ["Science", "Commerce", "Arts"],  // For 11-12
},
```

### Step 5: Update Key Highlights

These numbers appear prominently on your homepage:

```typescript
highlights: [
  {
    title: "Years of Excellence",
    value: "25+",  // Update with your actual numbers
    icon: "award",
  },
  {
    title: "Expert Teachers",
    value: "50+",
    icon: "users",
  },
  // Add or remove as needed
],
```

### Step 6: Update Facilities

```typescript
facilities: [
  {
    name: "Smart Classrooms",
    description: "Your description of the facility",
    icon: "monitor",
  },
  // Add more facilities or edit existing ones
],
```

### Step 7: Update Admission Information

```typescript
admissions: {
  isOpen: true,  // Change to false when admissions close
  academicYear: "2026-27",
  startDate: "January 15, 2026",
  endDate: "March 31, 2026",
  message: "Limited seats available!",
},
```

---

## 👥 Adding Faculty Members

Open file: `data/faculty.ts`

Add new teachers like this:

```typescript
{
  id: "13",  // Increment the number
  name: "Mrs. Teacher Name",
  designation: "Subject Teacher",
  qualification: "M.A., B.Ed",
  experience: "10 years",
  subjects: ["Mathematics", "Science"],
  image: "/faculty/teacher-name.jpg",  // Optional
},
```

---

## 📅 Adding Events

Open file: `data/events.ts`

Add new events:

```typescript
{
  id: "9",  // Increment the number
  title: "Your Event Name",
  description: "Full description of the event",
  date: "2026-03-15",  // Format: YYYY-MM-DD
  category: "academic",  // Options: "academic", "sports", "cultural", "announcement"
},
```

---

## 🖼️ Adding Photos to Gallery

1. Add your photos to: `public/gallery/`
2. Open: `app/gallery/page.tsx`
3. Update the `galleryItems` array with actual image paths

---

## 🎨 Changing Website Colors

### Quick Color Change (Recommended)

In `config/school.config.ts`:

```typescript
branding: {
  primaryColor: "#YOUR_COLOR",  // Your school's main color
  secondaryColor: "#YOUR_COLOR",  // Your accent color
}
```

### Where to get color codes:
- Use Google's color picker
- Visit: https://colorhunt.co
- Get your brand colors from your logo

---

## 📝 SEO & Google Ranking

### Update These for Better Google Ranking:

In `config/school.config.ts`:

```typescript
seo: {
  description: "Write a compelling 150-character description of your school",
  keywords: [
    "Your School Name",
    "Best School in Your Area",
    "CBSE School Your City",
    "Admission in Your School",
    // Add 5-10 relevant keywords
  ],
  location: {
    city: "Your City",
    state: "Your State",
    locality: "Your Specific Area",
  },
},
```

---

## 🗺️ Adding Google Maps

1. Open: `components/seo/SchemaOrg.tsx`
2. Find this section (around line 23-24):
```typescript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "21.1702",  // Your school's latitude
  "longitude": "72.8311",  // Your school's longitude
},
```

**How to get coordinates:**
1. Open Google Maps
2. Right-click on your school location
3. Click "What's here?"
4. Copy the coordinates

---

## 🌐 Before Publishing

### 1. Update Domain Name

Update in these files (ask your developer):
- `components/seo/SchemaOrg.tsx` - Line 7
- `app/robots.ts` - Line 9
- `app/sitemap.ts` - Line 4

Replace `https://www.example.com` with your actual domain.

### 2. Add Your Logo

1. Save your logo as `logo.png`
2. Place in: `public/logo.png`
3. Recommended size: 512x512 pixels

### 3. Add Favicon

1. Save as `favicon.ico`
2. Place in: `app/favicon.ico`

---

## ✅ Testing Your Changes

After making changes:

1. Save all files
2. Refresh your browser
3. Check if changes appear correctly
4. Test on mobile phone too!

---

## 🆘 Common Issues & Solutions

### Issue: Changes not appearing
**Solution:** Hard refresh your browser (Ctrl + Shift + R on Windows, Cmd + Shift + R on Mac)

### Issue: Colors not changing
**Solution:** Make sure you're using hex color codes (starting with #)

### Issue: Website looks broken
**Solution:** Undo your last change and ask your developer

### Issue: Images not showing
**Solution:** Make sure images are in the `public` folder and paths are correct

---

## 📞 Need Help?

Contact your web developer with:
1. What you were trying to change
2. What happened
3. Screenshots if possible

---

## 🎯 Best Practices

### DO:
- ✅ Keep descriptions clear and concise
- ✅ Use high-quality photos (compress them first)
- ✅ Update content regularly
- ✅ Test on mobile devices
- ✅ Keep contact information current

### DON'T:
- ❌ Use very large images (optimize first)
- ❌ Change file names or folder structure
- ❌ Delete files you don't understand
- ❌ Copy-paste code from other websites
- ❌ Forget to save changes

---

## 📚 What Each File Does

- `config/school.config.ts` - All your school information ⭐ (MAIN FILE)
- `data/faculty.ts` - Teacher information
- `data/events.ts` - School events
- `app/*/page.tsx` - Individual page content
- `components/` - Reusable parts of website
- `public/` - Images, logos, files

---

## 🔄 Regular Updates

### Monthly:
- Update events
- Add new photos to gallery
- Update announcements

### Quarterly:
- Update faculty if changed
- Review and update content
- Check all links work

### Yearly:
- Update academic year
- Update results
- Update admission dates

---

**Remember:** When in doubt, ask your developer! It's better to ask than to break something. 😊
