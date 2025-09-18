export const siteConfig = {
  // Site Metadata
  name: "Ofek Cohen Portfolio",
  title: "Ofek Cohen | Computer Science Student & Developer",
  description: "Portfolio website showcasing projects, skills, and experience of Ofek Cohen, a Computer Science student passionate about creating innovative solutions through code.",
  keywords: [
    "computer science",
    "portfolio", 
    "web development",
    "programming",
    "react",
    "typescript",
    "nextjs",
    "data science",
    "machine learning",
    "AI",
    "full-stack development"
  ],
  author: "Ofek Cohen",
  creator: "Ofek Cohen",
  
  // URLs
  url: "https://ofekcohen.dev", // Replace with your actual domain
  baseUrl: process.env.NODE_ENV === 'production' ? "https://ofekcohen.dev" : "http://localhost:3000",
  
  // Social Media
  ogImage: "/images/og-image.jpg", // Add this image to public/images/
  
  // Brand
  logo: {
    text: "Ofek Cohen",
    initials: "OC",
    favicon: "/favicon.ico"
  },
  
  // Theme
  theme: {
    primaryColor: "#2563eb", // Blue
    secondaryColor: "#f1f5f9", // Light gray
    accentColor: "#3b82f6", // Light blue
  },
  
  // Features
  features: {
    darkMode: false, // Enable/disable dark mode support
    blog: false, // Enable/disable blog functionality
    analytics: {
      googleAnalytics: process.env.NEXT_PUBLIC_GA_ID || "", // Add your GA ID
      enabled: process.env.NODE_ENV === 'production'
    },
    contactForm: {
      enabled: true,
      provider: "simple", // Could be extended to use services like Formspree, Netlify Forms, etc.
    }
  },
  
  // Contact Form Configuration
  contactForm: {
    subjects: [
      "Job Opportunity",
      "Collaboration", 
      "Mentorship",
      "General Question",
      "Other"
    ],
    emailService: {
      // Configuration for email service (if you want to add actual email sending)
      provider: "none", // Could be "emailjs", "formspree", "netlify", etc.
      serviceId: "",
      templateId: "",
      publicKey: ""
    }
  },
  
  // SEO
  seo: {
    defaultTitle: "Ofek Cohen | Computer Science Student & Developer",
    titleTemplate: "%s | Ofek Cohen Portfolio",
    defaultDescription: "Portfolio website showcasing projects, skills, and experience of Ofek Cohen, a Computer Science student passionate about creating innovative solutions through code.",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Ofek Cohen Portfolio",
    },
    twitter: {
      creator: "@yourusername", // Replace with your Twitter handle or leave as is if you don't have Twitter
      site: "@yourusername"     // Replace with your Twitter handle or leave as is if you don't have Twitter
    }
  }
};

export type SiteConfig = typeof siteConfig;
