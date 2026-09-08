import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  Globe, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Star, 
  Search, 
  Cpu, 
  BadgePercent,
  Clock,
  MapPin,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function WebsiteBuilderPanipatPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I am looking for website development services in Panipat/Haryana for my business."
  )}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gauravbeniwal.online/services/website-builder-panipat#business",
        "name": "Website Builder & Web Designer Panipat — Gaurav Beniwal",
        "image": "https://www.gauravbeniwal.online/images/profile.jpg",
        "url": "https://www.gauravbeniwal.online/services/website-builder-panipat",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "priceRange": "₹4,999 - ₹25,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Panipat Main Commercial Hub, GT Road",
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
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "27"
        }
      },
      {
        "@type": "Service",
        "name": "Custom Business Website Development & Design",
        "serviceType": "Web Development",
        "provider": {
          "@type": "Person",
          "name": "Gaurav Beniwal"
        },
        "areaServed": ["Panipat", "Samalkha", "Sonipat", "Karnal", "Haryana", "Delhi NCR"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Website Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Starter Business Website"
              },
              "price": "4999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Corporate & Factory Portal"
              },
              "price": "11999",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Panipat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website development pricing with Gaurav Beniwal starts from ₹4,999 for local businesses and starter landing pages, and ₹11,999+ for full custom corporate portals with SEO, hosting setup and WhatsApp integration."
            }
          },
          {
            "@type": "Question",
            "name": "How fast will my website be live?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard business websites are built and deployed within 3 to 5 business days, complete with mobile responsiveness, Google Search Console indexing, and speed optimization."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website rank on Google Search in Panipat and Haryana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every website is built with strict Schema.org structured data, fast loading speeds (under 1 second), mobile-first viewport design, and localized keywords to rank high on Google local search queries."
            }
          }
        ]
      }
    ]
  };

  const features = [
    {
      icon: Zap,
      title: "Sub-Second Loading Speeds",
      desc: "Scores 95+ on Google PageSpeed Insights. Fast websites convert 3x more local inquiries than slow WordPress templates."
    },
    {
      icon: Smartphone,
      title: "100% Mobile & Tablet Optimized",
      desc: "Over 82% of customers in Haryana browse on mobile. Your site will look stunning on all iPhone, Android, and desktop screens."
    },
    {
      icon: Search,
      title: "Google Local SEO Pre-configured",
      desc: "Built-in Google Maps tags, LocalBusiness Schema, GT Road/Panipat targeting, and instant Google Search Console indexing."
    },
    {
      icon: ShieldCheck,
      title: "Anti-DDoS & Bank-Grade Security",
      desc: "Protected by edge CDN, SSL certificates, automated bot defenses, and zero vulnerable third-party plugins."
    },
    {
      icon: MessageSquare,
      title: "1-Click Direct WhatsApp Lead Flow",
      desc: "Visitors instantly tap to WhatsApp your sales team with prefilled project inquiries so you never miss a customer."
    },
    {
      icon: BadgePercent,
      title: "Affordable & Transparent Pricing",
      desc: "No hidden agency markups or confusing monthly contracts. Flat rates, clear milestones, and lifetime code ownership."
    }
  ];

  const packages = [
    {
      name: "Starter Business",
      price: "₹4,999",
      subtitle: "Perfect for local shops, clinics, traders & services",
      highlight: false,
      features: [
        "1-3 Responsive Landing Pages",
        "Mobile & Tablet Viewport Ready",
        "WhatsApp Click-to-Chat Button",
        "Google Maps & Local Address Embed",
        "Free SSL Certificate Setup",
        "Delivery in 3 to 4 Days"
      ]
    },
    {
      name: "Professional Company",
      price: "₹11,999",
      subtitle: "Ideal for Panipat textile mills, manufacturers & exporters",
      highlight: true,
      badge: "Most Popular in Panipat",
      features: [
        "5-8 Comprehensive Custom Pages",
        "Product/Fabric Catalog Showcase",
        "Local SEO & Schema.org Structured Data",
        "Google Search Console Indexing",
        "Anti-Spam Contact & Quote Request Form",
        "High-Speed Edge CDN Hosting Setup",
        "Delivery in 5 to 7 Days"
      ]
    },
    {
      name: "Enterprise Custom App",
      price: "₹24,999+",
      subtitle: "For high-volume portals, custom logic & integrations",
      highlight: false,
      features: [
        "Full-Stack Web App Architecture",
        "Customer Login / Admin Dashboard",
        "Payment Gateway Integration (UPI / Cards)",
        "Automated WhatsApp & Email Alerts",
        "Priority Support & Performance Guarantee",
        "Custom Workflow Automation"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why hire an independent developer in Panipat over a generic Delhi agency?",
      a: "Working directly with Gaurav Beniwal gives you one-on-one direct communication without middleman agency overhead. You get faster turnaround, custom hand-crafted code without bloated WordPress templates, and direct local support across Panipat, Samalkha, and Karnal."
    },
    {
      q: "Do I have to pay monthly fees after the website is built?",
      a: "No! Once built and handed over, you own your domain and website 100%. Hosting can run on high-performance modern clouds with zero or ultra-low ongoing costs."
    },
    {
      q: "Can you upgrade or redesign my existing slow website?",
      a: "Yes. I frequently migrate slow, broken WordPress or outdated websites to modern, lightning-fast React architectures that boost Google rankings and customer conversion."
    },
    {
      q: "How do we start a project together?",
      a: "Simply tap the WhatsApp button or call directly. We will discuss your business goals, outline the structure, and get your new site live within days."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="Best Website Builder in Panipat & Haryana | Web Designer Gaurav Beniwal"
        description="Top-rated website builder and web developer in Panipat, Haryana. Fast, modern, SEO-optimized business websites for textile manufacturers, shops & startups starting ₹4,999. Call Gaurav Beniwal."
        keywords="website builder panipat, website developer panipat, web design company panipat, website designer haryana, best website developer samalkha, web development gt road panipat, affordable business website builder"
        canonicalPath="/services/website-builder-panipat"
        structuredData={pageSchema}
      />

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-16 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Website Builder Panipat</span>
        </nav>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Panipat, Samalkha &amp; Haryana Business Specialization</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          High-Speed, Custom Business Websites in <span className="text-emerald-600">Panipat, Haryana</span>
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Stop losing clients to slow, outdated websites. Get a custom, lightning-fast digital storefront engineered to rank #1 on Google Local Search and convert visitors into paying customers.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md hover:shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp — Instant Quote</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            <span>Call Gaurav: {siteConfig.phone}</span>
          </a>
        </div>

        {/* Live Metrics Trust Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-zinc-100 text-left">
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <p className="text-2xl font-black text-zinc-950">&lt; 0.8s</p>
            <p className="text-xs font-medium text-zinc-500 mt-0.5">Average Page Load</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <p className="text-2xl font-black text-emerald-600">100/100</p>
            <p className="text-xs font-medium text-zinc-500 mt-0.5">Google PageSpeed Score</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <p className="text-2xl font-black text-zinc-950">3-5 Days</p>
            <p className="text-xs font-medium text-zinc-500 mt-0.5">Rapid Turnaround</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <p className="text-2xl font-black text-zinc-950">₹4,999</p>
            <p className="text-xs font-medium text-zinc-500 mt-0.5">Starting Package</p>
          </div>
        </div>
      </section>

      {/* Why Panipat Businesses Need a Modern Website */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Engineered for Results</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Why Local Businesses in Panipat Choose Gaurav Beniwal
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Panipat is India&apos;s textile and manufacturing capital. Whether you run a yarn export mill, showroom, or local retail business, you need a website that commands respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Packages */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Honest Pricing</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
            Simple, Transparent Website Packages
          </h2>
          <p className="text-sm text-zinc-600 mt-2">
            Clear deliverables with zero hidden costs. All packages include direct developer access and code ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.highlight 
                  ? 'bg-zinc-900 text-white shadow-xl ring-2 ring-emerald-500 scale-[1.02]' 
                  : 'bg-white border border-zinc-200/90 text-zinc-900 shadow-xs'
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-zinc-950 uppercase tracking-wider">
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                <p className={`text-xs mt-1 ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{pkg.subtitle}</p>
                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-black">{pkg.price}</span>
                  <span className={`text-xs ml-1 ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>/ one-time</span>
                </div>

                <div className={`h-px w-full my-6 ${pkg.highlight ? 'bg-zinc-800' : 'bg-zinc-100'}`} />

                <ul className="space-y-3 text-xs sm:text-[13px]">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6">
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(`Hi Gaurav, I am interested in the ${pkg.name} package for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                    pkg.highlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Choose {pkg.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Website Building in Panipat: FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6.5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl space-y-5">
          <Sparkles className="w-8 h-8 mx-auto text-emerald-200" />
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Your New Website in Panipat?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
            Discuss your requirements directly with Gaurav Beniwal today. Free consultation, upfront pricing, and quick turnaround.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-emerald-950 font-bold text-sm shadow-sm hover:bg-emerald-50 transition-all hover:scale-105"
            >
              WhatsApp Gaurav Now
            </a>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-400/40 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
