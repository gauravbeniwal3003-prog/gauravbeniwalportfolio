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
        "@type": "WebSite",
        "@id": "https://www.gauravbeniwal.online/#website",
        "url": "https://www.gauravbeniwal.online/",
        "name": "Gaurav Beniwal — Full-Stack Developer & Website Builder",
        "description": "Official portfolio and digital engineering services of Gaurav Beniwal in Panipat, Haryana.",
        "publisher": {
          "@id": "https://www.gauravbeniwal.online/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Person",
        "@id": "https://www.gauravbeniwal.online/#person",
        "name": "Gaurav Beniwal",
        "url": "https://www.gauravbeniwal.online/",
        "image": "https://www.gauravbeniwal.online/images/profile.jpg",
        "jobTitle": "Full-Stack Developer, Website Builder & Cybersecurity Specialist",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance & Independent Software Engineering"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Panipat & Samalkha",
          "addressLocality": "Panipat",
          "addressRegion": "Haryana",
          "postalCode": "132103",
          "addressCountry": "IN"
        },
        "sameAs": [
          siteConfig.socials.instagram,
          siteConfig.socials.github,
          siteConfig.socials.linkedin,
          siteConfig.socials.youtube,
          siteConfig.socials.x
        ].filter(Boolean),
        "knowsAbout": [
          "Full-Stack Web Development",
          "Fast Business Website Building",
          "Android & iOS App Development",
          "Cybersecurity & Penetration Testing",
          "Python Scripting & Task Automation",
          "E-Commerce Marketplaces & UPI Integration",
          "React, Node.js, Next.js, TypeScript",
          "Reverse Engineering & Binary Analysis"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.gauravbeniwal.online/#service",
        "name": "Gaurav Beniwal — Digital Product & Website Engineering",
        "url": "https://www.gauravbeniwal.online/",
        "image": "https://www.gauravbeniwal.online/images/profile.jpg",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Panipat Main Commercial Hub",
          "addressLocality": "Panipat",
          "addressRegion": "Haryana",
          "postalCode": "132103",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.3909,
          "longitude": 76.9635
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.gauravbeniwal.online/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Gaurav Beniwal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gaurav Beniwal is an 18-year-old software developer, website builder, app engineer, and cybersecurity specialist based in Panipat and Samalkha, Haryana, India with 4+ years of hands-on software development experience."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Gaurav Beniwal offer in Panipat and Haryana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gaurav provides high-speed custom website building (starting ₹4,999), cross-platform Android/iOS mobile applications, e-commerce stores with UPI checkout, automated business systems/CRM, and web security vulnerability audits."
            }
          },
          {
            "@type": "Question",
            "name": "Does Gaurav Beniwal build websites for local businesses and textile factories?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Gaurav specializes in building digital presences for Panipat textile mills, yarn manufacturers, export houses, local shops, and healthcare clinics with sub-second loading speeds and top Google Local search rankings."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Gaurav Beniwal for a project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can connect with Gaurav directly on WhatsApp or mobile at +91 9729480795, via email at gauravbeniwal30003@gmail.com, or through his portfolio website at https://www.gauravbeniwal.online/."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Gaurav Beniwal — Full-Stack Developer, Website Builder & Cybersecurity in Panipat, Haryana"
        description="Official portfolio of Gaurav Beniwal. 18-year-old full-stack software developer, website builder, and cybersecurity specialist in Panipat, Haryana with 4+ years practical experience. Fast websites, mobile apps & digital solutions."
        keywords="Gaurav Beniwal, developer Panipat, website builder Panipat, web designer Haryana, app developer Samalkha, cybersecurity consultant Haryana, full stack developer India, Gaurav Beniwal portfolio"
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
