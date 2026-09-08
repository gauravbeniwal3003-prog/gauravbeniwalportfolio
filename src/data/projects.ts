/**
 * =========================================================================
 * 📁 PROJECTS DATA — GAURAV BENIWAL PORTFOLIO
 * =========================================================================
 * 
 * EDIT THIS FILE TO ADD, REMOVE, OR MODIFY PROJECTS.
 * 
 * TO ADD A NEW PROJECT:
 * 1. Put your image in: public/images/projects/your-project-image.webp
 * 2. Copy the template block below and paste it into the `projects` array.
 * 3. Fill in the title, description, technologies, and link.
 * 
 * -------------------------------------------------------------------------
 * TEMPLATE TO COPY:
 * -------------------------------------------------------------------------
 * {
 *   id: "my-new-project",
 *   title: "Project Name",
 *   category: "Web Application", // e.g. "Web Application", "Automation Tool", "Digital Product", "Mobile App"
 *   description: "Write a short 1-2 sentence description of what the project does and the problem it solves.",
 *   image: "/images/projects/project-1.svg", // Or "/images/projects/my-image.webp"
 *   technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
 *   link: "https://example.com", // Project URL or demo
 *   github: "https://github.com/gauravbeniwal/example", // Optional github link
 *   featured: true // Set to true for large editorial showcase card, false for compact card
 * },
 * -------------------------------------------------------------------------
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // =======================================================================
  // PROJECT 1: QueKart Marketplace (Featured Magazine Card)
  // =======================================================================
  {
    id: "quekart-ecommerce",
    title: "QueKart™ — Direct Wholesale E-Commerce Marketplace",
    category: "E-Commerce",
    description:
      "India's direct factory wholesale online shopping platform engineered for fast catalog browsing, flash wholesale deals, real-time cart state, and frictionless order placement.",
    image: "/images/projects/quekart.svg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Wholesale Marketplace", "Vercel"],
    link: "https://www.quekart.in",
    featured: true,
  },

  // =======================================================================
  // PROJECT 2: SocialUpHub SMM Panel
  // =======================================================================
  {
    id: "socialuphub-smm-panel",
    title: "SocialUpHub — Automated SMM Growth Panel",
    category: "Web Platform & SMM",
    description:
      "High-volume social media marketing reseller platform featuring instant order dispatch automation, multi-tier API integration, real-time status tracking, and secure wallet management.",
    image: "/images/projects/socialuphub.svg",
    technologies: ["Next.js", "Node.js", "REST APIs", "Automation", "Payment Gateway"],
    link: "https://www.socialuphub.in",
    featured: false,
  },

  // =======================================================================
  // PROJECT 3: XYZ Supplement Store Demo
  // =======================================================================
  {
    id: "xyz-supplement-store",
    title: "XYZ Supplement Store — Performance Nutrition",
    category: "E-Commerce",
    description:
      "Interactive nutritional supplement storefront built with clean modern UI design, dynamic product filtering, nutritional facts showcase, and responsive cart checkout.",
    image: "/images/projects/supplement-store.svg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Netlify", "Storefront"],
    link: "https://xyzsupplement.netlify.app",
    featured: false,
  },

  // =======================================================================
  // PROJECT 4: Drishti Library Portal (Featured Magazine Card)
  // =======================================================================
  {
    id: "drishti-library-portal",
    title: "Drishti Library — Digital Management & Seat Booking Portal",
    category: "Web Application",
    description:
      "Comprehensive web portal for study library aspirants featuring interactive seat layout matrix, morning/evening/full-day shift reservation management, and member facilities overview.",
    image: "/images/projects/drishti-library.svg",
    technologies: ["React", "Tailwind CSS", "Netlify", "Portal Architecture", "UI/UX"],
    link: "https://drishtilibrary.netlify.app",
    featured: true,
  },
];
