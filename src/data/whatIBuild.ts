/**
 * =========================================================================
 * 💡 WHAT I BUILD DATA — GAURAV BENIWAL PORTFOLIO
 * =========================================================================
 * 
 * EDIT THIS FILE TO MODIFY YOUR OFFERINGS / DISCIPLINES.
 * Each item is rendered as an elegant liquid-glass card with minimalist line icons.
 */

export interface BuildOffering {
  number: string;
  title: string;
  description: string;
  iconName: 'Globe' | 'Layout' | 'Smartphone' | 'Cpu' | 'Box' | 'ShieldCheck';
  tags: string[];
}

export const whatIBuildOfferings: BuildOffering[] = [
  {
    number: "01",
    title: "Websites",
    description: "Fast, responsive and conversion-focused websites designed around real business needs.",
    iconName: "Globe",
    tags: ["High Performance", "Mobile Responsive", "Clean UI"],
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Custom web applications with practical functionality, clean interfaces and scalable architecture.",
    iconName: "Layout",
    tags: ["React & TypeScript", "Full-Stack", "Secure APIs"],
  },
  {
    number: "03",
    title: "Mobile & Web Apps",
    description: "Application experiences designed to work smoothly across modern devices.",
    iconName: "Smartphone",
    tags: ["Android & Web", "Responsive UX", "Cross-Platform"],
  },
  {
    number: "04",
    title: "Automation",
    description: "Tools and systems that reduce repetitive work and make processes smarter.",
    iconName: "Cpu",
    tags: ["Custom Scripts", "API Integrations", "Data Workflows"],
  },
  {
    number: "05",
    title: "Digital Products",
    description: "From an idea to a working product — turning concepts into usable technology.",
    iconName: "Box",
    tags: ["MVP to Launch", "Architecture", "Practical Execution"],
  },
  {
    number: "06",
    title: "Security & Research",
    description: "Cybersecurity, ethical hacking, reverse engineering and technical research as part of my broader technology background.",
    iconName: "ShieldCheck",
    tags: ["Deformation Analysis", "Defensive Mindset", "Deep Tech Insight"],
  },
];
