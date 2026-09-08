/**
 * =========================================================================
 * 🛠️ TECH STACK & SKILLS DATA — GAURAV BENIWAL PORTFOLIO
 * =========================================================================
 * 
 * EDIT THIS FILE TO ADD, REMOVE, OR REORGANIZE YOUR SKILLS AND TECHNOLOGIES.
 * Compact glass pills/cards are rendered dynamically from this list.
 */

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Development",
    description: "Primary languages and frameworks used for building web apps and digital products.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Systems",
    description: "Database architectures, server environments, and reliable APIs.",
    skills: [
      "REST APIs",
      "Python",
      "Firebase",
      "Supabase",
      "SQL / Databases",
      "Linux",
      "Git & GitHub",
    ],
  },
  {
    title: "Automation & Digital Products",
    description: "Building autonomous systems, streamlining manual workflows, and delivering solutions.",
    skills: [
      "Workflow Automation",
      "Custom Scripting",
      "API Integrations",
      "Digital Products",
      "Cloud & Hosting",
    ],
  },
  {
    title: "Security & Research",
    description: "Deep technical insight into system mechanics and resilient architecture.",
    skills: [
      "Cybersecurity",
      "Ethical Hacking",
      "Reverse Engineering",
      "Network Security",
      "Secure Coding",
    ],
  },
];

// Flat list of primary highlighted skills for quick pills display
export const highlightSkills: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "Python",
  "Tailwind CSS",
  "REST APIs",
  "Firebase",
  "Supabase",
  "Automation",
  "Linux",
  "Git",
  "Cybersecurity",
];
