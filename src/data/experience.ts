/**
 * =========================================================================
 * ⏳ EXPERIENCE TIMELINE DATA — GAURAV BENIWAL PORTFOLIO
 * =========================================================================
 * 
 * EDIT THIS FILE TO ADD, MODIFY, OR UPDATE YOUR TIMELINE MILESTONES.
 * Each entry cleanly represents your journey without inventing fake companies.
 */

export interface TimelineEntry {
  period: string; // e.g. "2022", "2023", "2024", "2025–Present"
  focus: string;  // e.g. "Started building with technology"
  description: string;
  highlights?: string[];
}

export const experienceTimeline: TimelineEntry[] = [
  {
    period: "2025 – Present",
    focus: "Professional Development & Digital Product Building",
    description:
      "Designing and developing end-to-end web applications, modern websites, custom automation pipelines, and scalable digital solutions for real-world use cases.",
    highlights: ["Full-stack web applications", "Custom client digital products", "Production cloud deployments"],
  },
  {
    period: "2024",
    focus: "Advanced Systems & Digital Products",
    description:
      "Deepened expertise in scalable software architecture, modern reactive frameworks, reliable database integrations, and complex business logic.",
    highlights: ["Interactive React web applications", "REST API ecosystems", "Custom tooling"],
  },
  {
    period: "2023",
    focus: "Web Development & Automation Systems",
    description:
      "Expanded into full-fledged web development, automated workflow systems, script development, and system security fundamentals.",
    highlights: ["Automation scripts", "Responsive web interfaces", "Linux environment mastery"],
  },
  {
    period: "2022",
    focus: "Foundational Technology Exploration",
    description:
      "Began hands-on programming and software exploration at a young age, diving deeply into code fundamentals, reverse engineering logic, and computer systems.",
    highlights: ["Core programming languages", "Logic & reverse engineering exploration", "First working projects"],
  },
];
