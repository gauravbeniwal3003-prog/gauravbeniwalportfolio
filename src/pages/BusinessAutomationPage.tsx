import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  Cpu, 
  Workflow, 
  Bot, 
  Database, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Zap,
  BarChart3
} from 'lucide-react';

export default function BusinessAutomationPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I am interested in Custom Business Automation / CRM / WhatsApp Bot software for my business."
  )}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.gauravbeniwal.online/services/business-automation#service",
        "name": "Custom Business Software & Workflow Automation",
        "provider": {
          "@type": "Person",
          "name": "Gaurav Beniwal",
          "telephone": siteConfig.phone,
          "email": siteConfig.email,
          "url": "https://www.gauravbeniwal.online"
        },
        "description": "Custom CRM, ERP, WhatsApp automation bots, factory inventory tools and automated reporting systems by developer Gaurav Beniwal.",
        "areaServed": ["Panipat", "Haryana", "Delhi NCR", "India", "Global"]
      }
    ]
  };

  const automations = [
    {
      icon: Bot,
      title: "WhatsApp Automated CRM & Chatbots",
      desc: "Instantly capture leads from your ads, send automatic product brochures, confirm customer orders, and answer FAQs 24/7 without manual staff."
    },
    {
      icon: Workflow,
      title: "Excel to Web Dashboard Migration",
      desc: "Replace error-prone Excel spreadsheets with centralized web dashboards with role-based access for accountants, managers, and factory supervisors."
    },
    {
      icon: Database,
      title: "Inventory & Dispatch Tracking",
      desc: "Track raw materials, stock levels, GST invoices, and lorry dispatch manifests with instant barcode/QR scanning."
    },
    {
      icon: BarChart3,
      title: "Real-time Business Telemetry",
      desc: "Daily automated sales summaries and profit margins sent directly to your phone every evening at 8 PM."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="Custom Business Automation, CRM & ERP Developer | Gaurav Beniwal"
        description="Replace manual chaos with custom business automation, WhatsApp CRM bots, factory stock management & cloud software in Panipat, Haryana by Gaurav Beniwal."
        keywords="business automation panipat, custom software developer haryana, crm developer panipat, whatsapp bot developer haryana, factory erp software panipat, business process automation india"
        canonicalPath="/services/business-automation"
        structuredData={pageSchema}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-16 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Business Automation</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <Cpu className="w-3.5 h-3.5 text-emerald-600" />
          <span>Workflow Automation &amp; Custom ERP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Custom <span className="text-emerald-600">Business Automation</span> &amp; Internal Software
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Cut operational costs and eliminate manual busywork. Build tailored software systems, WhatsApp bots, and cloud portals fitted precisely to how your business runs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on Business Automation</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Save 20+ Hours Weekly</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              Automate Your Repetitive Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automations.map((item, idx) => {
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

      {/* Bottom CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl space-y-5">
          <Sparkles className="w-8 h-8 mx-auto text-emerald-400" />
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Schedule a direct workflow audit with Gaurav Beniwal to pinpoint where software can save you thousands in overhead.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              WhatsApp Automation Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
