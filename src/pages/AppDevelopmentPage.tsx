import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  Smartphone, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Bell,
  CreditCard,
  WifiOff,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function AppDevelopmentPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I want to discuss a custom Mobile App Development project."
  )}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://gauravbeniwal.online/services/app-development#service",
        "name": "Custom Mobile App Development (Android & iOS)",
        "serviceType": "Mobile Application Development",
        "provider": {
          "@type": "Person",
          "name": "Gaurav Beniwal",
          "telephone": siteConfig.phone,
          "email": siteConfig.email,
          "url": "https://gauravbeniwal.online"
        },
        "description": "High-performance Android and iOS mobile application development with React Native, Flutter, offline-first sync, and real-time backend.",
        "areaServed": ["Panipat", "Haryana", "Delhi NCR", "India", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile App Offerings",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "MVP Mobile App (Android)"
              },
              "price": "19999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Production App (Android + iOS)"
              },
              "price": "39999",
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
            "name": "Do you build apps for both Android and iOS (iPhone)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Using modern cross-platform frameworks like React Native and Flutter, a single optimized codebase delivers 60fps native performance for both Google Play Store and Apple App Store."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help publish the app to the Google Play Store and Apple App Store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. I handle the entire submission process, including developer console setup, signing keys, privacy policies, screenshot assets, and store review guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of apps do you build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I build e-commerce and delivery apps, factory/inventory billing apps, customer loyalty apps, booking and appointment engines, and internal field-agent management apps."
            }
          }
        ]
      }
    ]
  };

  const appFeatures = [
    {
      icon: Zap,
      title: "60 FPS Fluid Native Experience",
      desc: "Instant touch responses, smooth layout gestures, and zero lag on budget to flagship smartphones."
    },
    {
      icon: WifiOff,
      title: "Offline-First Data Synchronization",
      desc: "Allows field agents and customers to use critical app features even during poor network connectivity with automatic cloud sync."
    },
    {
      icon: Bell,
      title: "Push Notifications & Re-engagement",
      desc: "Send targeted broadcast notifications, order updates, and marketing offers directly to your users' lock screens."
    },
    {
      icon: CreditCard,
      title: "Seamless Payment Gateways",
      desc: "Integrated with UPI, PhonePe, Google Pay, Paytm, Razorpay, and Cash on Delivery with automatic invoice generation."
    },
    {
      icon: Database,
      title: "Scalable Real-Time Backend",
      desc: "Built on Google Cloud, Firebase, and PostgreSQL to handle thousands of concurrent active daily users smoothly."
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication & Encryption",
      desc: "OTP phone login, biometric fingerprint lock, token-based session management, and encrypted API calls."
    }
  ];

  const appTypes = [
    {
      title: "B2B Factory & Inventory App",
      desc: "Track raw material yarn, orders, dispatched consignments, and worker attendance directly on mobile.",
      tags: ["Panipat Mills", "Inventory", "Live Stock"]
    },
    {
      title: "Retail & E-Commerce Mobile App",
      desc: "Direct-to-consumer store with product catalog, cart, discount coupons, UPI payments, and order tracking.",
      tags: ["High Conversion", "Instant Checkout", "Push Alerts"]
    },
    {
      title: "Booking & Service Marketplace",
      desc: "Appointment scheduling, GPS geolocation discovery, customer ratings, and automated WhatsApp confirmations.",
      tags: ["Live Booking", "GPS Tracking", "Service CRM"]
    },
    {
      title: "Internal Field Agent / Driver App",
      desc: "Driver dispatch, delivery route confirmation, digital signature collection, and proof-of-delivery photos.",
      tags: ["Offline Mode", "Signatures", "GPS Routing"]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="Custom Android & iOS Mobile App Developer in Panipat & Haryana | Gaurav Beniwal"
        description="Hire expert mobile app developer Gaurav Beniwal for custom Android & iOS applications in Haryana & Delhi NCR. Cross-platform React Native & Flutter apps with offline sync & UPI integration."
        keywords="mobile app developer panipat, android app developer haryana, app development samalkha, hire flutter developer delhi ncr, react native developer panipat, custom mobile application builder"
        canonicalPath="/services/app-development"
        structuredData={pageSchema}
      />

      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-16 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Mobile App Development</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Android &amp; iOS App Engineering</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          High-Performance <span className="text-emerald-600">Mobile Applications</span> Engineered to Scale
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          From concept to the Google Play Store and Apple App Store. Build custom, fast, and secure mobile apps designed for your customers and internal operations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Your App on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>
      </section>

      {/* Feature Capabilities Grid */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Built with Modern Mobile Technologies
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Clean architecture, offline databases, and high-frequency event synchronization for bulletproof reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-emerald-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
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

      {/* App Categories */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Industry Solutions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
            Custom Applications Tailored to Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {appTypes.map((app, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex flex-wrap gap-2 mb-3">
                {app.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-zinc-950">{app.title}</h3>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App FAQs */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Mobile App Development FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>How long does it take to develop a custom mobile app?</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6.5">
                A basic business app or minimum viable product (MVP) takes about 2 to 3 weeks. Full custom enterprise applications with complex real-time backends take 4 to 8 weeks with phased milestone releases.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Will I own the complete source code?</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6.5">
                Yes, 100%. You receive the complete GitHub repository, compiled APK/AAB files, database schemas, and documentation upon final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl space-y-5">
          <Sparkles className="w-8 h-8 mx-auto text-emerald-400" />
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Have an App Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Contact Gaurav Beniwal to get an accurate time &amp; cost estimate for your mobile application.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              WhatsApp Free App Consultation
            </a>
            <Link
              to="/services"
              className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-all"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
