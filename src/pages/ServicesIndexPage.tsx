import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  ShoppingBag, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ServicesIndexPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I am exploring your services on gauravbeniwal.online and would like to discuss a project."
  )}`;

  const services = [
    {
      id: "website-builder-panipat",
      title: "Website Builder & Web Design (Panipat & Haryana)",
      slug: "/services/website-builder-panipat",
      icon: Globe,
      badge: "Most Requested",
      desc: "Fast, custom websites for local businesses, shops, and Panipat textile mills. Sub-second load times, Google Local SEO pre-configured, and mobile perfection.",
      startingAt: "From ₹4,999",
      highlights: ["Google PageSpeed 95+", "Ready in 3-5 Days", "1-Click WhatsApp Leads", "Free SSL & Domain Setup"]
    },
    {
      id: "app-development",
      title: "Android & iOS Mobile App Development",
      slug: "/services/app-development",
      icon: Smartphone,
      badge: "High Performance",
      desc: "Native-speed cross-platform apps built with React Native and Flutter. Offline-first database sync, real-time push notifications, and UPI checkout.",
      startingAt: "From ₹19,999",
      highlights: ["Play Store & App Store Ready", "Offline Database", "Push Notifications", "OTP & Biometrics"]
    },
    {
      id: "cybersecurity-audit",
      title: "Cybersecurity, Pentesting & Web Hardening",
      slug: "/services/cybersecurity-audit",
      icon: ShieldCheck,
      badge: "Critical Protection",
      desc: "Comprehensive OWASP Top 10 penetration testing, server firewall rules, anti-DDoS mitigations, and emergency hack remediation.",
      startingAt: "Custom Scope",
      highlights: ["OWASP Vulnerability Audit", "Anti-DDoS WAF Hardening", "Live Attack Remediation", "Executive PDF Report"]
    },
    {
      id: "ecommerce-development",
      title: "E-Commerce Stores & B2B Wholesale Portals",
      slug: "/services/ecommerce-development",
      icon: ShoppingBag,
      badge: "Sales Focused",
      desc: "Sell products across India and worldwide. Engineered for Panipat textile, handloom, and retail brands with UPI and Shiprocket sync.",
      startingAt: "From ₹14,999",
      highlights: ["Razorpay & UPI QR Checkout", "Shiprocket Automated Courier", "Wholesale B2B Tiers", "Abandoned Cart Alerts"]
    },
    {
      id: "business-automation",
      title: "Custom Business Automation & CRM Software",
      slug: "/services/business-automation",
      icon: Cpu,
      badge: "Operations Booster",
      desc: "Replace manual paperwork and messy Excel sheets with custom web portals, WhatsApp CRM chatbots, and factory dispatch trackers.",
      startingAt: "From ₹12,999",
      highlights: ["WhatsApp 24/7 Chatbots", "Excel to Web Migration", "Inventory & Barcodes", "Daily Auto-Reports"]
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "Software Development & Digital Services by Gaurav Beniwal",
        "description": "Comprehensive digital development services including website building, mobile app engineering, cybersecurity audits, e-commerce, and business automation.",
        "itemListElement": services.map((s, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": s.title,
          "url": `https://www.gauravbeniwal.online${s.slug}`
        }))
      }
    ]
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="Software Engineering, Website & App Development Services | Gaurav Beniwal"
        description="Explore all software development and digital engineering services by Gaurav Beniwal in Panipat, Haryana. High-speed websites, mobile apps, e-commerce, and cybersecurity."
        keywords="software development services panipat, web developer services haryana, mobile app development panipat, ecommerce store developer haryana, cybersecurity consulting india"
        canonicalPath="/services"
        structuredData={servicesSchema}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-14 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Services</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Specialized Digital Engineering Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Tailored Engineering Services Built for <span className="text-emerald-600">Maximum Impact</span>
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Explore dedicated solutions crafted specifically to accelerate your business, safeguard your infrastructure, and capture high-intent customers online.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-500">{service.startingAt}</span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 hover:text-emerald-600 transition-colors">
                    <Link to={service.slug}>{service.title}</Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {service.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="text-[11px] font-medium text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to={service.slug}
                  className="flex-1 sm:w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(`Hi Gaurav, I would like to inquire about your ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* Global Callout */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl space-y-4">
          <Sparkles className="w-8 h-8 mx-auto text-emerald-400" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need a Custom Combination or Specialized Project?
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Gaurav works directly with you to architect a tailored package for your unique business goals.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to Gaurav Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
