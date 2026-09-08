/**
 * =========================================================================
 * ⚙️ SITE CONFIGURATION — GAURAV BENIWAL PORTFOLIO
 * =========================================================================
 * 
 * EDIT THIS FILE TO CHANGE YOUR CORE PERSONAL & CONTACT DETAILS.
 * Changes made here will instantly reflect across the entire website
 * (Navbar, Hero, About, Contact buttons, Footer, Meta tags, etc.)
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'youtube' | 'twitter' | 'mail';
}

export interface SiteConfig {
  name: string;
  role: string;
  age: number;
  location: string;
  experienceYears: string;
  
  // Contact details (Edit with your real numbers & email)
  whatsapp: string; // WhatsApp number with country code (e.g. "+919876543210" or "919876543210")
  whatsappPrefillMessage: string;
  phone: string;    // Direct phone call number (e.g. "+919876543210")
  email: string;    // Email address (e.g. "gaurav@example.com")
  instagramHandle?: string;

  // Live status pill in hero
  status: {
    availableForProjects: boolean;
    badgeText: string;
    liveStatusText: string;
  };

  // Hero section messaging
  hero: {
    badge: string;
    headline: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    profileImage: string;
    profileImageFallback: string;
  };

  // Positioning statement for business & clients
  servicePositioning: string;

  // Social profiles (Empty URLs will be hidden automatically)
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    x?: string;
  };

  // Quick navigation items
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  // Your Name & Details
  name: "Gaurav Beniwal",
  role: "Full-Stack Developer, App & Website Builder",
  age: 18,
  location: "Panipat & Samalkha, Haryana, India",
  experienceYears: "4+",

  // Contact Information
  whatsapp: "919729480795", 
  whatsappPrefillMessage: "Hi Gaurav, I saw your portfolio and would like to discuss a project with you.",
  phone: "+91 9729480795",
  email: "gauravbeniwal30003@gmail.com",
  instagramHandle: "@gauravbeniwalx",

  // Live Status Pill (Displays in the hero area)
  status: {
    availableForProjects: true,
    badgeText: "Available for selected projects",
    liveStatusText: "Currently building digital products",
  },

  // Hero Section
  hero: {
    badge: "Available for projects in Haryana & worldwide",
    headline: "Building high-end and affordable digital products that actually work.",
    description:
      "Hi, I'm Gaurav Beniwal — a full-stack developer, website & app builder, and cybersecurity researcher from Panipat and Samalkha, Haryana with 4+ years of hands-on experience crafting web platforms, mobile apps, e-commerce stores, and automation systems.",
    primaryCtaText: "Let's Work Together",
    secondaryCtaText: "View My Work",
    profileImage: "/images/profile.jpg",
    profileImageFallback: "https://i.ibb.co/VYkHZH48/photo-2026-09-08-10-14-41.jpg",
  },

  // Service positioning
  servicePositioning:
    "Whether you need an affordable fast-turnaround website for a local business in Panipat / Haryana or a high-end, scalable web application, Android app, or secure custom system — I build it end-to-end.",

  // Social Links
  // Leave empty ("") if you do not want to show a specific social network
  socials: {
    github: "https://github.com/gauravbeniwal",
    linkedin: "https://linkedin.com/in/gauravbeniwal",
    instagram: "https://instagram.com/gauravbeniwalx",
    youtube: "https://youtube.com/@gauravbeniwal",
    x: "https://x.com/gauravbeniwal",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "What I Build", href: "#what-i-build" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
