import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  Home, 
  Layers, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  ShoppingBag, 
  Cpu, 
  ArrowLeft, 
  MessageSquare, 
  FileText,
  Search
} from 'lucide-react';

export default function NotFoundPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I landed on a 404 page on your website and would like assistance or project information."
  )}`;

  const serviceLinks = [
    {
      title: "Website Builder Panipat",
      path: "/services/website-builder-panipat",
      icon: Globe,
      desc: "Fast, Google SEO-optimized websites from ₹4,999"
    },
    {
      title: "Mobile App Development",
      path: "/services/app-development",
      icon: Smartphone,
      desc: "Native-speed Android & iOS applications"
    },
    {
      title: "Cybersecurity & Pentesting",
      path: "/services/cybersecurity-audit",
      icon: ShieldCheck,
      desc: "OWASP vulnerability scanning & server hardening"
    },
    {
      title: "E-Commerce Development",
      path: "/services/ecommerce-development",
      icon: ShoppingBag,
      desc: "Online stores with Razorpay, UPI & logistics sync"
    },
    {
      title: "Business Automation & ERP",
      path: "/services/business-automation",
      icon: Cpu,
      desc: "WhatsApp chatbots, Excel to web & custom CRM"
    },
  ];

  return (
    <div className="pt-28 pb-20 min-h-[85vh] flex flex-col justify-center bg-white">
      <SEOHead
        title="404 — Page Not Found | Gaurav Beniwal"
        description="The requested page could not be found on Gaurav Beniwal's website. Navigate back to the homepage or explore software development services in Panipat, Haryana."
        keywords="404, page not found, gaurav beniwal, website builder panipat, developer haryana"
        canonicalPath="/404"
        robots="noindex, follow"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-red-700 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* Primary Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
          Oops! That Page <span className="text-emerald-600">Doesn&apos;t Exist</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto mb-10 leading-relaxed">
          The link you followed might be broken, outdated, or the address was mistyped. Don&apos;t worry — all main services, projects, and contact channels are right here.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-sm transition-all"
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Browse All Services</span>
          </Link>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 font-semibold text-sm transition-all shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Gaurav</span>
          </a>
        </div>

        {/* Helpful Destinations Grid */}
        <div className="text-left bg-zinc-50/70 border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-5 border-b border-zinc-200/60 pb-3">
            <div>
              <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Explore Popular Pages &amp; Services
              </h2>
              <p className="text-xs text-zinc-500">Quickly find what you were searching for</p>
            </div>
            <Search className="w-4 h-4 text-zinc-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {serviceLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  className="group p-3.5 rounded-2xl bg-white border border-zinc-200/70 hover:border-emerald-500/40 hover:shadow-sm transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 group-hover:bg-emerald-50 text-zinc-600 group-hover:text-emerald-600 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-snug mt-0.5 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Sitemap Link */}
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-2xl bg-white border border-zinc-200/70 hover:border-zinc-300 hover:shadow-sm transition-all flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-zinc-50 group-hover:bg-zinc-100 text-zinc-600 flex items-center justify-center shrink-0 transition-colors">
                <FileText className="w-4 h-4 text-zinc-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors truncate">
                  XML Sitemap
                </h3>
                <p className="text-[11px] text-zinc-500 leading-snug mt-0.5">
                  Complete index of all site URLs for search crawlers
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go back to Gaurav Beniwal&apos;s Portfolio</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
