import Hero from '../components/Hero';
import About from '../components/About';
import WhatIBuild from '../components/WhatIBuild';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import BeyondDevelopment from '../components/BeyondDevelopment';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config/site';

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gauravbeniwal.online/#person",
        "name": "Gaurav Beniwal",
        "url": "https://gauravbeniwal.online",
        "image": "https://gauravbeniwal.online/images/profile.jpg",
        "jobTitle": "Full-Stack Developer & Cybersecurity Specialist",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance & Independent Consulting"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Panipat",
          "addressRegion": "Haryana",
          "addressCountry": "IN"
        },
        "sameAs": [
          siteConfig.socials.instagram,
          siteConfig.socials.github,
          siteConfig.socials.linkedin
        ].filter(Boolean)
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://gauravbeniwal.online/#service",
        "name": "Gaurav Beniwal — Digital Product & Website Engineering",
        "url": "https://gauravbeniwal.online",
        "image": "https://gauravbeniwal.online/images/profile.jpg",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Panipat",
          "addressRegion": "Haryana",
          "addressCountry": "IN"
        },
        "areaServed": [
          "Panipat",
          "Samalkha",
          "Karnal",
          "Sonipat",
          "Haryana",
          "Delhi NCR",
          "India",
          "Worldwide"
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Gaurav Beniwal — Full-Stack Developer, Website Builder & Cybersecurity in Panipat, Haryana"
        description="Official portfolio of Gaurav Beniwal. Elite full-stack software engineer, fast website builder & cybersecurity expert in Panipat, Haryana. Delivering high-speed web apps & digital solutions."
        keywords="Gaurav Beniwal, developer Panipat, website builder Panipat, web designer Haryana, app developer Samalkha, cybersecurity consultant Haryana, full stack developer India"
        canonicalPath="/"
        structuredData={homeSchema}
      />
      <Hero />
      <About />
      <WhatIBuild />
      <Projects />
      <Experience />
      <Skills />
      <BeyondDevelopment />
      <Contact />
    </>
  );
}
