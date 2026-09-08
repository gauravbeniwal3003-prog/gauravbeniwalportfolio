import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Zap, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle,
  TrendingUp,
  Percent
} from 'lucide-react';

export default function EcommerceDevelopmentPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I am looking to build an E-Commerce Website / Online Store for my business."
  )}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gauravbeniwal.online/services/ecommerce-development#service",
        "name": "E-Commerce Website & Online Store Development",
        "provider": {
          "@type": "Person",
          "name": "Gaurav Beniwal",
          "telephone": siteConfig.phone,
          "email": siteConfig.email,
          "url": "https://www.gauravbeniwal.online"
        },
        "description": "Custom e-commerce store development, Panipat textile B2B/B2C portals, UPI payment gateways, automated shipping integration, and high-conversion checkout flows.",
        "areaServed": ["Panipat", "Haryana", "Delhi NCR", "India", "Global"]
      }
    ]
  };

  const ecomBenefits = [
    {
      icon: Zap,
      title: "1-Click UPI & Card Checkout",
      desc: "Instant payment with PhonePe, Google Pay, Paytm, credit/debit cards, net banking, or Cash on Delivery."
    },
    {
      icon: ShoppingBag,
      title: "Built for Panipat Textile & Export",
      desc: "Showcase blankets, bedsheets, carpets, curtains, yarn, and fabrics with bulk B2B wholesale pricing tiers."
    },
    {
      icon: Truck,
      title: "Automated Courier & Shiprocket Sync",
      desc: "Generate shipping labels, track parcels via Delhivery/BlueDart, and send real-time WhatsApp tracking links."
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused Checkout",
      desc: "Zero-distraction cart design with discount coupon engine and abandoned cart recovery notifications."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="E-Commerce Website Developer & Online Store Builder | Gaurav Beniwal"
        description="Build high-converting e-commerce stores in Panipat & Haryana with developer Gaurav Beniwal. UPI integration, Shiprocket tracking, wholesale B2B pricing & mobile-first design."
        keywords="ecommerce website developer panipat, online store builder haryana, textile ecommerce website, custom ecommerce panipat, shopify developer haryana, razorpay payment gateway integration"
        canonicalPath="/services/ecommerce-development"
        structuredData={pageSchema}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-16 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">E-Commerce Development</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
          <span>E-Commerce &amp; Online Retail Engineering</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          High-Converting <span className="text-emerald-600">E-Commerce Stores</span> &amp; B2B Portals
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Sell your products across India and worldwide. Engineered with sub-second page loads, automated UPI checkout, inventory management, and shipping integrations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Launch Your Store — WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all"
          >
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Designed to Sell</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Everything Your Online Business Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecomBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Box */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white shadow-xl space-y-5">
          <Sparkles className="w-8 h-8 mx-auto text-emerald-400" />
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Start Selling Online with Gaurav Beniwal
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Get your store designed, integrated with payment gateways and ready to accept orders within 7 days.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              Get Free E-Commerce Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
