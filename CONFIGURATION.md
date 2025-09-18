# Portfolio Configuration Guide

This portfolio is designed to be easily configurable through centralized configuration files. Here's how to customize it for your own use.

## 📁 Configuration Files

All configuration files are located in the `src/config/` directory:

- **`personal.ts`** - Your personal information, bio, and contact details
- **`skills.ts`** - Your technical skills and proficiency levels
- **`timeline.ts`** - Your career/education timeline
- **`interests.ts`** - Your areas of interest and passions
- **`navigation.ts`** - Website navigation and social links
- **`contact.ts`** - Contact page configuration
- **`site.ts`** - Site-wide settings and SEO configuration
- **`index.ts`** - Central exports (don't modify this)

## 🔧 Quick Start Configuration

### 1. Personal Information (`src/config/personal.ts`)

Update your basic information:

```typescript
export const personalConfig = {
  name: "Your Name",
  initials: "YN", // Used in logo
  title: "Your Title/Role",
  location: "Your Location",
  // ... other fields
}
```

### 2. Skills (`src/config/skills.ts`)

Add your technical skills:

```typescript
export const skillsConfig: Skill[] = [
  {
    category: 'Frontend Development',
    technologies: ['React', 'TypeScript', 'Next.js'],
    level: 90 // 0-100
  },
  // ... more skills
]
```

### 3. Timeline (`src/config/timeline.ts`)

Add your career milestones:

```typescript
export const timelineConfig: TimelineItem[] = [
  {
    year: '2023',
    title: 'Your Achievement',
    description: 'Description of what you did',
    type: 'work' // 'work', 'education', 'milestone', 'goal'
  },
  // ... more timeline items
]
```

### 4. Projects (`src/data/projects.json`)

Add your projects in the JSON file:

```json
[
  {
    "id": 1,
    "title": "Your Project",
    "description": "Short description",
    "longDescription": "Detailed description",
    "techStack": ["React", "Node.js"],
    "githubUrl": "https://github.com/username/project",
    "imageUrl": "/images/project-preview.jpg",
    "featured": true,
    "category": "Full-Stack",
    "completedDate": "2024-01-15"
  }
]
```

### 5. Contact Information (`src/config/contact.ts`)

Update FAQ and contact reasons:

```typescript
export const faqConfig: FAQItem[] = [
  {
    question: "Your question?",
    answer: "Your answer."
  }
]
```

### 6. Site Configuration (`src/config/site.ts`)

Update SEO and site metadata:

```typescript
export const siteConfig = {
  name: "Your Portfolio",
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  url: "https://yourwebsite.com",
  // ... other settings
}
```

## 🎨 Customization Examples

### Changing Colors

Update theme colors in `src/config/site.ts`:

```typescript
theme: {
  primaryColor: "#2563eb", // Blue
  secondaryColor: "#f1f5f9", // Light gray
  accentColor: "#3b82f6", // Light blue
}
```

### Adding Social Links

Update `src/config/navigation.ts`:

```typescript
export const socialLinksConfig: SocialLink[] = [
  { href: 'https://github.com/username', label: 'GitHub', icon: 'github' },
  { href: 'https://linkedin.com/in/username', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'mailto:your.email@example.com', label: 'Email', icon: 'email' },
]
```

### Customizing Navigation

Update main navigation in `src/config/navigation.ts`:

```typescript
export const navigationConfig: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' }, // Add new pages
]
```

## 🖼️ Adding Images

1. Add project screenshots to `public/images/`
2. Update the `imageUrl` field in your project data
3. Recommended image sizes:
   - Project screenshots: 600x400px
   - OG image: 1200x630px

## 📝 Adding New Projects

1. Add project images to `public/images/`
2. Add project data to `src/data/projects.json`
3. Use this template:

```json
{
  "id": 999, // Unique ID
  "title": "Project Name",
  "description": "Brief description for project cards",
  "longDescription": "Detailed description for featured projects",
  "techStack": ["Technology", "List"],
  "githubUrl": "https://github.com/username/repo",
  "imageUrl": "/images/project-screenshot.jpg",
  "featured": false, // Set to true for homepage feature
  "category": "Full-Stack", // Category for filtering
  "completedDate": "2024-12-01" // YYYY-MM-DD format
}
```

## 🔧 Advanced Configuration

### Enabling Features

In `src/config/site.ts`:

```typescript
features: {
  darkMode: false, // Enable dark mode
  blog: false, // Enable blog functionality
  analytics: {
    googleAnalytics: "GA-XXXXX", // Your GA ID
    enabled: true
  }
}
```

### SEO Configuration

Update SEO settings in `src/config/site.ts`:

```typescript
seo: {
  defaultTitle: "Your Name | Your Title",
  titleTemplate: "%s | Your Portfolio",
  defaultDescription: "Your portfolio description",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Your Portfolio",
  }
}
```

## ✅ Configuration Checklist

After setting up your portfolio, check these items:

- [ ] Updated personal information in `personal.ts`
- [ ] Added your skills in `skills.ts`
- [ ] Updated timeline with your milestones in `timeline.ts`
- [ ] Added your interests in `interests.ts`
- [ ] Updated social links in `navigation.ts`
- [ ] Added your projects in `projects.json`
- [ ] Added project images to `public/images/`
- [ ] Updated site metadata in `site.ts`
- [ ] Updated contact information in `contact.ts`
- [ ] Customized FAQ in `contact.ts`
- [ ] Updated colors/theme if desired
- [ ] Added Google Analytics ID (optional)
- [ ] Updated favicon and OG image

## 🚀 Deployment

After configuration:

1. Build the project: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Update the `url` in `site.ts` with your production URL

## 🛠️ Development Tips

- The configuration is type-safe with TypeScript
- Changes to config files require a restart in development
- All configuration is imported through `src/config/index.ts`
- Icons for social links are built-in: 'github', 'linkedin', 'twitter', 'email', 'website'

## 📞 Need Help?

If you need help with configuration:

1. Check this guide first
2. Look at the existing configuration examples
3. Ensure TypeScript types match the expected format
4. Check the console for any configuration errors

---

**Happy configuring!** 🎉
