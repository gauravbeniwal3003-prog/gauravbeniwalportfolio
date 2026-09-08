import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  AlertTriangle, 
  Server, 
  FileCode, 
  MessageSquare, 
  CheckCircle2, 
  Cpu,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function CybersecurityAuditPage() {
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    "Hi Gaurav, I need a Cybersecurity audit / penetration test / DDoS protection for my website or application."
  )}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SecurityService",
        "@id": "https://www.gauravbeniwal.online/services/cybersecurity-audit#service",
        "name": "Web Application Penetration Testing & Cybersecurity Audit",
        "provider": {
          "@type": "Person",
          "name": "Gaurav Beniwal",
          "telephone": siteConfig.phone,
          "email": siteConfig.email,
          "url": "https://www.gauravbeniwal.online"
        },
        "description": "Professional web application penetration testing, OWASP Top 10 vulnerability remediation, anti-DDoS configuration, and security hardening.",
        "areaServed": ["Panipat", "Haryana", "Delhi NCR", "India", "Global"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in a web security audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A full vulnerability scan checking OWASP Top 10 flaws (SQL injection, XSS, CSRF, broken access control), server header hardening (HSTS, CSP, X-Frame-Options), SSL/TLS configuration, rate limiting, and an executive PDF report with exact code remediation steps."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you secure a hacked or spam-targeted website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Emergency mitigation and DDoS/spam blocking can typically be enacted within 2 to 4 hours, followed by comprehensive code auditing and root cause remediation."
            }
          }
        ]
      }
    ]
  };

  const auditModules = [
    {
      icon: Terminal,
      title: "OWASP Top 10 Penetration Testing",
      desc: "Manual and automated inspection for SQL Injection, Cross-Site Scripting (XSS), Insecure Direct Object References (IDOR), and authorization bypasses."
    },
    {
      icon: Server,
      title: "Anti-DDoS & Cloudflare Edge Hardening",
      desc: "Set up Web Application Firewall (WAF) rules, bot-mitigation heuristics, rate-limiting, and geo-blocking to protect server uptime."
    },
    {
      icon: Lock,
      title: "API & Authentication Security",
      desc: "Audit of JWT tokens, session hijack protections, brute-force rate-limiting, OAuth security, and database permission schemas."
    },
    {
      icon: FileCode,
      title: "Source Code Security Audit",
      desc: "Line-by-line review of backend code, secret credential exposure, dependency vulnerability scanning, and cryptographic practices."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <SEOHead
        title="Cybersecurity Expert, Pentester & Web Hardening Specialist | Gaurav Beniwal"
        description="Hire cybersecurity consultant Gaurav Beniwal in Panipat & Haryana for web application penetration testing, anti-DDoS protection, OWASP vulnerability audit & server hardening."
        keywords="cybersecurity expert panipat, penetration testing haryana, web security audit india, anti ddos consultant, website security hardening panipat, ethical hacking services haryana"
        canonicalPath="/services/cybersecurity-audit"
        structuredData={pageSchema}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8 pb-16 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Cybersecurity Audit</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Application Defense &amp; Penetration Testing</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Penetration Testing, Anti-DDoS &amp; <span className="text-emerald-600">Cybersecurity Audits</span>
        </h1>

        <p className="mt-5 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Safeguard your business assets, user database, and server infrastructure against cyberattacks, data breaches, and downtime before malicious actors strike.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Request Confidential Security Audit</span>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all"
          >
            <span>Emergency Line: {siteConfig.phone}</span>
          </a>
        </div>
      </section>

      {/* Grid of Audit Modules */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Audit Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              End-to-End Application &amp; Server Hardening
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditModules.map((item, idx) => {
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

      {/* Security FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Security FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
            Common Security Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Will penetration testing disrupt my live website or customers?</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6.5">
              No. Testing is conducted using non-destructive, controlled testing protocols, often scheduled during low-traffic windows or against staging environments to ensure 100% uptime.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Do you fix the vulnerabilities discovered during the audit?</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed pl-6.5">
              Yes. Unlike pure advisory firms that only hand you a PDF, I write the actual code patches, configure your server firewall/headers, and re-test to confirm all vulnerabilities are closed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white shadow-xl space-y-5">
          <ShieldCheck className="w-10 h-10 mx-auto text-emerald-400" />
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Secure Your Applications Today
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Book a confidential security assessment with Gaurav Beniwal to identify critical vulnerabilities before hackers do.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              Get Security Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
